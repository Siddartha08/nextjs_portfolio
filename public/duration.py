import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# Assume 'seriatim_qx' DataFrame and functions 'sum_faceamount_status_d' are already defined

def sum_faceamount_status_d(x):
    # 'x' is a Series of FaceAmount values for the group
    # We use the index of 'x' to get corresponding Status values from the original DataFrame
    status = full_dataset.loc[x.index, 'Status']
    # Sum FaceAmount where Status is 'D'
    return x[status == 'D'].sum()

data = [
    {"Duration": 1, "Amount": 81.0, "qx_count": 80.928842, "A/E": 1.0008792662571397},
    {"Duration": 2, "Amount": 500.0, "qx_count": 451.546348, "A/E": 1.1073060433654531},
    {"Duration": 3, "Amount": 1245.0, "qx_count": 1226.783636, "A/E": 1.0148488808176441},
    {"Duration": 4, "Amount": 2603.0, "qx_count": 2450.357256, "A/E": 1.062294077170272},
    {"Duration": 5, "Amount": 4327.0, "qx_count": 4077.108146, "A/E": 1.0612914460572171},
    {"Duration": 6, "Amount": 6440.0, "qx_count": 6143.94992, "A/E": 1.0481856271380545},
    {"Duration": 7, "Amount": 9343.0, "qx_count": 8855.345934, "A/E": 1.0550688894182731},
    {"Duration": 8, "Amount": 12753.0, "qx_count": 12214.817178, "A/E": 1.0440598343927174},
    {"Duration": 9, "Amount": 16936.0, "qx_count": 16334.017664, "A/E": 1.0368545172647121},
    {"Duration": 10, "Amount": 22214.0, "qx_count": 21275.545106, "A/E": 1.0441095581487754},
    {"Duration": 11, "Amount": 23445.0, "qx_count": 22467.131324, "A/E": 1.0435244118128875},
    {"Duration": 12, "Amount": 22885.0, "qx_count": 21985.060086, "A/E": 1.0409341575815425},
    {"Duration": 13, "Amount": 21575.0, "qx_count": 20619.90816, "A/E": 1.0463189182313022},
    {"Duration": 14, "Amount": 19742.0, "qx_count": 19101.566076, "A/E": 1.0335278228733646},
    {"Duration": 15, "Amount": 18819.0, "qx_count": 17768.293032, "A/E": 1.0591338158430703},
    {"Duration": 16, "Amount": 17730.0, "qx_count": 17019.461494, "A/E": 1.0417485891813023},
    {"Duration": 17, "Amount": 15642.0, "qx_count": 14818.715612, "A/E": 1.0555570678023751},
    {"Duration": 18, "Amount": 14494.0, "qx_count": 13485.66732, "A/E": 1.0747706921781013},
    {"Duration": 19, "Amount": 12803.0, "qx_count": 12037.711704, "A/E": 1.063574233610006},
    {"Duration": 20, "Amount": 11288.0, "qx_count": 10527.836062, "A/E": 1.0722051458175528},
    {"Duration": 21, "Amount": 9695.0, "qx_count": 8944.179822, "A/E": 1.083945112122322},
    {"Duration": 22, "Amount": 7771.0, "qx_count": 7243.643876, "A/E": 1.0728026022575823},
    {"Duration": 23, "Amount": 5578.0, "qx_count": 5468.85056, "A/E": 1.0199583877457423},
    {"Duration": 24, "Amount": 3794.0, "qx_count": 3568.963064, "A/E": 1.063053870820334},
    {"Duration": 25, "Amount": 1609.0, "qx_count": 1560.764746, "A/E": 1.0309048843674997},
    {"Duration": 26, "Amount": 641.0, "qx_count": 649.22668, "A/E": 0.987328493647242},
    {"Duration": 27, "Amount": 225.0, "qx_count": 217.355656, "A/E": 1.0351697496199501},
    {"Duration": 28, "Amount": 49.0, "qx_count": 63.133054, "A/E": 0.7761385976987586},
    {"Duration": 29, "Amount": 17.0, "qx_count": 16.233636, "A/E": 1.0472084011246772},
    {"Duration": 30, "Amount": 6.0, "qx_count": 4.014616, "A/E": 1.4945389546596735},
]

data2 = [
    {"Duration": 1, "FaceAmount": 23444000, "qx_amount": 21724221.422, "A/E": 1.079164106487075},
    {"Duration": 2, "FaceAmount": 127010000, "qx_amount": 120952990.06, "A/E": 1.050077389050038},
    {"Duration": 3, "FaceAmount": 339835000, "qx_amount": 331022110.352, "A/E": 1.0266232658556511},
    {"Duration": 4, "FaceAmount": 682291000, "qx_amount": 656282201.0879999, "A/E": 1.0396305108821815},
    {"Duration": 5, "FaceAmount": 1160622000, "qx_amount": 1091576561.988, "A/E": 1.063252950288941},
    {"Duration": 6, "FaceAmount": 1706422000, "qx_amount": 1648098521.856, "A/E": 1.035388344428778},
    {"Duration": 7, "FaceAmount": 2522888000, "qx_amount": 2387698278.978, "A/E": 1.0566192647589732},
    {"Duration": 8, "FaceAmount": 3482801000, "qx_amount": 3292059548.472, "A/E": 1.0579398545863279},
    {"Duration": 9, "FaceAmount": 4509862000, "qx_amount": 4398014161.168, "A/E": 1.0254314412671868},
    {"Duration": 10, "FaceAmount": 5945746000, "qx_amount": 5706329199.354, "A/E": 1.0419563597335224},
    {"Duration": 11, "FaceAmount": 6348050000, "qx_amount": 6028011705.808, "A/E": 1.0530918501507958},
    {"Duration": 12, "FaceAmount": 6191146000, "qx_amount": 5901713061.0199995, "A/E": 1.0490421909685284},
    {"Duration": 13, "FaceAmount": 5808562000, "qx_amount": 5528258141.415999, "A/E": 1.050703829563249},
    {"Duration": 14, "FaceAmount": 5317219000, "qx_amount": 5124318327.49, "A/E": 1.0376441626343083},
    {"Duration": 15, "FaceAmount": 5058534000, "qx_amount": 4774311842.12, "A/E": 1.059531544498734},
    {"Duration": 16, "FaceAmount": 4717962000, "qx_amount": 4572150802.658, "A/E": 1.0318911609952222},
    {"Duration": 17, "FaceAmount": 4186010000, "qx_amount": 3990729967.684, "A/E": 1.0489334116558455},
    {"Duration": 18, "FaceAmount": 3937225000, "qx_amount": 3630642691.086, "A/E": 1.0844429857189541},
    {"Duration": 19, "FaceAmount": 3443375000, "qx_amount": 3244314243.1879997, "A/E": 1.0613568051337698},
    {"Duration": 20, "FaceAmount": 3024860000, "qx_amount": 2838651193.384, "A/E": 1.0655976356129961},
    {"Duration": 21, "FaceAmount": 2642878000, "qx_amount": 2414347591.202, "A/E": 1.0946551398111755},
    {"Duration": 22, "FaceAmount": 2083267000, "qx_amount": 1946211360.79, "A/E": 1.070421765061718},
    {"Duration": 23, "FaceAmount": 1530979000, "qx_amount": 1471513891.4459999, "A/E": 1.0404108373693748},
    {"Duration": 24, "FaceAmount": 1030059000, "qx_amount": 955962398.02, "A/E": 1.0775099545060243},
    {"Duration": 25, "FaceAmount": 432291000, "qx_amount": 420552551.832, "A/E": 1.0279119651441069},
    {"Duration": 26, "FaceAmount": 181994000, "qx_amount": 175492657.812, "A/E": 1.0370462346918508},
    {"Duration": 27, "FaceAmount": 70500000, "qx_amount": 57980434.024, "A/E": 1.2159274277046244},
    {"Duration": 28, "FaceAmount": 11448000, "qx_amount": 17598378.509999998, "A/E": 0.650514477427273},
    {"Duration": 29, "FaceAmount": 5338000, "qx_amount": 4284814.0479999995, "A/E": 1.245795019387502},
    {"Duration": 30, "FaceAmount": 888000, "qx_amount": 1164255.566, "A/E": 0.7627191365302005},
]
#print(pd.DataFrame(data).set_index('Druation')
df1 = pd.DataFrame(data2).set_index('Duration')
x1 = np.arange(df1['FaceAmount'].shape[0])
df2 = pd.DataFrame(data).set_index('Duration')
x2 = np.arange(df2['Amount'].shape[0])

# Create figure with 1 row and 2 columns
fig, (ax1, ax3) = plt.subplots(1, 2, figsize=(14, 4))

# Plot 1 on ax1
ax1.plot(x1, df1['A/E'], color='blue', label='A/E')
ax1.axhline(y=1, color='black', linestyle='--', alpha=0.5, label='VBT15')
ax1.set_xlabel("Duration")
ax1.grid(True) 
ax1.set_ylim(0, 2)
ax1.set_xlim(1, 25)
ax1.set_ylabel('Actual to Expected')
ax1.set_title("Gross A/E Mortality by Duration")

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
ax3.set_xlabel("Duration")
ax3.grid(True) 
ax3.set_ylim(0, 2)
ax3.set_xlim(1, 25)
ax3.set_ylabel('Actual to Expected')
ax3.set_title("Count A/E Mortality by Duration")

ax4 = ax3.twinx()
ax4.set_ylim(0, df2['Amount'].max() * 1.1)
ax4.bar(x2, df2['Amount'], color="grey", label="Count_Exposure", alpha=0.5)
ax4.set_ylabel('Count Exposure')
lines2, labels2 = ax3.get_legend_handles_labels()
bars2, bar_labels2 = ax4.get_legend_handles_labels()
ax3.legend(lines2 + bars2, labels2 + bar_labels2, loc="upper right")

# Adjust layout to ensure plots are side by side without overlap
plt.tight_layout()
display(plt)