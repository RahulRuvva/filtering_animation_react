import './App.css';
import {React, useEffect, useState} from 'react'
import Movie from './components/Movie';
import Filter from './components/Filter';

function App() {

  const[popular, setPopular] = useState([]);
  const[filtered, setFiltered] = useState([]);
  const[activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=916d7540f0930e5b5672d21346277302&language=en-US&page=1');
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);

  }
  return (
    <div className="App"> 
    <h1>LORD JESUS help me out!! </h1>
    <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
    <div className='popular-movies'>
      {filtered.map((movie) => {
          return  <Movie key={movie.id} movie={movie}/>

      })}
    </div>
    </div>
  );
}

export default App;
