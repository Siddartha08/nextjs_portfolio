import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import io
from js import document
from PIL import Image
import base64

def sum_faceamount_status_d(x):
    # 'x' is a Series of FaceAmount values for the group
    # We use the index of 'x' to get corresponding Status values from the original DataFrame
    status = full_dataset.loc[x.index, 'Status']
    # Sum FaceAmount where Status is 'D'
    return x[status == 'D'].sum()

data = [
    {"CurrentAge": 18, "FaceAmount": 340000, "qx_amount": 528703.542, "A/E": 0.6430825084201913},
    {"CurrentAge": 19, "FaceAmount": 1161000, "qx_amount": 1963958.43, "A/E": 0.5911530418696286},
    {"CurrentAge": 20, "FaceAmount": 3253000, "qx_amount": 3774611.324, "A/E": 0.8618105867792389},
    {"CurrentAge": 21, "FaceAmount": 4043000, "qx_amount": 5743276.826, "A/E": 0.7039535307957311},
    {"CurrentAge": 22, "FaceAmount": 10239000, "qx_amount": 7783956.462, "A/E": 1.3153979020804034},
    {"CurrentAge": 23, "FaceAmount": 12796000, "qx_amount": 9881370.906, "A/E": 1.2949620170851222},
    {"CurrentAge": 24, "FaceAmount": 10767000, "qx_amount": 12231633.826, "A/E": 0.880258529086546},
    {"CurrentAge": 25, "FaceAmount": 17530000, "qx_amount": 15107490.484, "A/E": 1.160351550018557},
    {"CurrentAge": 26, "FaceAmount": 19314000, "qx_amount": 18429099.756, "A/E": 1.0480164661169573},
    {"CurrentAge": 27, "FaceAmount": 25775000, "qx_amount": 22730419.006, "A/E": 1.1339430211645611},
    {"CurrentAge": 28, "FaceAmount": 19821000, "qx_amount": 26533064.96, "A/E": 0.7470301689564024},
    {"CurrentAge": 29, "FaceAmount": 31243000, "qx_amount": 30459746.6, "A/E": 1.0257143767571593},
    {"CurrentAge": 30, "FaceAmount": 39146000, "qx_amount": 34890328.074, "A/E": 1.1219728263080246},
    {"CurrentAge": 31, "FaceAmount": 29221000, "qx_amount": 39861431.394, "A/E": 0.7330644931230037},
    {"CurrentAge": 32, "FaceAmount": 43093000, "qx_amount": 45694913.196, "A/E": 0.9430590187393602},
    {"CurrentAge": 33, "FaceAmount": 51683000, "qx_amount": 51983048.162, "A/E": 0.9942279613718509},
    {"CurrentAge": 34, "FaceAmount": 52988000, "qx_amount": 58569429.688, "A/E": 0.9047040458182308},
    {"CurrentAge": 35, "FaceAmount": 59330000, "qx_amount": 65772385.892, "A/E": 0.902050293529285},
    {"CurrentAge": 36, "FaceAmount": 83191000, "qx_amount": 73922094.138, "A/E": 1.1253874903042727},
    {"CurrentAge": 37, "FaceAmount": 78521000, "qx_amount": 83700652.646, "A/E": 0.9381169383719551},
    {"CurrentAge": 38, "FaceAmount": 72504000, "qx_amount": 95428087.644, "A/E": 0.7597763068508757},
    {"CurrentAge": 39, "FaceAmount": 116402000, "qx_amount": 108575941.458, "A/E": 1.0720791221048478},
    {"CurrentAge": 40, "FaceAmount": 135464000, "qx_amount": 123470473.162, "A/E": 1.0971368014623533},
    {"CurrentAge": 41, "FaceAmount": 130081000, "qx_amount": 140710270.656, "A/E": 0.9244598805300731},
    {"CurrentAge": 42, "FaceAmount": 174590000, "qx_amount": 160187382.302, "A/E": 1.089911062226155},
    {"CurrentAge": 43, "FaceAmount": 201055000, "qx_amount": 182519265.54, "A/E": 1.101554947666266},
    {"CurrentAge": 44, "FaceAmount": 229151000, "qx_amount": 208330432.666, "A/E": 1.0999401146897245},
    {"CurrentAge": 45, "FaceAmount": 245195000, "qx_amount": 237302791.504, "A/E": 1.033257967367261},
    {"CurrentAge": 46, "FaceAmount": 275003000, "qx_amount": 270212442.372, "A/E": 1.0177288565468976},
    {"CurrentAge": 47, "FaceAmount": 343908000, "qx_amount": 306226454.758, "A/E": 1.1230512408595736},
    {"CurrentAge": 48, "FaceAmount": 365918000, "qx_amount": 346427332.072, "A/E": 1.056261923132408},
    {"CurrentAge": 49, "FaceAmount": 418114000, "qx_amount": 391556999.824, "A/E": 1.0678240976101487},
    {"CurrentAge": 50, "FaceAmount": 475803000, "qx_amount": 441282208.614, "A/E": 1.0782283779226551},
    {"CurrentAge": 51, "FaceAmount": 527367000, "qx_amount": 497961525.342, "A/E": 1.0590517001043491},
    {"CurrentAge": 52, "FaceAmount": 566768000, "qx_amount": 561005703.622, "A/E": 1.0102713686167486},
    {"CurrentAge": 53, "FaceAmount": 674487000, "qx_amount": 629369682.332, "A/E": 1.0716865126086579},
    {"CurrentAge": 54, "FaceAmount": 758541000, "qx_amount": 705091854.194, "A/E": 1.075804514671494},
    {"CurrentAge": 55, "FaceAmount": 814077000, "qx_amount": 784774588.882, "A/E": 1.0373386339633457},
    {"CurrentAge": 56, "FaceAmount": 960739000, "qx_amount": 869378080.946, "A/E": 1.1050876725055998},
    {"CurrentAge": 57, "FaceAmount": 1005303000, "qx_amount": 957837236.966, "A/E": 1.0495551448640172},
    {"CurrentAge": 58, "FaceAmount": 1146766000, "qx_amount": 1051505233.538, "A/E": 1.0905946669818047},
    {"CurrentAge": 59, "FaceAmount": 1257337000, "qx_amount": 1150567078.492, "A/E": 1.0927976503968277},
    {"CurrentAge": 60, "FaceAmount": 1308571000, "qx_amount": 1249074171.994, "A/E": 1.0476327421861749},
    {"CurrentAge": 61, "FaceAmount": 1491947000, "qx_amount": 1346248329.432, "A/E": 1.108225702036319},
    {"CurrentAge": 62, "FaceAmount": 1496381000, "qx_amount": 1442312549.634, "A/E": 1.037487332672603},
    {"CurrentAge": 63, "FaceAmount": 1594095000, "qx_amount": 1533691085.094, "A/E": 1.039384668459684},
    {"CurrentAge": 64, "FaceAmount": 1697274000, "qx_amount": 1623680119.414, "A/E": 1.045325356704226},
    {"CurrentAge": 65, "FaceAmount": 1808539000, "qx_amount": 1709485971.592, "A/E": 1.057943165404133},
    {"CurrentAge": 66, "FaceAmount": 1947968000, "qx_amount": 1793333060.592, "A/E": 1.086227674493969},
    {"CurrentAge": 67, "FaceAmount": 1964996000, "qx_amount": 1872528510.348, "A/E": 1.0493810850627932},
    {"CurrentAge": 68, "FaceAmount": 2102190000, "qx_amount": 1944708570.664, "A/E": 1.080979449420655},
    {"CurrentAge": 69, "FaceAmount": 2095862000, "qx_amount": 2005621151.618, "A/E": 1.0449939652407434},
    {"CurrentAge": 70, "FaceAmount": 2185136000, "qx_amount": 2065395701.108, "A/E": 1.0579745076586362},
    {"CurrentAge": 71, "FaceAmount": 2301872000, "qx_amount": 2110660100.416, "A/E": 1.0905934117702387},
    {"CurrentAge": 72, "FaceAmount": 2226667000, "qx_amount": 2150703512.526, "A/E": 1.0353202973034534},
    {"CurrentAge": 73, "FaceAmount": 2338181000, "qx_amount": 2187893516.622, "A/E": 1.068690492583952},
    {"CurrentAge": 74, "FaceAmount": 2351536000, "qx_amount": 2206121135.268, "A/E": 1.0659142702580269},
    {"CurrentAge": 75, "FaceAmount": 2414042000, "qx_amount": 2209820012.39, "A/E": 1.09241566573973},
    {"CurrentAge": 76, "FaceAmount": 2325681000, "qx_amount": 2207829295.05, "A/E": 1.053378993210311},
    {"CurrentAge": 77, "FaceAmount": 2362821000, "qx_amount": 2209396797.86, "A/E": 1.0694416694586526},
    {"CurrentAge": 78, "FaceAmount": 2352448000, "qx_amount": 2196242192.682, "A/E": 1.071124126400306},
    {"CurrentAge": 79, "FaceAmount": 2268242000, "qx_amount": 2172869815.458, "A/E": 1.0438922681255514},
    {"CurrentAge": 80, "FaceAmount": 2292972000, "qx_amount": 2136122530.046, "A/E": 1.0734271876953718},
    {"CurrentAge": 81, "FaceAmount": 2182290000, "qx_amount": 2080293103.652, "A/E": 1.0490300603164728},
    {"CurrentAge": 82, "FaceAmount": 2144317000, "qx_amount": 2030386492.542, "A/E": 1.0561127193647557},
    {"CurrentAge": 83, "FaceAmount": 2022280000, "qx_amount": 1984563485.03, "A/E": 1.0190049425248948},
    {"CurrentAge": 84, "FaceAmount": 2038205000, "qx_amount": 1933864514.3, "A/E": 1.0539543928379946},
    {"CurrentAge": 85, "FaceAmount": 1924722000, "qx_amount": 1887158601.04, "A/E": 1.0199047387640334},
    {"CurrentAge": 86, "FaceAmount": 1918954000, "qx_amount": 1861190483.36, "A/E": 1.0310357898111104},
    {"CurrentAge": 87, "FaceAmount": 1878757000, "qx_amount": 1786864694.42, "A/E": 1.0514265606494773},
    {"CurrentAge": 88, "FaceAmount": 1764640000, "qx_amount": 1683817379.466, "A/E": 1.0479996355422059},
    {"CurrentAge": 89, "FaceAmount": 1567991000, "qx_amount": 1557841571.362, "A/E": 1.006515058286143},
    {"CurrentAge": 90, "FaceAmount": 1356633000, "qx_amount": 1295373071.64, "A/E": 1.0472913400017203},
    {"CurrentAge": 91, "FaceAmount": 1003370000, "qx_amount": 1032651076.632, "A/E": 0.9716447527198631},
    {"CurrentAge": 92, "FaceAmount": 832934000, "qx_amount": 799682309.482, "A/E": 1.0415811255591474},
    {"CurrentAge": 93, "FaceAmount": 641563000, "qx_amount": 596894796.082, "A/E": 1.0748342994631563},
    {"CurrentAge": 94, "FaceAmount": 486105000, "qx_amount": 446309878.768, "A/E": 1.089164777938259},
    {"CurrentAge": 95, "FaceAmount": 345296000, "qx_amount": 572055834.06, "A/E": 0.6036054165366378},
]

data2 = [
    {"CurrentAge": 18, "Amount": 2.0, "qx_count": 1.9431, "A/E": 1.0292831043178425},
    {"CurrentAge": 19, "Amount": 6.0, "qx_count": 7.183002, "A/E": 0.8353053500472365},
    {"CurrentAge": 20, "Amount": 15.0, "qx_count": 13.864092, "A/E": 1.0819316548101383},
    {"CurrentAge": 21, "Amount": 24.0, "qx_count": 21.14391, "A/E": 1.1350786112880729},
    {"CurrentAge": 22, "Amount": 32.0, "qx_count": 28.74684, "A/E": 1.1131658297051086},
    {"CurrentAge": 23, "Amount": 47.0, "qx_count": 36.663318, "A/E": 1.2819352574690592},
    {"CurrentAge": 24, "Amount": 51.0, "qx_count": 45.316584, "A/E": 1.125415808040606},
    {"CurrentAge": 25, "Amount": 50.0, "qx_count": 55.814934, "A/E": 0.8958175960577146},
    {"CurrentAge": 26, "Amount": 78.0, "qx_count": 68.403144, "A/E": 1.140298463474135},
    {"CurrentAge": 27, "Amount": 94.0, "qx_count": 84.187894, "A/E": 1.1165500826045132},
    {"CurrentAge": 28, "Amount": 93.0, "qx_count": 98.551114, "A/E": 0.943672742248251},
    {"CurrentAge": 29, "Amount": 119.0, "qx_count": 113.358298, "A/E": 1.049768760642472},
    {"CurrentAge": 30, "Amount": 133.0, "qx_count": 129.476394, "A/E": 1.027214273514599},
    {"CurrentAge": 31, "Amount": 143.0, "qx_count": 147.848394, "A/E": 0.9672069890728742},
    {"CurrentAge": 32, "Amount": 143.0, "qx_count": 169.274498, "A/E": 0.8447817107099027},
    {"CurrentAge": 33, "Amount": 176.0, "qx_count": 192.401638, "A/E": 0.9147531269978065},
    {"CurrentAge": 34, "Amount": 202.0, "qx_count": 216.666904, "A/E": 0.932306671073308},
    {"CurrentAge": 35, "Amount": 236.0, "qx_count": 243.446092, "A/E": 0.9694137953136664},
    {"CurrentAge": 36, "Amount": 270.0, "qx_count": 274.35944, "A/E": 0.9841104793040837},
    {"CurrentAge": 37, "Amount": 322.0, "qx_count": 310.75971, "A/E": 1.0361703581201052},
    {"CurrentAge": 38, "Amount": 308.0, "qx_count": 353.78912, "A/E": 0.870575104175052},
    {"CurrentAge": 39, "Amount": 391.0, "qx_count": 402.953706, "A/E": 0.9703347907662624},
    {"CurrentAge": 40, "Amount": 457.0, "qx_count": 459.178396, "A/E": 0.9952558830751261},
    {"CurrentAge": 41, "Amount": 510.0, "qx_count": 522.641338, "A/E": 0.9758125944488532},
    {"CurrentAge": 42, "Amount": 655.0, "qx_count": 593.760064, "A/E": 1.103139196643579},
    {"CurrentAge": 43, "Amount": 685.0, "qx_count": 676.73626, "A/E": 1.0122111677598005},
    {"CurrentAge": 44, "Amount": 851.0, "qx_count": 772.04942, "A/E": 1.102261044377185},
    {"CurrentAge": 45, "Amount": 922.0, "qx_count": 880.383104, "A/E": 1.047271347906286},
    {"CurrentAge": 46, "Amount": 1023.0, "qx_count": 1002.568776, "A/E": 1.020378875234391},
    {"CurrentAge": 47, "Amount": 1256.0, "qx_count": 1137.292614, "A/E": 1.1043771713090542},
    {"CurrentAge": 48, "Amount": 1395.0, "qx_count": 1289.67158, "A/E": 1.0816707304661237},
    {"CurrentAge": 49, "Amount": 1544.0, "qx_count": 1458.374838, "A/E": 1.0587127258156932},
    {"CurrentAge": 50, "Amount": 1781.0, "qx_count": 1645.61068, "A/E": 1.0822729954572243},
    {"CurrentAge": 51, "Amount": 1877.0, "qx_count": 1853.452542, "A/E": 1.0127046457712863},
    {"CurrentAge": 52, "Amount": 2207.0, "qx_count": 2084.594442, "A/E": 1.0587191232662798},
    {"CurrentAge": 53, "Amount": 2478.0, "qx_count": 2337.49358, "A/E": 1.0601098634889086},
    {"CurrentAge": 54, "Amount": 2797.0, "qx_count": 2615.40662, "A/E": 1.0694321787714984},
    {"CurrentAge": 55, "Amount": 3083.0, "qx_count": 2910.47289, "A/E": 1.0592780336806367},
    {"CurrentAge": 56, "Amount": 3434.0, "qx_count": 3227.57737, "A/E": 1.063955904486962},
    {"CurrentAge": 57, "Amount": 3722.0, "qx_count": 3558.754426, "A/E": 1.045871547867237},
    {"CurrentAge": 58, "Amount": 4181.0, "qx_count": 3908.630828, "A/E": 1.0696840361716555},
    {"CurrentAge": 59, "Amount": 4613.0, "qx_count": 4278.326808, "A/E": 1.0782252518377506},
    {"CurrentAge": 60, "Amount": 4945.0, "qx_count": 4643.616678, "A/E": 1.0649027133156488},
    {"CurrentAge": 61, "Amount": 5532.0, "qx_count": 5005.141652, "A/E": 1.105263424021071},
    {"CurrentAge": 62, "Amount": 5694.0, "qx_count": 5360.216948, "A/E": 1.0622704370435119},
    {"CurrentAge": 63, "Amount": 5984.0, "qx_count": 5697.684322, "A/E": 1.0502512357335194},
    {"CurrentAge": 64, "Amount": 6351.0, "qx_count": 6026.13083, "A/E": 1.0539100758288715},
    {"CurrentAge": 65, "Amount": 6716.0, "qx_count": 6339.041304, "A/E": 1.0594661996857688},
    {"CurrentAge": 66, "Amount": 7182.0, "qx_count": 6652.441818, "A/E": 1.0796035796310364},
    {"CurrentAge": 67, "Amount": 7361.0, "qx_count": 6943.854238, "A/E": 1.0600740954090286},
    {"CurrentAge": 68, "Amount": 7745.0, "qx_count": 7206.513138, "A/E": 1.074722248012087},
    {"CurrentAge": 69, "Amount": 7837.0, "qx_count": 7437.371016, "A/E": 1.0537325599516656},
    {"CurrentAge": 70, "Amount": 8058.0, "qx_count": 7654.6543, "A/E": 1.0526928694872608},
    {"CurrentAge": 71, "Amount": 8438.0, "qx_count": 7836.630718, "A/E": 1.0767382442327813},
    {"CurrentAge": 72, "Amount": 8422.0, "qx_count": 7987.808178, "A/E": 1.0543568163286456},
    {"CurrentAge": 73, "Amount": 8658.0, "qx_count": 8125.838292, "A/E": 1.065490068701456},
    {"CurrentAge": 74, "Amount": 8736.0, "qx_count": 8199.814568, "A/E": 1.0653899460229843},
    {"CurrentAge": 75, "Amount": 8904.0, "qx_count": 8245.76554, "A/E": 1.0798269677699324},
    {"CurrentAge": 76, "Amount": 8679.0, "qx_count": 8251.819208, "A/E": 1.0517680745581357},
    {"CurrentAge": 77, "Amount": 8656.0, "qx_count": 8238.433962, "A/E": 1.0506851229160827},
    {"CurrentAge": 78, "Amount": 8720.0, "qx_count": 8190.126346, "A/E": 1.0646966397849023},
    {"CurrentAge": 79, "Amount": 8376.0, "qx_count": 8082.935918, "A/E": 1.0362571329246062},
    {"CurrentAge": 80, "Amount": 8507.0, "qx_count": 7947.04482, "A/E": 1.0704608055803062},
    {"CurrentAge": 81, "Amount": 8043.0, "qx_count": 7753.725166, "A/E": 1.0373078523944164},
    {"CurrentAge": 82, "Amount": 7945.0, "qx_count": 7583.252426, "A/E": 1.047703485744416},
    {"CurrentAge": 83, "Amount": 7765.0, "qx_count": 7421.95012, "A/E": 1.0462209896932049},
    {"CurrentAge": 84, "Amount": 7537.0, "qx_count": 7209.256404, "A/E": 1.0454614980566033},
    {"CurrentAge": 85, "Amount": 7203.0, "qx_count": 7000.354638, "A/E": 1.0289478708549966},
    {"CurrentAge": 86, "Amount": 7246.0, "qx_count": 6882.078584, "A/E": 1.052879578685148},
    {"CurrentAge": 87, "Amount": 6857.0, "qx_count": 6625.559058, "A/E": 1.0349315340749319},
    {"CurrentAge": 88, "Amount": 6480.0, "qx_count": 6281.204816, "A/E": 1.0316492121851548},
    {"CurrentAge": 89, "Amount": 5958.0, "qx_count": 5827.092102, "A/E": 1.0224653902338474},
    {"CurrentAge": 90, "Amount": 5063.0, "qx_count": 4860.489094, "A/E": 1.0416647177029958},
    {"CurrentAge": 91, "Amount": 3841.0, "qx_count": 3871.330216, "A/E": 0.9921654278225488},
    {"CurrentAge": 92, "Amount": 3071.0, "qx_count": 2981.842368, "A/E": 1.0299001828389072},
    {"CurrentAge": 93, "Amount": 2330.0, "qx_count": 2245.299966, "A/E": 1.0377232598238948},
    {"CurrentAge": 94, "Amount": 1717.0, "qx_count": 1678.789278, "A/E": 1.0227608804158683},
    {"CurrentAge": 95, "Amount": 1287.0, "qx_count": 2153.879878, "A/E": 0.5975263584313962},
]

df1 = pd.DataFrame(data).set_index('CurrentAge') 
x1 = np.arange(df1['FaceAmount'].shape[0])
df2 = pd.DataFrame(data2).set_index('CurrentAge') 
x2 = np.arange(df2['Amount'].shape[0])
# Create figure with 1 row and 2 columns
fig, (ax1, ax3) = plt.subplots(1, 2, figsize=(14, 4))

# Plot 1 on ax1
ax1.plot(x1, df1['A/E'], color='blue', label='A/E')
ax1.axhline(y=1, color='black', linestyle='--', alpha=0.5, label='VBT15')
ax1.set_xlabel("AttainedAge")
ax1.grid(True) 
ax1.set_ylim(0, 2)
ax1.set_xlim(18, 80)
ax1.set_ylabel('Actual to Expected')
ax1.set_title("Gross A/E Mortality by AttainedAge")

ax2 = ax1.twinx()
ax2.set_ylim(0, df1['FaceAmount'].max() * 1.1)
ax2.bar(x1, df1['FaceAmount'], color="grey", label="Exposure", alpha=0.5)
ax2.set_ylabel('Exposure')
lines1, labels1 = ax1.get_legend_handles_labels()
bars1, bar_labels1 = ax2.get_legend_handles_labels()
ax1.legend(lines1 + bars1, labels1 + bar_labels1, loc="upper right")

# Plot 2 on ax3
ax3.plot(x2, df2['A/E'], color='blue', label='A/E')
ax3.axhline(y=1, color='black', linestyle='--', alpha=0.5, label='VBT15')
ax3.set_xlabel("AttainedAge")
ax3.grid(True) 
ax3.set_ylim(0, 2)
ax3.set_xlim(18, 80)
ax3.set_ylabel('Actual to Expected')
ax3.set_title("Count A/E Mortality by AttainedAge")

ax4 = ax3.twinx()
ax4.set_ylim(0, df2['Amount'].max() * 1.1)
ax4.bar(x2, df2['Amount'], color="grey", label="Count_Exposure", alpha=0.5)
ax4.set_ylabel('Count Exposure')
lines2, labels2 = ax3.get_legend_handles_labels()
bars2, bar_labels2 = ax4.get_legend_handles_labels()
ax3.legend(lines2 + bars2, labels2 + bar_labels2, loc="upper left")

# Adjust layout to ensure plots are side by side without overlap
plt.tight_layout()
#display(plt.gcf().canvas)
# Save the figure to a BytesIO buffer
buf = io.BytesIO()
fig.savefig(buf, format="png")
buf.seek(0)

# Convert the image to a base64 string
img = Image.open(buf)
img_base64 = base64.b64encode(buf.getvalue()).decode("utf-8")
buf.close()

# Embed the base64 image into the HTML canvas
canvas = document.querySelector("#plot")
context = canvas.getContext("2d")

# Create a new Image object in JavaScript
js_img = document.createElement("img")
js_img.src = f"data:image/png;base64,{img_base64}"

# Draw the image onto the canvas when loaded
def onload(event):
    context.drawImage(js_img, 0, 0, canvas.width, canvas.height)

js_img.onload = onload