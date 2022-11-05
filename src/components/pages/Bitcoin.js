import React, { useState, useEffect }  from 'react';
import '../../App.css';
import { useParams } from "react-router-dom";

const coindeskURL = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD";

function Bitcoin() {

    const [currData, setCurrData] = useState();
    const params = useParams() // basically this looks for variable that we defined in app.js <Route path="/price/:curr">
    console.log('here2')
    console.log(params)
    const currency = params.curr

    const makeApiCall = async () => {
        const res = await fetch (`${coindeskURL}${currency}`); //here we are fetching api data 
        console.log(res)
        const json = await res.json() // here we accessing the json file of API
        // console.log(json.bpi.SGD.rate) // this structure will be the same as "https://api.coindesk.com/v1/bpi/currentprice/". So choose our data.
        // here we access the object.object.object.key
        console.log(json.bpi[currency].rate) // this will diplay whatever currency that is choosen. we use [] here 
        setCurrData(json.bpi[currency].rate)
    }
    useEffect(()=>{
        makeApiCall();
    }, []);

  return (
    <>
        <h1 className='bitcoin'>Bitcoin</h1>
        <h1>Bitcoin price in {currency} </h1>
        <div className="price">{currData}</div>
    </>

  )
}


export default Bitcoin;