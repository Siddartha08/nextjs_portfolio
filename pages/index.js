// pages/index.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { portfolioItems } from '../data/portfolio';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';
import styles from '@/styles/Home.module.css';
import ResumeSection from '../components/ResumeSection';
import Navbar from '../components/Navbar';


// const Container = styled.div`
//   padding: 2rem;
// `;

const Container = styled.div`
    padding
  : 2rem 2rem; // MODIFIED: Added more horizontal padding
  display: flex; // NEW: Make container a flexbox
  flex-direction: column; // NEW: Stack elements vertically
  min-height: 100vh; // NEW: Ensure full viewport height
  `;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem;
  margin: 20px;
  padding: 3rem;
`;

const PortfolioCard = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: left;
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

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  // animation logic 
  const rootText = "";
  const engineeringFields = ["Software", "Data", "Python"];
  const fullTextSuffix = " Engineer";

  const [displayedText, setDisplayedText] = useState(rootText);
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 100; // Speed of typing (ms)
  const delayBetweenFields = 1000; // Delay before changing to the next field (ms)

  useEffect(() => {
    // Function to simulate typing effect
    const typeWriter = () => {
      const fullText = rootText + engineeringFields[currentFieldIndex] + fullTextSuffix;
      if (charIndex < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(charIndex));
        setCharIndex((prev) => prev + 1);
      } else {
        // After the text is fully typed, wait for a while before erasing it
        setTimeout(() => {
          setDisplayedText(rootText); // Reset to base text
          setCharIndex(0);
          setCurrentFieldIndex((prev) => (prev + 1) % engineeringFields.length); // Move to the next field
        }, delayBetweenFields);
      }
    };

    // Typing effect timeout
    const timeoutId = setTimeout(typeWriter, typingSpeed);

    // Cleanup timeout
    return () => clearTimeout(timeoutId);
  }, [charIndex, currentFieldIndex]); // Rerun effect whenever charIndex or currentFieldIndex changes


  const handlePortfolioClick = (id) => {
    setSelectedPortfolio(id);
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(password);
    if (success) {
      setShowModal(false);
      router.push(`/portfolio/${selectedPortfolio}`);
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar 
  pageTitle="Full Stack Development"  // Set the title for this page
  navItems={[
    { href: '#intro', text: 'Home' },
    { href: '#about', text: 'About Me' },
    { href: '#skills', text: 'Skills' },
    { href: '#portfolio', text: 'Portfolio' },
    { href: '#Resume', text: 'Resume' }
  ]} 
/>
      {/* Intro Section */}
      <section id="intro" className={`${styles.introSection}`}>
        <div className="container">
          <p className="lead">Hi, My name is JP</p>
          <h1 class="d-inline-block d-md-none fs-3">I'm a {displayedText}</h1>
          <h1 class="d-none d-md-inline-block d-lg-none fs-2">I'm a {displayedText}</h1>
          <h1 class="d-none d-lg-inline-block fs-1">I'm a {displayedText}</h1>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`${styles.aboutSection}`}>
        <div className="container">
          <h2>My Why</h2>
          <p>
          Engineering, in all its forms, has been a deeply rewarding journey for me. Whether it's full-stack web development, Python engineering, or data engineering, I find satisfaction in building systems that are both efficient and scalable. I'm driven by the desire to create solutions that are not only functional but also thoughtfully designed. I aim to continuously improve my craft and would love to contribute to an organization that values innovation and thoughtful engineering practices.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`${styles.skillsSection} bg-light`}>
        <div className="container">
          <h2 className="text-center">My Tech Stack</h2>
          <div className="row">
            {/* Repeat this block for each skill */}
            <div className="col-6 col-lg-2 col-md-2 text-center">
              <div className="mt-5">
                <Image src="/images/Python.png" alt="Python" width={50} height={50} />
                <h3 className="h4 mb-2">Python</h3>
              </div>
            </div>
            {/* Repeat for other tech stacks */}
            <div className="col-6 col-lg-2 col-md-2 text-center">
              <div className="mt-5">
                <Image src="/images/React.png" alt="Python" width={50} height={50} />
                <h3 className="h4 mb-2">React</h3>
              </div>
            </div>

            <div className="col-6 col-lg-2 col-md-2 text-center">
              <div className="mt-5">
                <Image src="/images/next.png" alt="Python" width={50} height={50} />
                <h3 className="h4 mb-2">Next.js</h3>
              </div>
            </div>

            <div className="col-6 col-lg-2 col-md-2 text-center">
              <div className="mt-5">
                <Image src="/images/SQL Developer.png" alt="Python" width={50} height={50} />
                <h3 className="h4 mb-2">SQL</h3>
              </div>
            </div>

            <div className="col-6 col-lg-2 col-md-2 text-center">
              <div className="mt-5">
                <Image src="/images/Anaconda.png" alt="Python" width={50} height={50} />
                <h3 className="h4 mb-2">anaconda</h3>
              </div>
            </div>

            <div className="col-6 col-lg-2 col-md-2 text-center">
              <div className="mt-5">
                <Image src="/images/FastAPI.png" alt="Python" width={50} height={50} />
                <h3 className="h4 mb-2">FastAPI</h3>
              </div>
            </div>
            
            <div className="col-6 col-lg-2 col-md-2 text-center">
              <div className="mt-5">
                <Image src="/images/Apache Airflow.png" alt="Python" width={50} height={50} />
                <h3 className="h4 mb-2">Airflow</h3>
              </div>
            </div>

            <div className="col-6 col-lg-2 col-md-2 text-center">
              <div className="mt-5">
                <Image src="/images/Pandas.png" alt="Python" width={50} height={50} />
                <h3 className="h4 mb-2">Pandas</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}

      <Container className="container" style={{padding: "0px"}}>
      <h2>Portfolio</h2>
      <PortfolioGrid style={{margin: "0px", padding:"1rem"}} className="container">
        {portfolioItems.map(item => (
          <PortfolioCard key={item.id} className="h-100 col-lg-12 col-md" onClick={() => handleCardClick(item.id)} style={{ cursor: 'pointer' }}>
            
            
            
            {item.pimage ? (
              <ImageContainer>
              <Image style={{objectFit: "cover"
              }} src={item.image} alt={item.title} layout="fill" objectFit="cover" />
            </ImageContainer>
            ): null}
            <ProjectTitle>{item.title}</ProjectTitle>
            <ProjectDescription>{item.description}</ProjectDescription>
            <p className="card-text">
                      Technologies used:{' '}
                      {item.technologies.map((tech, index) => (
                        <span key={index} className="badge bg-secondary me-1">
                          {tech}
                        </span>
                      ))}
                    </p>
            <div style={{display: "flex", flexDirection: "row", 
            alignItems:"center", textAlign:"right", justifyContent:"space-between"}}>
            <ViewProjectButton href={item.link} target="_blank" rel="noopener noreferrer">
              View Project
            </ViewProjectButton>
            <p className="date badge bg-secondary" style={{marginBottom: "0px"}}>                       Date: {item.date} 
                    </p>
            </div>
          </PortfolioCard>
        ))}
      </PortfolioGrid>
      </Container>
      {/* Resume Section */}
      <ResumeSection />


      {/* Footer */}
      <footer className="bg-dark text-white pt-4 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li><a href="https://www.linkedin.com/in/james-j-p-emery-26318679/" className="text-white" legacyBehavior>LinkedIn</a></li>
                <li><a href="https://github.com/Siddartha08" className="text-white" legacyBehavior>GitHub</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact</h5>
              <address>
                <strong>James P. (JP) Emery</strong><br />
                Houston, Texas<br />
                Email: jemery89@gmail.com<br />
                Phone: (918) 406-2760
              </address>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
