import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

const styles = {
  filterBg: {
    background: '#2C2C2C',
    color: 'gray',
    borderRadius: '25px',
    gap: '10px',
    padding: '5px 20px',
    fontSize: '14px',
    cursor: 'pointer' as const, // Explicitly typing 'cursor' to satisfy TypeScript
  },
  filterBgActive: {
    background: '#2C2C2C',
    color: 'white',
    borderRadius: '25px',
    gap: '10px',
    padding: '5px 20px',
    fontSize: '14px',
    cursor: 'pointer' as const, // Explicitly typing 'cursor' to satisfy TypeScript
  },
  shopMore: {
    border: '1px solid #3A3A3A',
    display: 'flex',
    borderRadius: '8px',
    padding: '10px 70px',
    fontSize: '12px',
    margin: 'auto',
  },
  filterMargin: {
    marginTop: '3vh',
    marginLeft: '5vw',
  },
};

interface Product {
  id: number;
  imageSrc: string;
  ecomImageSrc: string;
  rating: string;
  ratingCount: string;
  title: string;
  description: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    imageSrc: "/assets/product-1.png",
    ecomImageSrc: "/assets/flipkart.png",
    rating: "4.4",
    ratingCount: "Jump Cuts",
    title: "Men Printed Polo Neck",
    description: "Polyester Black T-Shirt",
    price: "349",
  },
  {
    id: 2,
    imageSrc: "/assets/product-2.png",
    ecomImageSrc: "/assets/amazon.png",
    rating: "4.4",
    ratingCount: "AVEJO",
    title: "Men Checkered Round Neck",
    description: "Cotton Blend Black T-Shirt",
    price: "419",
  },
  {
    id: 3,
    imageSrc: "/assets/product-3.png",
    ecomImageSrc: "/assets/myntra.png",
    rating: "4.4",
    ratingCount: "EyeBogler",
    title: "Men Solid Round Neck",
    description: "Polyester Black T-Shirt",
    price: "254",
  },
];

const SearchResult: React.FC = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('Recommended');

  const handleProductCardClick = (productId: number) => {
    console.log("Product card clicked:", productId);
    if (productId === 2) {
      router.push('/ProductDetails');
    }
    // Do whatever you need with the clicked product card
  };

  return (
    <div>
      <Layout>
        <p className='body-margin font-Satoshi text-2xl'>List of Black T-shirt</p>
        <div className='font-Satoshi flex gap-x-2 filter-scrollable-container' style={styles.filterMargin}>
          <span
            style={activeFilter === 'Recommended' ? styles.filterBgActive : styles.filterBg}
            onClick={() => setActiveFilter('Recommended')}
          >
            Recommended
          </span>
          <span
            style={activeFilter === 'Top Rated' ? styles.filterBgActive : styles.filterBg}
            onClick={() => setActiveFilter('Top Rated')}
          >
            Top Rated
          </span>
          <span
            style={activeFilter === 'Lowest Price' ? styles.filterBgActive : styles.filterBg}
            onClick={() => setActiveFilter('Lowest Price')}
          >
            Lowest Price
          </span>
        </div>
        <div className='product-result-container'>
          {products.map((product) => (
            <div
              key={product.id}
              className='font-Satoshi product-card-outerdiv'
              onClick={() => handleProductCardClick(product.id)}
            >
              <ProductCard
                id={product.id}
                imageSrc={product.imageSrc}
                ecomImageSrc={product.ecomImageSrc}
                rating={product.rating}
                ratingCount={product.ratingCount}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            </div>
          ))}
        </div>
        <button className="shop-more-btn" style={styles.shopMore}>
          <img src="/assets/shop-star-white.svg" alt="Shop Star" width={20} height={20} />
          &ensp;Shop more
        </button>
      </Layout>
    </div>
  );
};

export default SearchResult;
