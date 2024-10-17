import React, { useState } from 'react';
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
    <div className="password-modal"> 
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
export default PasswordModal;