// components/ProductCard.js

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ imageSrc, ecomImageSrc, rating, ratingCount, title, description, price }) => {
  const divStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="font-Satoshi product-card box-shadow relative bg-black/40 shadow-inner rounded-[15px] flex flex-col justify-between p-4" style={divStyle}>
      <div className="absolute top-2 left-2">
        <Image className="rounded-2xl" src={ecomImageSrc} alt="Product Image" width={30} height={30} />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <span className="font-medium items-center text-xs bg-white text-black py-1 rounded-full w-14 centered-content flex justify-center mt-auto mb-2">
          {rating} &thinsp;
          <FaStar className="mb-0.5" />
        </span>
        <span className="text-xs">{ratingCount} ratings</span>
      </div>
      <div className="text-white">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-sm">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">₹{price}</span>
          <button className="text-xs mt-4 px-4 py-2 shop-button-bg rounded-full">Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
