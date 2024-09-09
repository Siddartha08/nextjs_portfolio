<<<<<<< HEAD
<<<<<<< HEAD
import { AuthProvider } from '../context/AuthContext';
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
=======
=======
import { AuthProvider } from '../context/AuthContext';
>>>>>>> 189be11 (initial commit of nextjs portfolio)
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }) {
<<<<<<< HEAD
  return <Component {...pageProps} />;
>>>>>>> 4552386 (Initial commit from Create Next App)
=======
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
>>>>>>> 189be11 (initial commit of nextjs portfolio)
}
