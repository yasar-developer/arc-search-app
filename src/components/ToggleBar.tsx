import React, { useContext } from 'react';
import { ActiveIndexContext } from '../context/ActiveIndexContext';

const ToggleBar: React.FC = () => {
  const context = useContext(ActiveIndexContext);

  if (!context) {
    throw new Error('ToggleBar must be used within an ActiveIndexProvider');
  }

  const { activeTab, setActiveTab } = context;

  return (
    <div className="db font-Satoshi flex space-x- bg-gray-900 text-base rounded-md w-fit">
      <button
        className={`tb flex text-xs py-2 px-4 rounded-md text-sm focus:outline-none ${
          activeTab === 'Overview' ? 'bg-white text-black' : 'text-gray-400'
        }`}
        onClick={() => setActiveTab('Overview')}
      >
        Overview
      </button>
      <line className='self-center'></line>
      <style jsx>{`
        line:not(:last-child)::after {
          content: '|';
          color: grey;
        }
      `}</style>
      <button
        className={`tb flex text-xs py-2 px-4 rounded-md focus:outline-none ${
          activeTab === 'Specifications' ? 'bg-white text-black' : 'text-gray-400'
        }`}
        onClick={() => setActiveTab('Specifications')}
      >
        Specifications
      </button>
      <line className='self-center'></line>
      <button
        className={`tb flex text-xs py-2 px-4 rounded-md focus:outline-none ${
          activeTab === 'Reviews' ? 'bg-white text-black' : 'text-gray-400'
        }`}
        onClick={() => setActiveTab('Reviews')}
      >
        Reviews
      </button>
    </div>
  );
};

export default ToggleBar;
