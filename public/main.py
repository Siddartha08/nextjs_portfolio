from datetime import datetime


import pyodide
import asyncio
import micropip

import pandas as pd

# # async def install_pandas():
# #     await micropip.install('pandas')

# # # Schedule the async function to run
# # asyncio.ensure_future(install_pandas())

# async function loadPandas() {
#     await pyodide.loadPackage("pandas");
#     // Now you can use pandas in your Python code
#     import pandas as pd
#     global data = {'A': [1, 2, 3], 'B': [4, 5, 6]}
#     df = pd.DataFrame(data)
#     print(df)
# }
# loadPandas()
# print(data)

now = datetime.now()
display("Current date and time:", now)