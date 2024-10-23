import styled from 'styled-components';
import Navbar from '../../../components/Navbar';

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
        <Container>
        <Navbar 
        pageTitle="Portfolio"  // Set the title for this page
        navItems={[
            { href: '/', text: 'Home' },
            { href: '#Resume', text: 'Resume' }
        ]} 
        />
        <section >
        Hello world! <br />
        This is the current date and time, as computed by Python:
        <script type="py" src='/main.py'/>
        </section>
        </Container>
    );
}