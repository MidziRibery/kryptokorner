import React from 'react'
import CardItem from './CardItem'
import './Cards.css';


function Cards(props) {
  return (
    <div className='cards' >
        <h1>Types of CryptoCurrencies</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__item'>
                    <CardItem 
                    src='https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/pexels-pixabay-315788-scaled.jpg'
                    text='The one that started it all'
                    label='BITCOIN'
                    path='/bitcoin'
                    />
                    <CardItem 
                    src='https://img.freepik.com/premium-vector/ethereum-vector-coin_1078-323.jpg?w=740'
                    text='Bitcoin, but with smart contracts and apps'
                    label='ETHEREUM'
                    path='/ethereum'
                    />
                    <CardItem 
                    src='https://www.shutterstock.com/image-photo/kaufbeuren-germany-august-28-2021-600w-2032719323.jpg'
                    text='Ethereum, but with cheaper fees and eco-friendlier (Proof-of-Stake)'
                    label='CARDANO'
                    path='/cardano'
                    />
                    <CardItem 
                    src='https://www.shutterstock.com/image-illustration/dogecoin-doge-cryptocurrency-face-shiba-600w-1916961890.jpg'
                    text='Richest man in the world is rooting for this coin'
                    label='DOGE'
                    path='/doge'
                    />
                    <CardItem 
                    src='https://www.shutterstock.com/shutterstock/photos/1912107241/display_1500/stock-photo-tether-cryptocurrency-coin-gold-d-rendered-coin-with-tether-symbol-isolated-on-white-background-1912107241.jpg'
                    text='Stable Coin, because life is chaotic enough'
                    label='USDT'
                    path='/usdt'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards