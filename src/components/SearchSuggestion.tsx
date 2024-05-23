import React from 'react';

interface SuggestionBoxProps {
  searchText: string;
  iconSrc: string;
  iconAlt: string;
}

const SuggestionBox: React.FC<SuggestionBoxProps> = ({ searchText, iconSrc, iconAlt }) => {
  const styles = {
    margin: {
      marginRight: '1vw',
    }
  };

  return (
    <div className='font-Satoshi font-normal bg-[#292929] w-56 h-36 mt-10 rounded-lg relative' style={styles.margin}>
      <div className='p-4'>{searchText}</div>
      <div className="p-2.5 w-[fit-content] bg-[#170B1C] rounded-full absolute bottom-0 right-0 m-2">
        <img className="w-4 h-4" src={iconSrc} alt={iconAlt} />
      </div>
    </div>
  );
};

export default SuggestionBox;
