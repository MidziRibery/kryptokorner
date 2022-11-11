import React from 'react'
import '../App.css';
import Button from './Button';
import './HeroSection.css';
import Video from '../videos/btcHeroSection.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src={Video} autoPlay loop muted/>
        <h1>KRYPTO KORNER</h1>
        <p>Your One-Stop Krypto Knowledge</p>
    </div>
    
  )
}

export default HeroSection