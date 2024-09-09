// pages/portfolio/index.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { portfolioItems } from '../../data/portfolio';
import { useAuth } from '../../context/AuthContext';
import styled from 'styled-components';
import LogoutButton from '../../components/LogoutButton';

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
      <h1>All Portfolio Projects</h1>
      <LogoutButton />
      <PortfolioGrid>
        {portfolioItems.map(item => (
          <PortfolioCard key={item.id} onClick={() => handleCardClick(item.id)} style={{ cursor: 'pointer' }}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
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
    </Container>
  );
}
