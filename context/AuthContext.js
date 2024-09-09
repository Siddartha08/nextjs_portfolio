// context/AuthContext.js
import { createContext, useState, useContext } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  const login = (password) => {
    if (password === 'shadowIT') {
      setAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setAuthenticated(false);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
