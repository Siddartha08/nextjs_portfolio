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

const PortfolioPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const item = portfolioItems.find((item) => item.id === id);

  if (!item) {
    return <div>Portfolio item not found!</div>;
  }

  return (
    <div className="container my-5">
      <h1>{item.title}</h1>
      <Image src={item.image} alt={item.title} width={800} height={600} />
      <p className="mt-4">{item.description}</p>
      <p>
        Technologies used: {item.technologies.map((tech, index) => (
          <span key={index} className="badge bg-secondary me-1">{tech}</span>
        ))}
      </p>
    </div>
  );
};

// Wrap the page with the `withAuth` HOC to protect it
export default withAuth(PortfolioPage);

