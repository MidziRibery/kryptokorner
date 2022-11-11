import React, { useState } from 'react'
import '../../App.css';
import Cards from '../Cards';
import DisplayCard from '../DisplayCard';
import NFTCards from '../NFTCards';
import './NFT.css';

function NFT() {

  const [selectedCard, setSelectedCard] = useState ('');

  const handleCardOnClick = (card) => {
    setSelectedCard(card);
  }
  return (
    <>
      <div>
        <img src='https://as2.ftcdn.net/v2/jpg/04/31/41/91/1000_F_431419169_GYVhYc9zOLG0FtcvOBlTeskGowecbHSi.jpg'/>
      </div>
      <div>
        <NFTCards cardsOnClick={handleCardOnClick}/>
          {/* here we pass the 'remote control' aka setSelectedCard function (to
          set the state of selectedCard) down to NFTCards.js. We wrap it in handleeCardOnClick
          function, and send down the function as a prop of cardsOnClick.*/}
          <DisplayCard card={selectedCard}/> 
          {/* this one means to pass the prop cards down
          to DisplayCard.js. But what is card? It is the selected
          card, which is controlled by handleCardOnClick function which
          sets the state of the card using setSelectedCard */}
      </div>
    </>

  )
}

export default NFT   