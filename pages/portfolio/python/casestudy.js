import styled from 'styled-components';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer'; 
import ResumeSection from '/components/ResumeSection';
import { Card, CardContent, Box, useTheme } from '@mui/material'

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
    <h1 className="text-3xl font-bold mb-4">Data Quality Case Study: Ensuring Accurate Data for Actuarial Modeling</h1>
    <h6 ><strong>By: JP Emery Lead Engineer </strong></h6>
    <br></br>
        <section style={{"width":"100%"}}>
        Hello world! <br />
        This is the current date and time, as computed by Python:
        <div >
        <script type="py" src='/duration.py'/>
        </div  >
        <canvas id="plot" width="1200px" height="400px"></canvas>
        <script type="py" src='/studyyear.py'/>
        <script type="py" src='/attainedage.py'/>
        <script type="py" src='/faceband.py'/>
        </section>
        <ResumeSection/>
        <Footer></Footer>
        </div>
    );
}