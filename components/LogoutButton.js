// components/LogoutButton.js
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';

const Button = styled.button`
  margin-top: 1rem;
`;

const LogoutButton = () => {
  const { logout } = useAuth();

  return <Button onClick={logout}>Logout</Button>;
};

export default LogoutButton;
