import React from 'react'
import '../../App.css'
import Cards from '../Cards';
import HeroSection from "../HeroSection.js";

function Home () {
    return(
        <div> 
            <HeroSection />
            <Cards/>
        </div>

    )
}

export default Home;