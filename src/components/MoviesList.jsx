import React, { useState } from 'react';
import './movieListStyling.css'

function MoviesList(){
    const [ movies, setMovies ] = useState([{name: 'Harry Potter', descript: 'wizard', view: true},{name: 'Dune', descript: 'tarkonen', view: false},{name: 'Shrek', descript: 'donkeh', view: false}]); 
    const [ currentMovies, setCurrentMovies ] = useState([0,1,2])

    const removeMovie = (x) => {
        setCurrentMovies(currentMovies.filter(movie => movie !== x))
        console.log(currentMovies)
}

    const viewDetails = (movie) => {
        let xyz = movies
        xyz[movie]["view"] = !xyz[movie]["view"] 
        console.log(xyz)
        setMovies(xyz)
        console.log(movies)

    }

    return (
        <div>
            <ul>
                {currentMovies.map( movie => (
                    <li key={movie}>{movies[movie]["name"]} 
                        <button onClick={() => removeMovie(movie)}>Remove</button>
                        <br></br>
                        <button onClick={() => viewDetails(movie)}>View Details</button>
                        {movies[movie]["view"] && <p>{movies[movie]["descript"]}</p>}
                    </li>

                ))}
            </ul>
        </div>
    );
};

export default MoviesList;

