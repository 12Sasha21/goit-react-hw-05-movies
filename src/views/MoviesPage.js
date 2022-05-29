import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link, useRouteMatch } from 'react-router-dom';
import * as api from '../services/movies-api';

export default function MovieView() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const { url } = useRouteMatch();

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
    api.fetchFilmsByQuery(query).then(setMovies);
    history.push({ ...history.location, search: `?query=${query}` });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} type="text" value={query} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${url}/${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
