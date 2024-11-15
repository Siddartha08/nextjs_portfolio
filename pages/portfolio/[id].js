// pages/portfolio/[id].js
// import withAuth from '../../components/withAuth';
// import { useRouter } from 'next/router';
// import { useEffect } from 'react';
// import { useAuth } from '../../context/AuthContext';
// import { portfolioItems } from '../../data/portfolio';
// import styled from 'styled-components';
// import LogoutButton from '../../components/LogoutButton';

// const Container = styled.div`
//   padding: 2rem;
// `;

// const PortfolioPage = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const { authenticated } = useAuth();

//   useEffect(() => {
//     if (!authenticated) {
//       router.push('/');
//     }
//   }, [authenticated, router]);

//   const portfolioItem = portfolioItems.find(item => item.id === id);

//   if (!portfolioItem) {
//     return <Container>Loading...</Container>;
//   }

//   return (
//     <Container>
//       <h1>{portfolioItem.title}</h1>
//       <p>{portfolioItem.description}</p>
//       <LogoutButton />
//       {/* Add more detailed content here */}
//     </Container>
//   );
// };

// export default  withAuth(PortfolioPage);


// pages/portfolio/[id].js

import { useRouter } from 'next/router';
import { portfolioItems } from '@/data/portfolio';
import Image from 'next/image';
import withAuth from '@/components/withAuth';
import React from 'react';
import Navbar from '../../components/Navbar';

const PortfolioPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const item = portfolioItems.find((item) => item.id === id);

  if (!item) {
    return <div>Portfolio item not found!</div>;
  }

  const iframeHeight = item.id === 'covid-data-visualization' ? '3200px' : '1650px'; 

  return (
    <div className="container my-5">
      <Navbar 
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2015729365.
  pageTitle="Portfolio"  // Set the title for this page
  navItems={[
    { href: '/', text: 'Home' },
    { href: '#Resume', text: 'Resume' }
      ]} 
      />
      <h1>{item.title}</h1>
      <p>
        Technologies used: {item.technologies.map((tech, index) => (
          <span key={index} className="badge bg-secondary me-1">{tech}</span>
        ))}
      </p>
      {item.longform.map((item, index) => 
        React.createElement(
          item.type,
          { key: index },
          item.content
        )
      )}
      <iframe src={item.html} width="100%" height={iframeHeight}></iframe>

      
    </div>
  );
};

// Wrap the page with the `withAuth` HOC to protect it
export default withAuth(PortfolioPage);

