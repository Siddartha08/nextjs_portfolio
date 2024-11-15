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


# Define the bins and labels for the face amount bands
bins = [0, 100000, 250000, 500000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, float('inf')]
labels = ['< 100', '101-250', '251-500', '501-1M', '1M - 1.5M', '1.5M -2M' , '2M', '3M', '4M','5M']


data = [
    {"FaceAmount_band": "< 100", "FaceAmount": 5817338000, "qx_amount": 5500154455.794, "A/E": 1.0576681158238876},
    {"FaceAmount_band": "101-250", "FaceAmount": 16308299000, "qx_amount": 15640269783.836, "A/E": 1.0427121287162449},
    {"FaceAmount_band": "251-500", "FaceAmount": 20163257000, "qx_amount": 19171547974.834, "A/E": 1.051728166471888},
    {"FaceAmount_band": "501-1M", "FaceAmount": 18513231000, "qx_amount": 17670383807.634, "A/E": 1.047698295721334},
    {"FaceAmount_band": "1M - 1.5M", "FaceAmount": 7423447000, "qx_amount": 7014954718.868, "A/E": 1.0582316347721084},
    {"FaceAmount_band": "1.5M -2M", "FaceAmount": 3465749000, "qx_amount": 3261684739.378, "A/E": 1.0625640664035836},
    {"FaceAmount_band": "2M", "FaceAmount": 2817864000, "qx_amount": 2629976092.826, "A/E": 1.0714409182982756},
    {"FaceAmount_band": "3M", "FaceAmount": 1121112000, "qx_amount": 982065124.098, "A/E": 1.1415862069531395},
    {"FaceAmount_band": "4M", "FaceAmount": 438209000, "qx_amount": 467743076.574, "A/E": 0.9368583351562928},
    {"FaceAmount_band": "5M", "FaceAmount": 455000000, "qx_amount": 413188330.0, "A/E": 1.1011927660202794}
]

data2 = [
    {"FaceAmount_band": "< 100", "Amount": 89530.0, "qx_count": 84725.215186, "A/E": 1.0567102108085757},
    {"FaceAmount_band": "101-250", "Amount": 99883.0, "qx_count": 95736.382052, "A/E": 1.0433128749919516},
    {"FaceAmount_band": "251-500", "Amount": 57708.0, "qx_count": 54911.78352, "A/E": 1.0509219752256191},
    {"FaceAmount_band": "501-1M", "Amount": 27207.0, "qx_count": 25969.380572, "A/E": 1.0476568713130723},
    {"FaceAmount_band": "1M - 1.5M", "Amount": 6190.0, "qx_count": 5841.064046, "A/E": 1.059738422871592},
    {"FaceAmount_band": "1.5M -2M", "Amount": 2030.0, "qx_count": 1911.178594, "A/E": 1.0621717961749},
    {"FaceAmount_band": "2M", "Amount": 1183.0, "qx_count": 1106.904856, "A/E": 1.0687458760231512},
    {"FaceAmount_band": "3M", "Amount": 328.0, "qx_count": 287.465782, "A/E": 1.1410053666839555},
    {"FaceAmount_band": "4M", "Amount": 100.0, "qx_count": 106.104336, "A/E": 0.9424685528402911},
    {"FaceAmount_band": "5M", "Amount": 91.0, "qx_count": 82.637666, "A/E": 1.1011927660202794}
]

df1 = pd.DataFrame(data).set_index('FaceAmount_band') # pd.read_csv('faceband_amount.csv')
x1 = labels
df2 = pd.DataFrame(data2).set_index('FaceAmount_band') #pd.read_csv('faceband_count.csv').set_index('FaceAmount_band')
x2 = labels



# Create figure with 1 row and 2 columns
fig, (ax1, ax3) = plt.subplots(1, 2, figsize=(12, 4))

# Plot 1 on ax1
ax1.plot(x1, df1['A/E'], color='blue', label='A/E')
ax1.axhline(y=1, color='black', linestyle='--', alpha=0.5, label='VBT15')
ax1.set_xlabel("FaceAmount_band")
ax1.grid(True) 
ax1.set_ylim(0, 2)
#ax1.set_xlim(18, 80)
ax1.set_ylabel('Actual to Expected')
ax1.set_title("Gross A/E Mortality by FaceAmount_band")
ax1.tick_params(axis='x', rotation=45)
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
ax3.set_xlabel("FaceAmount_band")
ax3.grid(True) 
ax3.set_ylim(0, 2)
#ax3.set_xlim(18, 80)
ax3.set_ylabel('Actual to Expected')
ax3.set_title("Count A/E Mortality by FaceAmount_band")

ax4 = ax3.twinx()
ax4.set_ylim(0, df2['Amount'].max() * 1.1)
ax4.bar(x2, df2['Amount'], color="grey", label="Count_Exposure", alpha=0.5)
ax4.set_ylabel('Count Exposure')
lines2, labels2 = ax3.get_legend_handles_labels()
bars2, bar_labels2 = ax4.get_legend_handles_labels()
ax3.legend(lines2 + bars2, labels2 + bar_labels2, loc="upper right")
ax3.tick_params(axis='x', rotation=45)


# Adjust layout to ensure plots are side by side without overlap
plt.tight_layout()
display(plt)