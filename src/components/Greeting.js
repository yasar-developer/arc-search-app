// Greeting.js
import React from 'react';

const Greeting = ({ name }) => {
    return (
        <div className="font-Satoshi font-medium text-4xl">
            <p className="greeting-font-color">
                Hello {name}
            </p>
            <p className="text-gray-500 mt-3">
                How can I help you today?
            </p>
        </div>
    );
};

export default Greeting;
