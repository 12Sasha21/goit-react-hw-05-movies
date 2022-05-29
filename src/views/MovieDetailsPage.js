import { useState, useEffect } from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { useParams, Switch, useLocation } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as api from '../services/movies-api';
import Cast from './Cast';
import Reviews from './Reviews';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    api.fetchMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <button type="button">
        <NavLink to="/">Go back</NavLink>
      </button>

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
            <p>User score: {(movie.vote_average * 100) / 10}%</p>
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
                pathname: url + '/cast',
                state: { ...location.state, id: movieId },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: url + '/reviews',
                state: { ...location.state, id: movieId },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <hr />

      <Switch>
        <Route exact path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route exact path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </Switch>
    </>
  );
}
