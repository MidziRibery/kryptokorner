import React, { useState, useEffect }  from 'react';
import '../../App.css';




function Bitcoin() {
    const [movieTitle, setMovieTitle] = useState("star wars");

    useEffect(() => {
        const movieUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=98e3fb1f`;
      
        const makeApiCall = () => {
          fetch(movieUrl)
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