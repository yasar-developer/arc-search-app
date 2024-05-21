import React, { useState, useEffect } from 'react';
import { IoIosGlobe } from "react-icons/io";
import Layout from '../components/Layout';
import { useRouter } from 'next/router';


const Searching = () => {
    const router = useRouter();
    const shoppingSites = [
        'Shopping across web',
        'flipkart.com',
        'meesho.com',
        'mensxp.com',
        'amazon.com',
        'ajio.com',
        'nike.ae',
    ];

    const [currentRow, setCurrentRow] = useState(0);
    const [fadeOutTable, setFadeOutTable] = useState(false);
    const [showText, setShowText] = useState(false);
    const [fadeOutText, setFadeOutText] = useState(false);
    const [tableRemoved, setTableRemoved] = useState(false); // State to track table removal

    useEffect(() => {
        if (currentRow === shoppingSites.length) {
            setTimeout(() => {
                setFadeOutTable(true);
            }, 500);
            return;
        }

        const interval = setInterval(() => {
            setCurrentRow(prevRow => prevRow + 1);
        }, 500);

        return () => clearInterval(interval);
    }, [currentRow, shoppingSites.length]);

    useEffect(() => {
        if (fadeOutTable) {
            setTimeout(() => {
                setShowText(true);
                setTableRemoved(true); // Mark table as removed after fade out
            }, 1000);
        }
    }, [fadeOutTable]);

    useEffect(() => {
        if (showText) {
            setTimeout(() => {
                setFadeOutText(true);
            }, 1000);
        }
    }, [showText]);

    useEffect(() => {
        if (fadeOutText) {
            setTimeout(() => {
                router.push('/SearchResult');
            }, 1000);
        }
    }, [fadeOutText]);

    const activeRowStyle = {
        color: 'white',
    };

    const inactiveRowStyle = {
        color: 'gray'
    };

    return (
        <div style={{ position: 'relative' }}>

            <Layout>
            {!tableRemoved && ( // Conditionally render the table based on tableRemoved state
                <div style={{ transition: 'opacity 1s', opacity: fadeOutTable ? 0 : 1 }}>
                    <table className="mx-10 my-16 font-Satoshi" style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
                        <tbody>
                            {shoppingSites.map((site, index) => (
                                <tr key={index} style={currentRow === index ? activeRowStyle : inactiveRowStyle}>
                                    <td style={{ verticalAlign: 'top', width: '25px', whiteSpace: 'nowrap' }}>
                                        {currentRow === index && (
                                            <img src="/assets/glasses.svg" alt="glasses" width={20} height={20} />
                                        )}
                                    </td>
                                    <td style={{ whiteSpace: 'nowrap' }}>{site}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {showText && (
                <div className="flex mx-10 my-16 items-center font-Satoshi" style={{ transition: 'opacity 1s', opacity: fadeOutText ? 0 : 1 }}>
                    <IoIosGlobe />&nbsp; Making an experience for you!
                </div>
            )}
            </Layout>
        </div>
    );
};

export default Searching;
