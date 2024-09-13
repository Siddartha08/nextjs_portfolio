// components/LogoutButton.js
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #dc3545; // Red background color
  color
: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease; 
  &:hover {
    background-color: #c82333; // Darker red on hover
  }
`;

const LogoutButton = () => {
  const { logout } = useAuth();

  return <Button onClick={logout}>Logout</Button>;
};

export default LogoutButton;
