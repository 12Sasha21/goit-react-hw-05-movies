import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { toast } from 'react-toastify';
import * as api from '../services/movies-api';
import MovieList from '../components/MovieList/MovieList';

export default function MovieView() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const history = useHistory();
  const location = useLocation();

  const serchQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (serchQuery) {
      api.fetchFilmsByQuery(serchQuery).then(setMovies);
      setQuery(serchQuery);
    }
  }, [serchQuery]);

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return toast.error('Введіть запит');
    }
    api.fetchFilmsByQuery(query).then(setMovies);
    history.push({ ...history.location, search: `?query=${query}` });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" value={query} />
        <button type="submit">Search</button>
      </form>
      {movies && <MovieList movies={movies} />}
    </>
  );
}
