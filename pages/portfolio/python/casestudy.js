import styled from 'styled-components';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer'; 
import ResumeSection from '/components/ResumeSection';
import { Card, CardContent, Box, useTheme } from '@mui/material'
import React from 'react';
import { portfolioItems } from '@/data/portfolio';
const code = `df1 = pd.DataFrame(data2).set_index('Duration')
x1 = np.arange(df1['FaceAmount'].shape[0])
df2 = pd.DataFrame(data).set_index('Duration')
x2 = np.arange(df2['Amount'].shape[0])

# Create figure with 1 row and 2 columns
fig, (ax1, ax3) = plt.subplots(1, 2, figsize=(12, 4))

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

plt.tight_layout()
display(plt)`


const iframeHeight = '7100px';


const syntaxColors = {
  comment: { color: '#6A9955' },  // Grey
  keyword: { color: '#0000FF' },  // Blue
  className: { color: '#800080' }, // Purple
  string: { color: '#008000' },   // Green
  error: { color: '#FF0000' },    // Red
  fString: { color: '#008080' }   // teal
};

const highlightSyntax = (code) => {
  const lines = code.split('\n');
  return lines.map((line, index) => {
    const parts = [];
    let lastIndex = 0;

    const addPart = (end, style) => {
      if (end > lastIndex) {
        parts.push({
          text: line.slice(lastIndex, end),
          style
        });
        lastIndex = end;
      }
    };

    // Comments
    line.replace(/(#.*)$/g, (match, p1, offset) => {
      addPart(offset, {});
      addPart(offset + match.length, syntaxColors.comment);
    });

    // Keywords
    line.replace(/(plt|pd|fig|class|def|if|elif|else|return|raise|for|in|while)\b/g, (match, p1, offset) => {
      addPart(offset, {});
      addPart(offset + match.length, syntaxColors.keyword);
    });

    // Class names
    line.replace(/(ax1|ax2|ax3|ax4|DataFrame|run_checks|OracleConnection|SQLServerConnection|SnowflakeConnection|DataQualityEngine|self)/g, (match, p1, offset) => {
      addPart(offset, {});
      addPart(offset + match.length, syntaxColors.className);
    });

    // Strings
    line.replace(/('.*?')/g, (match, p1, offset) => {
      addPart(offset, {});
      addPart(offset + match.length, syntaxColors.string);
    });

    // Exceptions
    line.replace(/(ValueError)/g, (match, p1, offset) => {
      addPart(offset, {});
      addPart(offset + match.length, syntaxColors.error);
    });

    // F-string brackets
    line.replace(/({[^}]*})/g, (match, p1, offset) => {
      addPart(offset, {});
      addPart(offset + match.length, syntaxColors.fString);
    });

    addPart(line.length, {});

    return (
      <React.Fragment key={index}>
        {parts.map((part, i) => (
          <span key={i} style={part.style}>{part.text}</span>
        ))}
        {index < lines.length - 1 && '\n'}
      </React.Fragment>
    );
  });
};

function BannerImage() {
  const theme = useTheme()
  return (
    <Box src='/images/Corebridge.png'
      sx={{
        backgroundImage: `url('/images/Corebridge.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '500px', // Adjust height as needed
        width: '100%',
        display: 'flex', // For content alignment
        alignItems: 'center', // For content alignment
        justifyContent: 'center', // For content alignment
        [theme.breakpoints.down('sm')]: {
          backgroundImage: `url('/images/coresquare.png')`, // Image for small screens
          height: '200px'
        },
      }}
    >
      {/* Add any content you want to overlay on the banner image here */}
    </Box>
  );
}

export default function pythonCaseStudy() {
    const Container = styled.div`
    padding
  : 2rem 4rem; // MODIFIED: Added more horizontal padding
    background-color: #f8f9fa; 
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 
  0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 10h20v20H10V10z' fill='%23ddd' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E"); // NEW: Added subtle background pattern
  display: flex; // NEW: Make container a flexbox
  flex-direction: column; // NEW: Stack elements vertically
  min-height: 100vh; // NEW: Ensure full viewport height
  `;

    return (
        <div className="container mx-auto px-4 py-8 bg-white max-w-3xl">
        <Navbar 
        pageTitle="Actuarial Data"  // Set the title for this page
        navItems={[
            { href: '/', text: 'Home' },
            { href: '#Resume', text: 'Resume' }
        ]} 
        />

      {BannerImage()}
       <p className="mb-4">
         </p>
    <h1 className="text-3xl font-bold mb-4">Actuarial Data Team Case Study: Generating an Actual to Expected using policy level data.</h1>
    <h6 ><strong>By: JP Emery Data Engineer</strong></h6>
    <br></br>
    <p className="mb-4">

    Our Experience studies department works to review past performance across different life insurance product lines, model definitions, and data sources. The most important metric that is examined across different splits is what’s called the Actual to Expected Mortality or “A/E”. A ratio that tells Operations if our currently modeled expectation matches what is occurring. I work on the Actuarial Data Team as a Data Engineer. While I am not an actuary, I do wish to highlight my industry knowledge and experience I have gained in support of my peers. This project is an attempt to showcase that experience and create an A/E based on VBT15 Expecteds. 
        </p>
      <p className="mb-4">
      <strong>Note:</strong> <em>Due to proprietary considerations any trend or code employed is entirely of my own design. </em>
      </p>

      <nav className="max-w-xs p-4">
      <h2 className="text-xl mb-4 font-medium">Table of Contents</h2>
      <ul className="space-y-2">
        <li>
          <a href="#background" className="block text-blue-600 hover:underline">Background</a>
        </li>
        <li>
          <a href="#objectives" className="block text-blue-600 hover:underline">Objectives</a>

        </li>
        <li>
          <a href="#illustrations" className="block text-blue-600 hover:underline">illustrations</a>
            <ul className="ml-4 mt-1 space-y-1">
            <li><a href="#Expecteds" className="block text-gray-600 hover:underline">Expecteds</a></li>
            <li><a href="#Actuals" className="block text-gray-600 hover:underline">Actuals</a></li>
          </ul>
        </li>
        <li>
          <a href="#advanced" className="block text-blue-600 hover:underline">Advanced</a>
        </li>
      </ul>
    </nav>
      
      <br id='background'></br>
      <h2 className="text-2xl font-bold mt-6 mb-2">1. Background</h2>
      <p className="mb-4">
      Generating an A/E at work is very easy because I have access to all the data necessary to create illustrations for analysis. Outside of work, I do not have a policy level data source I could use because all companies correctly protect the PII of their policy holders. In lieu, of such a data source, I have programmatically created data to do calculations and transformations on. The data used could be considered a closed block of business for initial analysis purposes. The bulk of the work for this project was in the data creation and adjustments. You can find that work near the bottom of the page. I lead with Charts for A/E by both Count and Amount. 
      </p>

      <h2 id='objectives' className="text-2xl font-bold mt-6 mb-2">2. Objectives</h2>
      <ul className="list-disc pl-5 mb-4">
      <li>Programmatically generate realistic policy level data.</li>
      <li>Apply rates to generate qx values across policy level data using VBT15 Rates.</li>
      <li>Calculate Mortality A/E's by Count and Amount across 2.5 million simulated policies.</li>
      <li>Generate Illustrations for analysis.</li>
      <li>Minimize data size to be able to process on my local machine.</li>
      </ul>


      <h2 id='illustrations' className="text-2xl font-bold mt-6 mb-2">3. Illustrations</h2>
      <h4 id='Expecteds'>Expecteds</h4>
      <p className="mb-4">
          The illustrations below show Actual to expecteds by Amount and Count based on duration, study year, attained age, and face amount band.
          The expecteds were computed on a policy level basis for 2.5 million simulated policies over 14 study years from 2010 - 2024. 
          after I generated the 2.5 million policies I mapped each with its correct VBT15 rate. After doing that I calculated each policies <strong>qx_amount</strong> and <strong>qx_count</strong>, which serve as the expeected basis when summed across the different splits
      </p>
      <h4 id='Actuals'>Actuals</h4>
      <p className="mb-4">I wanted my results to be somewhat reasonable so I took the baseline mortality of the VBT15 and applied
        some custom adjustments, after those custom adjustments were applied I used a random number generator to compare to that adjusted mortality rate to determine if a particular policy was to be given status "D" for the current study year that was being iterated on.
      </p>


        <p></p>
        <section style={{"width":"100%"}}>
        <div >
        <script type="py" src='/duration.py'/>
        </div  >
        {/* <canvas id="plot" width="1200px" height="400px"></canvas> */}
        <script type="py" src='/studyyear.py'/>
        <script type="py" src='/attainedage.py'/>
        <script type="py" src='/faceband.py'/>
        </section>
        <Card className="mb-4">
      <CardContent>
        <h3 className="text-xl font-bold mb-2">Code Snippet: Durations Illustration code</h3>
        <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
        {highlightSyntax(code)}
        </pre>
      </CardContent>
    </Card>

    <h2 className="text-2xl font-bold mt-6 mb-2">1. Policy Generation logic</h2>
      <p className="mb-4">
      Generating an A/E at work is very easy because I have access to all the data necessary to create illustrations for analysis. Outside of work, I do not have a policy level data source I could use because all companies correctly protect the PII of their policy holders. In lieu, of such a data source, I have programmatically created data to do calculations and transformations on. The data used could be considered a closed block of business for initial analysis purposes. The bulk of the work for this project was in the data creation and adjustments. You can find that work near the bottom of the page. I lead with Charts for A/E by both Count and Amount. 
      </p>
      <iframe src="/ActuarialData_display.html" width="100%" height={iframeHeight}></iframe>
        <h2 id='disclosures' className="text-2xl font-bold mt-6 mb-2">X. Disclosures</h2>
      <ul className="list-disc pl-5 mb-4">
      <li>The rates I am using are based on the Valuation Basic Table 2015 RR100 for ANB.</li>
      <li> No new policies are added after the initial policy generation. This exercise essentially illustrates mortality on a closed block of business.</li>
      <li>Although policies have different issue dates throughout each study year, there are no partial exposures per year. Each study year includes only one record per policy. This simplifies the mathematical exercise, as I don't need to calculate complete durations for each policy across all study years</li>
      <li>The programmatically generated policy-level data does not include all types of policy outcomes; for instance, lapses, expiries, and reduced paid-up statuses are not illustrated. While I would love to include a lapse analysis, it is beyond the scope of this project.</li>
      <li>Reinsurance is not simulated in this project, Amount based A/E's are shown on a Gross basis. I decided to not implement reinsurance logic into these policies.</li>
      </ul>
        <ResumeSection/>
        <Footer></Footer>
        </div>
    );
}