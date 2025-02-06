import './Index.css';
import Header from '../Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import CardDetails from '../Card/CardDetails';
import Items from '../Items';
import { IShowSearch } from '../../interfaces/ShowSearch';
import { UserMessage } from '../UserMessage';

const App = () => {
  const [movieList, setMovieList] = useState<IShowSearch[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);  
  const baseApiURL = 'https://api.tvmaze.com/';

  const getMovies = async (search:string='game of') => {
    try {
      const response = await axios.get(`${baseApiURL}search/shows?q=${search}`);
      setMovieList(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError('Ocurrio un error al intentar obtener los resultados de la busqueda');
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);


  const routesContent =
    <Routes>
      <Route path='movie/:id/details' element={<CardDetails />} />
      <Route path='/' element={<Items movieList={movieList} />} />
    </Routes>;

  return (
    <>
      <Header searchRequest={getMovies} />      
      <main>
        <h1 className='main-title'>¿Que ver en TV?</h1>
        {error ? <UserMessage text={error} /> : isLoading ? <UserMessage text='Cargando Datos'/> : routesContent }
      </main>
    </>
  );
}

export default App;
