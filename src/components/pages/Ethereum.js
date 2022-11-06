
import React, {useEffect, useState} from 'react'

//define the URL
const apiURL = 'https://api.chucknorris.io/jokes/random'

function Ethereum() {

    const [currJoke, setCurrJoke] = useState('');


    // make function to call the API
    const makeApiCall = async () => {
       const res = await fetch(`${apiURL}`) // we get a promise in the form of JSON response 
       console.log('here')
       console.log(res);
       const json = await res.json() // to get the object in API
       console.log(json.value) // here we get the joke
       setCurrJoke(json.value); // use state to set the currJoke
    }

    useEffect( ()=>{
        //this is where we run the main function.
        makeApiCall();
    }, []) // render it once

  return (
    <div>
        <h1>Ethereum</h1>
        <h2>{currJoke}</h2>
    </div>
  )
}

export default Ethereum