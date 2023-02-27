import React from 'react';
import {useEffect, useState} from 'react';
import SearchIcon from './search.svg';
import './App.css';
import MovieCard from './MovieCard.jsx';



// ca459255

const movie = {
        "Title": "Spiderman and Grandma",
        "Year": "2009",
        "imdbID": "tt1433184",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg"
}

const API_URL = 'http://www.omdbapi.com/?apikey=ca459255';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search)
    }
    useEffect(() => {
        searchMovies("Spiderman");
    }, []);
    return (
        <div className = "app">
            <h1>Fabrication & Welding</h1>

            <div className = "search"> 
            <input
                placeholder = "Search PO Number"
                value ={searchTerm}
                onChange={(e) => setsearchTerm(e.target.value)}
            />
            
            <img
            src ={SearchIcon}
            alt = "search"
            onClick={() => {}}
            />
            </div>

            {
                movies?.length > 0
                ? ( 
                    <div className = "container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                    </div>
                ) : (
                    <div className ="empty"> 
                        <h2>No Movies found</h2>
                    </div>
                )

            }

            <div className = "container">
            <MovieCard movie = {movie} />
            </div>

        </div>
      

    );
}

export default App;
