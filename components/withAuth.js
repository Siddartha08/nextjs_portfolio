// components/withAuth.js
import React, { useState } from 'react';
import PasswordModal from './PasswordModal';
const withAuth = (WrappedComponent) => {
  const WithAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [showModal, setShowModal] = useState(true); // Initially show modal
    const handlePasswordSubmit = (password) => {
      // Check password against your authentication logic
      if (password === 'shadowIT') { 
        setIsAuthenticated(true);
        setShowModal(false);
      } else {
        alert('Incorrect password');
      }
    };
    return (
      <>
        {isAuthenticated ? (
          <WrappedComponent />
        ) : (
          <PasswordModal isOpen={showModal} onClose={handlePasswordSubmit} />
        )}
      </>
    );
  };
  return WithAuth;
};
export default withAuth;