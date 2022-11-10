import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import BAYC from './pages/BAYC';


function NFTCards(props) {

  const cardsOnClick = () => {
    const card = {};
  }

  return (
    <div className='cards' >
        <h1>Types of NFTS</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__item'>
                    <div onClick={()=>{props.cardsOnClick(<BAYC/>)}}>
                    <CardItem
                    // on click, i want it to set DisplayCard.js to a page which
                    //displays more information about the card
                    src='https://img.seadn.io/files/7e10d61f5202d9c7cd7634eb495d31ff.png?fit=max&w=1000'
                    text='Bored Ape Yatch Club (BAYC)'
                    label='BAYC'
                    path={cardsOnClick} 
                    />
                    </div>
                    <div onClick={()=>{props.cardsOnClick('Dead PXLZ')}}>
                    <CardItem 
                    src='https://images.jpgstoreapis.com/QmP1quFyKADvAm31ntMCpNYN5fUbpKg1FK7XGRSXtB5jNi600x'
                    text='The first interactive NFT, exclusive on the Cardano Chain.'
                    label='Dead PXLZ'
                    path={cardsOnClick} 
                    />
                    </div>
                    <div onClick={()=>{props.cardsOnClick('SAND LAND')}}>
                    <CardItem 
                    src='https://i.seadn.io/gae/IApNrbuWTJ1H0ll346fecNEMbqGBVIk6W0xNsArJslPJfaHDHeQlZCXMoaHQ0FSGHDYTqKzxmDbVC4wYI8uGy54jA0XBKrvtEskeJuo?auto=format&w=1000'
                    text='Welcome to the Metaverse! Where everyone can afford a plot of land!'
                    label='SAND LAND'
                    path={cardsOnClick} 
                    />
                    </div>
                    <div onClick={()=>{props.cardsOnClick('JRNY Club')}}>
                    <CardItem 
                    src='https://img.seadn.io/files/2f5b8c9a38658fe6be20849fdc9940a9.jpg?fit=max&h=1200&w=1200&auto=format'
                    text='An NFT for members only, for exclusive events'
                    label='JRNY Club'
                    path={cardsOnClick} 
                    />
                    </div>
                    <div onClick={()=>{props.cardsOnClick('ClayNation')}}>
                    <CardItem 
                    src='https://ipfs.poolpm.nftcdn.io/ipfs/QmdJvE44WMH8mdavKGZZfDungYFY3y8vvwbyHRHaixEMcv?ts=1667433600&exp=1209600&tk=boYNHwGwKJpl8-J4HpWqlrSgIGsn2Ywjol1vS8N9Wq8'
                    text='When Snoop Dogg and Good Charlotte combine'
                    label='Clay Nation'
                    path={cardsOnClick} 
                    />
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default NFTCards;