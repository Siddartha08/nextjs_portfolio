import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left:
 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); // Semi-transparent background
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); // Add a subtle shadow
  text-align: center; // Center text within the modal
`;

const PasswordModal = ({ isOpen, onClose }) => {
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password submission, e.g., call a callback function
    onClose(password); // Pass the password to the parent component
  };
  if (!isOpen) {
    return null; // Don't render if not open
  }
  return (
    <ModalOverlay> {/* Use the styled component */}
    <ModalContent> {/* Use the styled component */}
      <div style={{padding:"5px"}}><strong>Please submit password</strong></div>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <button type="submit">Submit</button>
        </form>
        </ModalContent>
  </ModalOverlay>
  );
};
export default PasswordModal;