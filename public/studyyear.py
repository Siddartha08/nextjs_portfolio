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

# Prepare Data for Plot 1
# df1 = seriatim_qx.pivot_table(index=['StudyYear'], values=['FaceAmount','qx_amount'], aggfunc={ 
#         'FaceAmount': sum_faceamount_status_d,
#         'qx_amount': 'sum'
# })

#df1['A/E'] = df1['FaceAmount'] / df1['qx_amount']

# Prepare Data for Plot 2
#df2 = seriatim_qx.pivot_table(index=['StudyYear'], values=['Amount','qx_count'], aggfunc='sum')

#df2['A/E'] = df2['Amount'] / df2['qx_count']

data = [
    {"StudyYear": 2010, "FaceAmount": 8778270000, "qx_amount": 8393456533.474, "A/E": 1.0458468409279684},
    {"StudyYear": 2011, "FaceAmount": 7572640000, "qx_amount": 7220337469.486, "A/E": 1.0487930837032025},
    {"StudyYear": 2012, "FaceAmount": 6660095000, "qx_amount": 6420612950.792, "A/E": 1.0372989387529519},
    {"StudyYear": 2013, "FaceAmount": 6177242000, "qx_amount": 5846213857.838, "A/E": 1.0566226536030994},
    {"StudyYear": 2014, "FaceAmount": 5581102000, "qx_amount": 5382647324.458, "A/E": 1.0368693439453573},
    {"StudyYear": 2015, "FaceAmount": 5181806000, "qx_amount": 5012873395.87, "A/E": 1.0336997547692268},
    {"StudyYear": 2016, "FaceAmount": 4897383000, "qx_amount": 4694274263.542, "A/E": 1.0432673348541734},
    {"StudyYear": 2017, "FaceAmount": 4615463000, "qx_amount": 4423289565.422, "A/E": 1.0434458182616553},
    {"StudyYear": 2018, "FaceAmount": 4337394000, "qx_amount": 4182327195.514, "A/E": 1.0370766793789654},
    {"StudyYear": 2019, "FaceAmount": 4128385000, "qx_amount": 3962203382.45, "A/E": 1.0419417181576487},
    {"StudyYear": 2020, "FaceAmount": 3852076000, "qx_amount": 3775806061.28, "A/E": 1.020199644124239},
    {"StudyYear": 2021, "FaceAmount": 4495028000, "qx_amount": 3606979333.912, "A/E": 1.2462028705678374},
    {"StudyYear": 2022, "FaceAmount": 3756302000, "qx_amount": 3422413437.524, "A/E": 1.0975593885926176},
    {"StudyYear": 2023, "FaceAmount": 3151209000, "qx_amount": 3269447264.35, "A/E": 0.9638353963866406},
    {"StudyYear": 2024, "FaceAmount": 3339111000, "qx_amount": 3139086067.93, "A/E": 1.0637207543028286},
]

data2 = [
    {"StudyYear": 2010, "Amount": 32610.0, "qx_count": 31259.850956, "A/E": 1.0431911542348815},
    {"StudyYear": 2011, "Amount": 28063.0, "qx_count": 26879.001918, "A/E": 1.0440491832848569},
    {"StudyYear": 2012, "Amount": 24829.0, "qx_count": 23919.10726, "A/E": 1.038040413887922},
    {"StudyYear": 2013, "Amount": 22646.0, "qx_count": 21757.215696, "A/E": 1.040850093891536},
    {"StudyYear": 2014, "Amount": 20807.0, "qx_count": 20052.23923, "A/E": 1.0376397249874623},
    {"StudyYear": 2015, "Amount": 19379.0, "qx_count": 18651.094116, "A/E": 1.0390275165345695},
    {"StudyYear": 2016, "Amount": 18278.0, "qx_count": 17463.275508, "A/E": 1.0466535897934366},
    {"StudyYear": 2017, "Amount": 17050.0, "qx_count": 16443.458094, "A/E": 1.0368865175763313},
    {"StudyYear": 2018, "Amount": 16209.0, "qx_count": 15548.268864, "A/E": 1.0424954791931749},
    {"StudyYear": 2019, "Amount": 15323.0, "qx_count": 14744.525174, "A/E": 1.0392331946382418},
    {"StudyYear": 2020, "Amount": 14415.0, "qx_count": 14043.333942, "A/E": 1.0264656569113153},
    {"StudyYear": 2021, "Amount": 16832.0, "qx_count": 13406.672428, "A/E": 1.2554942391854194},
    {"StudyYear": 2022, "Amount": 14140.0, "qx_count": 12710.70207, "A/E": 1.1124483857877097},
    {"StudyYear": 2023, "Amount": 11556.0, "qx_count": 12135.280502, "A/E": 0.952264762079086},
    {"StudyYear": 2024, "Amount": 12113.0, "qx_count": 11664.090852, "A/E": 1.0384864241624994},
]

df1 = pd.DataFrame(data).set_index('StudyYear') #pd.read_csv('studyyear_amount.csv').set_index('StudyYear')
x1 =range(2010, 2025)
df2 = pd.DataFrame(data2).set_index('StudyYear')  #pd.read_csv('studyyear_count.csv').set_index('StudyYear')
x2 =range(2010, 2025)
# Create figure with 1 row and 2 columns
fig, (ax1, ax3) = plt.subplots(1, 2, figsize=(14, 4))

# Plot 1 on ax1
ax1.plot(x1, df1['A/E'], color='blue', label='A/E')
ax1.axhline(y=1, color='black', linestyle='--', alpha=0.5, label='VBT15')
ax1.set_xlabel("StudyYear")
ax1.grid(True) 
ax1.set_ylim(0, 2)
#ax1.set_xlim(2010, 25)
ax1.set_ylabel('Actual to Expected')
ax1.set_title("Gross A/E Mortality by StudyYear")

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
ax3.set_xlabel("StudyYear")
ax3.grid(True) 
ax3.set_ylim(0, 2)
#ax3.set_xlim(1, 25)
ax3.set_ylabel('Actual to Expected')
ax3.set_title("Count A/E Mortality by StudyYear")

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