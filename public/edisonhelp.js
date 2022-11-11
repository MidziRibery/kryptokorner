import React, {useState} from 'react'
import '../../App.css'
import Cards from '../Cards';
import HeroSection from "../HeroSection.js";

function Home () {

    const [selectedCard, setSelectedCard] = useState({});

    const handleCardOnClick = (card) => {
        setSelectedCard(card);
    }

    return(
        <div> 
            <HeroSection />
            <Cards cardOnClick={handleCardOnClick}/>
            <DisplayCard card={selectedCard}/>
        </div>

    )
}

export default Home;