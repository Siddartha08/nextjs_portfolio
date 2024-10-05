import { useRouter } from 'next/router';
import { portfolioItems } from '@/data/portfolio';
import Image from 'next/image';
import withAuth from '@/components/withAuth';
import React from 'react';

const dataqualityPage = () => {
  const item = portfolioItems.find(item => item.id === 'dataquality')
  return (
    <div className="container my-5">
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
      <iframe src={item.html} width="100%" height="1650px"></iframe>

      
    </div>
  );
};

// Wrap the page with the `withAuth` HOC to protect it
export default dataqualityPage;