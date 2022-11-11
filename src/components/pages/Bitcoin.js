import React, { useState, useEffect }  from 'react';
import '../../App.css';

//define the URL
const apiURL = 'https://corsanywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD'

function Bitcoin() {

    const [currPrice, setCurrPrice] = useState('');


    // make function to call the API
    const makeApiCall = async () => {
    const res = await fetch(`${apiURL}`, {
      headers: {
    'X-CMC_PRO_API_KEY': `${process.env.REACT_APP_CMC_API}`,
    } 
  })

       console.log('here')
       console.log(res);
       const json = await res.json() // to get the object in API
       console.log('this is the data')
       console.log(json.data) // here we get the json file
       console.log('this is my attempt to get the price')
       console.log(json.data[0].quote.USD.price)
       let oriPrice = json.data[0].quote.USD.price
       let price = parseFloat(oriPrice.toFixed(2));
       setCurrPrice(price); // use state to set the currPrice
    }

    useEffect( ()=>{
        //this is where we run the main function.
        makeApiCall();
    }, []) // render it once

  return (
    <div>
        <img src='https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/pexels-pixabay-315788-scaled.jpg'/>
        <h1>Bitcoin</h1>
        <h1>Current Price: ${currPrice}</h1>
    </div>
  )
}


export default Bitcoin;