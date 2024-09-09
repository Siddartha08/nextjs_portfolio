// pages/index.js
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { portfolioItems } from '../data/portfolio';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';
import styles from '@/styles/Home.module.css';

const Container = styled.div`
  padding: 2rem;
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;

const PortfolioCard = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Python Development+</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#intro">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About Me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Resume">Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Intro Section */}
      <section id="intro" className={`${styles.introSection}`}>
        <div className="container">
          <p className="lead">My name is JP</p>
          {/* <h1 class="fs-3 fs-md-2 fs-lg-1" >I'm a {displayedText}</h1> */}
          <h1 class="d-inline-block d-md-none fs-3">I'm a {displayedText}</h1>
          <h1 class="d-none d-md-inline-block d-lg-none fs-2">I'm a {displayedText}</h1>
          <h1 class="d-none d-lg-inline-block fs-1">I'm a {displayedText}</h1>
          {/* className="display-4 md-h5" */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`${styles.aboutSection}`}>
        <div className="container">
          <h2>My Why</h2>
          <p>
            Developing in Python has been a wonderful experience for me. Simple and elegant code can often be driven by some of the most efficient implementations of data structures and algorithms. This elegance is what drives me to continue to learn and grow as an engineer. I would love to work with an organization that values the same principles.
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
      <section id="portfolio" className={`${styles.portfolioSection}`}>
        <div className="container">
          <h2>Portfolio</h2>
          <div className="row">
            {portfolioItems.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 mb-4">
                <div className="card h-100">
                  <Image
                    src={item.image}
                    className="card-img-top"
                    alt={item.title}
                    width={600}
                    height={400}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">
                      Technologies used:{' '}
                      {item.technologies.map((tech, index) => (
                        <span key={index} className="badge bg-secondary me-1">
                          {tech}
                        </span>
                      ))}
                    </p>
                    <Link href={item.link}>
                      <a className="btn btn-primary">View Project</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="Resume" className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2>Download My Resume</h2>
              <a href="/download_resume" className="btn btn-primary btn-lg">Download PDF</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white pt-4 pb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li><a href="https://www.linkedin.com/in/james-j-p-emery-26318679/" className="text-white">LinkedIn</a></li>
                <li><a href="https://github.com/Siddartha08" className="text-white">GitHub</a></li>
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
