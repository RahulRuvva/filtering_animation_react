import './App.css';
import {React, useEffect, useState} from 'react'
import Movie from './components/Movie';


function App() {

  const[popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=916d7540f0930e5b5672d21346277302&language=en-US&page=1');
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);

  }
  return (
    <div className="App"> 
    <h1>LORD JESUS help me out!! </h1>
    <div className='popular-movies'>
      {popular.map((movie) => {
          return  <Movie key={movie.id} movie={movie}/>

      })}
    </div>
    </div>
  );
}

export default App;
