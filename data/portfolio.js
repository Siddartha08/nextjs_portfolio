// data/portfolio.js

export const portfolioItems = [
  {
    id: 'pyscript', 
    title: 'Actuarial Insights: A/E Mortality',
    description: "Generating A/E' based on Vbt_15 expecteds using Python", 
    technologies: ['Nextjs', 'PyScript', 'Matplotlib', 'Jupyter'], 
    image: '/images/actuary.png', // Replace with the actual image path
    pimage: '/images/vaccine.png',
    link: '/portfolio/python/casestudy',
    date: 'November 2024',
    protected: true,
    longform: 'Using a simple linear regression sample past market performance and predict 30 days into the future. <br> working on text',
    longform: [
      { type: 'h2', content: 'Project Overview' },
      { type: 'h6', content: 'Date Created: April 2021'},
      { type: 'p', content: 'This project involved developing a machine learning model to predict stock prices using historical data to forcast the next 30 days' },
      { type: 'h3', content: 'Purpose' },
      { type: 'p', content: 'To illustrate my compentancy with simple model training and execution. I wanted to include something in my portfolio around training a model. I work with mortality models in my current role as a Data Engineer. The models I work with are almost all tabular in design which do not require a third party library to implement' },
    ]
  },
  {
    id: 'dataquality', 
    title: 'Data Quality',
    description: 'Built a Data Quality Engine using python to orchestrate checks across three different databases', // Add a brief description
    technologies: ['Python', 'Sqlalchemy', 'Snowflake', 'Pandas', 'OOP'], 
    image: '/images/coresquare.png', // Replace with the actual image path
    pimage: '/images/Corebridge.png',
    link: '/portfolio/cb/casestudy',
    date: 'May 2024',
    casestudy: 'Case Study: ' ,
    protected: true,
    longform: [
      { type: 'h2', content: 'Project Overview' },
      { type: 'h6', content: 'Date Created: April 2021'},
      { type: 'p', content: 'This project involved developing a machine learning model to predict stock prices using historical data to forecast the next 30 days' },
      { type: 'h3', content: 'Purpose' },
      { type: 'p', content: 'To illustrate my compentancy with simple model training and execution. I work with mortality models in my current role as a Data Engineer. The models I work with are almost all tabular in design which do not require a third party library to necessarily use.' },
      {type: 'p', content: 'Please let me know if you have any questions'}
    ],
    frosted: false
  },
  {
    id: 'whoshouldgetit', 
    title: 'Who Should Get It?',
    description: 'Who should get the Vaccine first? Rank demographics and see global rankings', // Add a brief description
    technologies: ['Nextjs', 'React', 'Firebase ', 'Bootstrap'], 
    image: '/images/vaccine.png', // Replace with the actual image path
    pimage: '/images/vaccine.png',
    link: '/portfolio/wsgit/casestudy',
    date: 'October 2021',
    protected: true,
    longform: 'Using a simple linear regression sample past market performance and predict 30 days into the future. <br> working on text',
    longform: [
      { type: 'h2', content: 'Project Overview' },
      { type: 'h6', content: 'Date Created: April 2021'},
      { type: 'p', content: 'This project involved developing a machine learning model to predict stock prices using historical data to forcast the next 30 days' },
      { type: 'h3', content: 'Purpose' },
      { type: 'p', content: 'To illustrate my compentancy with simple model training and execution. I wanted to include something in my portfolio around training a model. I work with mortality models in my current role as a Data Engineer. The models I work with are almost all tabular in design which do not require a third party library to implement' },
    ]
  },


  {
    id: 'stock-forecasting',
    title: 'Stock Forecasting',
    description: 'A machine learning project for predicting stock prices.',
    technologies: ['Sklearn', 'Python', 'Matplotlib', 'AWS'],
    image: '/images/p2.png', 
    pimage: '/images/p2.png',
    html: '/mlstockprice.html',
    link: '/portfolio/stock-forecasting',    // Link to individual portfolio page
    casestudy: '',
    date: 'April 2021',
    protected: true,
    longform: [
      { type: 'h2', content: 'Project Overview' },
      { type: 'h6', content: 'Date Created: April 2021'},
      { type: 'p', content: 'This project involved developing a machine learning model to predict stock prices using historical data to forecast the next 30 days' },
      { type: 'h3', content: 'Purpose' },
      { type: 'p', content: 'To illustrate my compentancy with simple model training and execution. I work with mortality models in my current role as a Data Engineer. The models I work with are almost all tabular in design which have different needs from this ' },
      {type: 'p', content: 'Please let me know if you have any questions'}    ]
  },
  {
    id: 'covid-data-visualization',
    title: 'COVID Data Visualization',
    description: 'Visualizing COVID-19 data using Python and Pandas.',
    technologies: ['Python', 'Pandas', 'Matplotlib'],
    image: '/images/p1.png',
    pimage: '',
    html: '/covid.html',
    link: '/portfolio/covid-data-visualization',
    casestudy: '',
    date: 'April 2021',
    protected: true,
    longform: [
      { type: 'h2', content: 'Project Overview' },
      { type: 'h6', content: 'Date Created: April 2021'},
      { type: 'p', content: 'This project involves reading in covid data, performing transformations and generating visualizations' },
      { type: 'h3', content: 'Purpose' },
      { type: 'p', content: 'COVID-19 stands as one of the largest data collection initiatives of my lifetime. It\'s crucial to evaluate, build upon, and understand the data generated.' },
    ]
  },
  {
    id: 'stock-sentiment-analysis',
    title: 'Stock Sentiment Analysis',
    description: 'Use web scraping to parse news headlines and predict the sentiment of the stock on a cumlative daily basis.',
    technologies: ['BeautifulSoup', 'Polarity Score', 'Pandas', 'Matplotlib'],
    image: '/images/p1.png',
    pimage: '',
    html: '/stocksentiment.html',
    link: '/portfolio/stock-sentiment-analysis',
    casestudy: '',
    date: 'April 2021',
  
    longform: [
      { type: 'h2', content: 'Project Overview' },
      { type: 'h6', content: 'Date Created: April 2021'},
      { type: 'p', content: 'This project involves scraping article headlines related to specific companies and predicting stock sentiment on a daily basis. adding total sentiment observed per day together to get a directional indicator per stock'},
      { type: 'h3', content: 'Purpose' },
      { type: 'p', content: 'Sentiment analysis is a really interesting field of study. I wanted to showcase some examples of ingesting data, cleaning, and generating a cumulative polarity score.' },
    ]  },

 
  // Add more portfolio items as needed
];


  
  