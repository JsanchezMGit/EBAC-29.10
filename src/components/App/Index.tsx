import './Index.css';
import Header from '../Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import CardDetails from '../Card/CardDetails';
import Items from '../Items';

const App = () => {
  const [movieList, setMovieList] = useState<any[]>([]);
  const baseApiURL = 'https://api.tvmaze.com/';

  const getMovies = async (search:string='a') => {
    try {
      const response = await axios.get(`${baseApiURL}search/shows?q=${search}`);
      setMovieList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <Header searchRequest={getMovies} />      
      <main>
        <h1 className='main-title'>¿Que ver en TV?</h1>
      <Routes>
        <Route path='movie/:id/details' element={<CardDetails />} />
        <Route path='/' element={<Items movieList={movieList} />} />
      </Routes>
      </main>
    </>
  );
}

export default App;
