import React, { useState, useEffect }  from 'react';
import '../../App.css';




function Bitcoin() {
    const [cryptoPrice, setCryptoPrice] = useState("");

    useEffect(() => {
        const cryptoUrl = `https://www.omdbapi.com/?t=${cryptoPrice}&apikey=98e3fb1f`;
      
        const makeApiCall = () => {
          fetch(cryptoUrl)
            .then((res) => res.json())
            .then((data) => {
              console.log("movieData", data);
             
            });
        };
        makeApiCall();
      }, []);
  return (
    <>
        <h1 className='bitcoin'>Bitcoin</h1>

    </>

  )
}

export default Bitcoin;