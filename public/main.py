from datetime import datetime


import pyodide
import asyncio
import micropip
import plotly.express as px
import pandas as pd

# # async def install_pandas():
# #     await micropip.install('pandas')

# # # Schedule the async function to run
# # asyncio.ensure_future(install_pandas())

# async function loadPandas() {
#     await pyodide.loadPackage("pandas");
#     // Now you can use pandas in your Python code
#     import pandas as pd
#     global data = {'A': [1, 7, 3], 'B': [4, 5, 6]}
#     df = pd.DataFrame(data)
#     print(df)
# }
# loadPandas()
# print(data)



# Sample data
df = px.data.iris()

# Create an interactive scatter plot
fig = px.scatter(df, x='sepal_width', y='sepal_length', color='species')

# Display the interactive plot
# display(fig.show())

data = {'A': [1, 7, 3], 'B': [4, 5, 6]}
# df = pd.DataFrame(data)
# styled = df.style.highlight_max(axis=0)

import matplotlib.pyplot as plt
import pandas as pd
import plotly.express as px

# Load the Iris dataset from Plotly
df = px.data.iris()

# Create a figure and axis
fig, ax = plt.subplots()

# Define colors for each species
colors = {'setosa': 'red', 'versicolor': 'green', 'virginica': 'blue'}

# Scatter plot using Matplotlib, coloring by species
for species, color in colors.items():
    species_data = df[df['species'] == species]
    ax.scatter(species_data['sepal_width'], species_data['sepal_length'], label=species, color=color)

# Set labels and title
ax.set_xlabel('Sepal Width')
ax.set_ylabel('Sepal Length')
ax.set_title('Iris Dataset - Sepal Width vs Sepal Length')

# Add a legend
ax.legend(title='Species')

# Display the plot
plt

now = datetime.now()
display("Current date and time:", plt)