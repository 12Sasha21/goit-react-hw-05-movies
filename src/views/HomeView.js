import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as api from '../services/movies-api';
import PageHeading from '../components/PageHeading/PageHeading';

export default function HomeView() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    api.fetchTrends().then(setMovies);
  }, []);

  return (
    <div>
      <PageHeading text="Trending today" />
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${url}movies/${movie.id}`}>
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
