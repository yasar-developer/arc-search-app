// pages/index.js
import Head from 'next/head';
import SwipeImageComponent from '../components/SwipeImageComponent';

export default function Search() {
  const imagePaths = [
    '/assets/product1-1.png',
    '/assets/product1-2.png',
    '/assets/product1-3.png',
    // Add more image paths as needed
  ];

  return (
    <div>
      <Head>
        <title>Swipe Image Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <SwipeImageComponent images={imagePaths} />
      </main>
    </div>
  );
}

const styles = {
  main: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }
};
