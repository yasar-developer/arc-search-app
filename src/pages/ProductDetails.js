import { useState } from 'react';
import { useContext } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import ToggleBar from '../components/ToggleBar';
import { ActiveIndexContext } from '../context/ActiveIndexContext';

const ProductDetails = () => {
    const productDetails = [
        { label: 'Type', value: 'Mandarin Collar' },
        { label: 'Sleeve', value: 'Full Sleeve' },
        { label: 'Fabric', value: 'Pure Cotton' },
        { label: 'Neck Type', value: 'Mandarin Collar' },
        { label: 'Ideal For', value: 'Men' },
        { label: 'Size', value: 'S' },
        { label: 'Pattern', value: 'Checked' },
        { label: 'Sleeve Type', value: 'Narrow' },
        { label: 'Fabric Care', value: 'Machine wash as per tag' },
    ];

    const { activeTab } = useContext(ActiveIndexContext);
    const images = [
        '/assets/Product1-1.png',
        '/assets/Product1-2.png',
        '/assets/Product1-3.png',
    ];

    const [mainImage, setMainImage] = useState(images[0]);

    const handleClick = (image) => {
        setMainImage(image);
    };

    const styles = {
        detContainer: {
            margin: '1% 1% 1% 0'
        }
    }


    return (
        <div className='flex body-bg font-Satoshi'>
            <Layout>
                <div className="flex flex-col items-center p-4 font-Satoshi">
                    <h1 className="text-2xl font-bold mb-6">Men Checkered Round Neck Cotton <br /> Blend Black T-Shirt</h1>
                    <div className="flex">
                        <div className="flex flex-col mr-4 space-y-4">
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className="w-[100px] h-[100px] relative overflow-hidden cursor-pointer border border-2 border-white hover:border-gray-400 rounded-md"
                                    onClick={() => handleClick(image)}
                                >
                                    <Image src={image} alt={`Thumbnail ${index + 1}`} layout="fill"
                                        objectFit="cover" />
                                </div>
                            ))}
                        </div>
                        <div className="flex-grow">
                            <div className="w-[500px] h-[500px] relative overflow-hidden rounded-lg shadow-lg">
                                <Image
                                    src={mainImage}
                                    alt="Main"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            <div className={`font-Satoshi bg-[#141414] w-2/6 text-white border border-solid border-gray border-opacity-25`} style={styles.detContainer}>
                <div className="flex flex-col h-full">
                    <div className="flex flex-col items-center mt-14 gap-6">
                        <img src="/assets/house_of_models.png" alt="House of Design" className="w-[65px] h-[65px] mx-auto" />
                        <p>House of Models</p>
                        <ToggleBar />
                    </div>
                    <p className='ml-7 my-5'>{activeTab === 'Overview' ? 'Product Description' :
                        activeTab === 'Specifications' ? 'Specifications' : 'Customer Says'}</p>
                    <div className='px-7 flex flex-col flex-grow  mb-3' style={{ height: '200px', overflowY: 'auto' }}>
                        {
                            activeTab === 'Reviews' &&
                            <p className='text-gray-500 text-sm'>
                                Tees Collection specialize in making men's clothes with characteristics of fashionable, comfortable and elegant.
                                To show a kind of fashionable and special dressing style, appear the person's vigorous and vitality personality,
                                and express his active and optimistic attitude of life. Wear our professional design high quality men's shirts,
                                you will become more elegant and fascinating. Our designers are attention to every detail of the design and pursue
                                exquisite sewing process.
                            </p>
                        }
                        {
                            activeTab === 'Specifications' && (
                                <table className="w-full border-collapse border-5 border-white rounded ">
                                    <tbody>
                                        {productDetails.map((item, index) => (
                                            <tr key={index}>
                                                <td className="border border-gray-300 p-2 text-white font-normal">{item.label}</td>
                                                <td className="border border-gray-300 p-2 text-gray-500">{item.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            )
                        }
                        {
                            activeTab === 'Overview' &&
                            <p className='text-gray-500 text-sm'>
                                Customers like the quality, comfort, appearance, and fabric of the t-shirt. They mention that the finishing is also very good. It provides a perfect balance between a relaxed feel and a stylish look, and the fabric is smooth and unmatched. They appreciate the value and fit. However, opinions are mixed on the color.
                            </p>
                        }
                    </div>


                    <button className='bg-white text-black rounded p-3 mt-auto m-4'>Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
