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
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
>>>>>>> 4552386 (Initial commit from Create Next App)
}
