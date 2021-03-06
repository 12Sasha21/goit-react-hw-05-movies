import { useState, useEffect, lazy, Suspense } from 'react';
import {
  NavLink,
  useRouteMatch,
  useParams,
  Switch,
  useLocation,
  Route,
  // useHistory,
} from 'react-router-dom';
import * as api from '../services/movies-api';
import ButtonGoBack from '../components/ButtonGoBack/ButtonGoBack';

const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  const location = useLocation();
  // const history = useHistory();

  // console.log(location);

  useEffect(() => {
    api.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <ButtonGoBack />
      {movie && (
        <div className="movieCard">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : 'defaultImage'
            }
            alt={movie.tagline}
          />
          <div className="movieCard__dscr">
            <h2>{movie.title}</h2>
            <p>User score: {Math.round(movie.vote_average * 10)}%</p>
            <b>Overview</b>
            <p>{movie.overview}</p>
            <b>Genres</b>
            <p>
              {movie.genres.map(({ name, id }) => (
                <span key={id}>{name} </span>
              ))}
            </p>
          </div>
        </div>
      )}
      <hr />
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { ...location.state, id: movieId },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { ...location.state, id: movieId },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <hr />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route exact path={`${path}/cast`}>
            <Cast />
          </Route>
          <Route exact path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
