import React, { useState } from 'react';
import { useSwipeable, SwipeableHandlers } from 'react-swipeable';

interface SwipeImageComponentProps {
  images: string[];
}

const SwipeImageComponent: React.FC<SwipeImageComponentProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlers: SwipeableHandlers = useSwipeable({
    onSwipedLeft: () => handleNextImage(),
    onSwipedRight: () => handlePreviousImage(),
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePreviousImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={styles.container as React.CSSProperties}>
      <div {...handlers} style={styles.imageContainer as React.CSSProperties}>
        <div className="absolute top-2 left-2">
          <img className="rounded-2xl" src="./assets/flipkart.png" alt="Product Image" width={30} height={30} />
        </div>
        <img src={images[currentIndex]} alt="Swipeable" style={styles.image as React.CSSProperties} />
        <div style={styles.indicatorContainer as React.CSSProperties}>
          {images.map((_, index) => (
            <div
              key={index}
              style={{
                ...styles.indicator,
                backgroundColor: currentIndex === index ? 'white' : 'gray'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageContainer: {
    background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 1) 100%)`,
    borderRadius: '20px',
    position: 'relative',
    width: '300px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    userSelect: 'none',
    marginBottom: '10px'
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '5px'
  },
  indicator: {
    width: '20px',
    height: '2px',
    margin: '0 1px',
    backgroundColor: 'gray',
    borderRadius: '5px',
  }  
};

export default SwipeImageComponent;
