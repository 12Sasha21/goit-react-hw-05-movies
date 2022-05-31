import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link, useRouteMatch } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as api from '../services/movies-api';

export default function MovieView() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  // console.log(location);

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
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `${url}/${movie.id}`,
                state: { from: location },
              }}
            >
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
