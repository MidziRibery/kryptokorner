import React, { useState, useEffect }  from 'react';
import '../../App.css';
import { useParams } from "react-router-dom";
import axios from 'axios';

const coindeskURL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD";

function Bitcoin() {

    const [currData, setCurrData] = useState();
    const [currDate, setCurrDate] =useState();
    const params = useParams() // basically this looks for variable that we defined in app.js <Route path="/price/:curr">
    console.log('here2')
    console.log(params)
    const currency = params.curr

    const makeApiCall = async () => {
        const res = await fetch (`${coindeskURL}${currency}`); //here we are fetching api data and waiting for a response (res), It basically comes back as a promise in a form of a JSON response.
        console.log(res)
        const json = await res.json() // here we accessing the json file of API
        // console.log(json.bpi.SGD.rate) // this structure will be the same as "https://api.coindesk.com/v1/bpi/currentprice/". So choose our data.
        // here we access the object.object.object.key
        console.log(json.bpi[currency].rate) // this will diplay whatever currency that is choosen. we use [] here 
        setCurrData(json.bpi[currency].rate)
    }
    // On first Render/Mount Only - render makeApiCall once.
    useEffect(()=>{
        makeApiCall();
    }, []);

  return (
    <>
        <h1 className='crypto'>Bitcoin</h1>
        <h2 className="price">Current Bitcoin price as of {currDate} {currData} </h2>
        <div></div>
    </>

  )
}


export default Bitcoin;