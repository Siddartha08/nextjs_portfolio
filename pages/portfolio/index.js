// pages/portfolio/index.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { portfolioItems } from '../../data/portfolio';
import { useAuth } from '../../context/AuthContext';
import styled from 'styled-components';
import LogoutButton from '../../components/LogoutButton';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer'; 
import ResumeSection from '/components/ResumeSection';
import Navbar from '../../components/Navbar';


const pyscript_val = `
    from datetime import datetime
    import pandas as pd
    now = datetime.now()
    display("Current date and time:", now)
    `

const Container = styled.div`
    padding
  : 2rem 2rem; // MODIFIED: Added more horizontal padding
    background-color: #f8f9fa; 
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 
  0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 10h20v20H10V10z' fill='%23ddd' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E"); // NEW: Added subtle background pattern
  display: flex; // NEW: Make container a flexbox
  flex-direction: column; // NEW: Stack elements vertically
  min-height: 100vh; // NEW: Ensure full viewport height
  `;

const Header = styled.div` 
  display: flex;
  justify-content: space-between; 
  align-items: center;
  margin-bottom: 2rem;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); // MODIFIED: Increased minmax for more spacing
  gap: 2rem; // MODIFIED: Increased gap for more whitespace
`;


const PortfolioCard = styled.div`
  background-color: #ffffff;
  padding: 2rem; // MODIFIED: Increased padding
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // MODIFIED: More pronounced shadow
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease; // MODIFIED: Added box-shadow transition
  &:hover {
    transform: translateY(-8px); // MODIFIED: Increased translation for a more noticeable effect
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); // MODIFIED: Darker shadow on hover
  }
`;

const Title = styled.h2`
  color: #343a40;
  margin-bottom: 2rem; // MODIFIED: Increased margin
  font-weight: 600; // MODIFIED: Bolder font weight
`; 

const ProjectTitle = styled.h3`
  color: #007bff;
  margin-bottom: 0.5rem;
  font-weight: 500; // MODIFIED: Slightly bolder font weight
`;

const ProjectDescription = styled.p`
  color: #6c757d;
  font-size: 1rem; // MODIFIED: Slightly larger font size
  line-height: 1.6; // MODIFIED: Increased line height for better readability
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px; // MODIFIED: Increased height 
  overflow: hidden;
  margin-bottom: 1.5rem;
  border-radius: 8px; 
  object-fit:contain
  &:hover { 
    img {
      filter: brightness(80%); // NEW: Added subtle darkening on hover
    }
  }
`;

const ViewProjectButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #007bff; /* Blue button */
  color: #ffffff;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;

const PasswordModal = styled.div`
  /* Add styling for modal */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PasswordBox = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
`;

export default function Portfolio() {
  const { authenticated, login } = useAuth();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!authenticated) {
      setShowModal(true);
    }
  }, [authenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(password);
    if (success) {
      setShowModal(false);
    } else {
      alert('Incorrect password');
    }
  };

  const handleCardClick = (id) => {
    router.push(`/portfolio/${id}`);
  };

  return (
    <Container>
      <Navbar 
  pageTitle="Portfolio"  // Set the title for this page
  navItems={[
    { href: '/', text: 'Home' },
    { href: '#Resume', text: 'Resume' }
  ]} 
/>
      <Header>      
      <Title>Portfolio Pieces</Title>
      <LogoutButton />
      </Header>

      <PortfolioGrid>
        {portfolioItems.map(item => (
          <PortfolioCard key={item.id} onClick={() => handleCardClick(item.id)} style={{ cursor: 'pointer' }}>
            <ImageContainer>
              <Image style={{objectFit: "cover"
              }} src={item.image} alt={item.title} layout="fill" objectFit="cover" />
            </ImageContainer>
            <ProjectTitle>{item.title}</ProjectTitle>
            <ProjectDescription>{item.description}</ProjectDescription>
            <ViewProjectButton href={item.link} >
              View Project
            </ViewProjectButton>
          </PortfolioCard>
        ))}
      </PortfolioGrid>

      {showModal && (
        <PasswordModal>
          <PasswordBox>
            <h3>Enter Password to View Portfolio</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Submit</button>
              <button type="button" onClick={() => router.push('/')}>Cancel</button>
            </form>
          </PasswordBox>
        </PasswordModal>
      )}

      <ResumeSection/>
      <Footer></Footer>
    </Container>
  );
}
