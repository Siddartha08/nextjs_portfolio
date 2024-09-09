// components/withAuth.js
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { authenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!authenticated) {
        router.push('/');
      }
    }, [authenticated, router]);

    if (!authenticated) {
      return null; // Or a loading spinner
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
