// pages/_app.tsx
import '@/styles/globals.css';
import { ActiveIndexProvider } from '../context/ActiveIndexContext';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ActiveIndexProvider>
      <Component {...pageProps} />
    </ActiveIndexProvider>
  );
}

export default MyApp;
