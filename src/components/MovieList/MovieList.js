import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `movies/${movie.id}`,
              state: { from: location },
            }}
          >
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
