// data/portfolio.js

export const portfolioItems = [
  {
    id: 'stock-forecasting',
    title: 'Stock Forecasting',
    description: 'A machine learning project for predicting stock prices.',
    technologies: ['Sklearn', 'Python', 'Matplotlib', 'AWS'],
    image: '/images/p2.png', 
    link: '/portfolio/stock-forecasting',    // Link to individual portfolio page
    casestudy: '',
    date: 'April 2021',
    longform: [
      { type: 'h2', content: 'Project Overview' },
      { type: 'h6', content: 'Date Created: April 2021'},
      { type: 'p', content: 'This project involved developing a machine learning model to predict stock prices using historical data to forcast the next 30 days' },
      { type: 'h3', content: 'Purpose' },
      { type: 'p', content: 'To illustrate my compentancy with simple model training and execution. I wanted to include something in my portfolio around training a model. I work with mortality models in my current role as a Data Engineer. The models I work with are almost all tabular in design which do not require a third party library to implement' },
    ]
  },
  {
    id: 'covid-data-visualization',
    title: 'COVID Data Visualization',
    description: 'Visualizing COVID-19 data using Python and Pandas.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'AWS'],
    image: '/images/p1.png',
    link: '/portfolio/covid-data-visualization',
    casestudy: '',
    longform: 'Using a simple linear regression sample past market performance and predict 30 days into the future. <br> working on text',
  },
  {
    id: 'covid-data-visualization',
    title: 'COVID Data Visualization',
    description: 'Visualizing COVID-19 data using Python and Pandas.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'AWS'],
    image: '/images/p1.png',
    link: '/portfolio/covid-data-visualization',
    casestudy: '',
    longform: 'Using a simple linear regression sample past market performance and predict 30 days into the future. <br> working on text',
  },
  {
    id: 'whoshouldgetit', 
    title: 'Who Should Get It?',
    description: 'A description of your "Who Should Get It?" project.', // Add a brief description
    technologies: ['Nextjs', 'React', 'Firebase ', 'Bootstrap'], 
    image: '/images/vaccine.png', // Replace with the actual image path
    link: '/portfolio/wsgcasestudy',
    longform: 'Using a simple linear regression sample past market performance and predict 30 days into the future. <br> working on text',
    casestudy: 'Case Study: ' 
  },
  {
    id: 'dataquality', 
    title: 'Data Quality',
    description: 'Using python perform data quality checks on pipelines', // Add a brief description
    technologies: ['Python', 'Sqlalchemy', 'Snowflake', 'Pandas', 'OOP'], 
    image: '/images/next.png', // Replace with the actual image path
    link: '/portfolio/dataquality',
    casestudy: 'Case Study: ' ,
    longform: 'Using a simple linear regression sample past market performance and predict 30 days into the future. <br> working on text'
  },
  // Add more portfolio items as needed
];


  
  