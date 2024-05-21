// pages/index.js
import React from 'react';
import Greeting from '../components/Greeting'
import SuggestionBox from '../components/SearchSuggestion'

const SearchSuggestions = [
    {
        searchText: "Trending smart watches 2024",
        iconSrc: "/assets/suggetion-box-star.svg",
        iconAlt: "Shop Star"
    },
    {
        searchText: "Portable vacuum cleaner",
        iconSrc: "/assets/Bulb.svg",
        iconAlt: "Shop Star"
    },
    {
        searchText: "Kurti sets under 600",
        iconSrc: "/assets/Shirt.svg",
        iconAlt: "Shop Star"
    },
];

const Home = () => {
    return (
        <div className='body-margin'>
            <Greeting name="Yasar"/>
            <div className='scroll-container'>
                {SearchSuggestions.map((suggestion, index) => (
                    <div key={index} className='suggestion-box'>
                        <SuggestionBox
                            searchText={suggestion.searchText}
                            iconSrc={suggestion.iconSrc}
                            iconAlt={suggestion.iconAlt}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
