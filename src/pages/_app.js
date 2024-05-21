// pages/_app.js
import '@/styles/globals.css';
import { ActiveIndexProvider, ActiveIndexContext } from '../context/ActiveIndexContext';

function MyApp({ Component, pageProps }) {
  return (
    <ActiveIndexProvider>
      <Component {...pageProps} />
    </ActiveIndexProvider>
  );
}

export default MyApp;