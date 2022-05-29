import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useRouteMatch } from 'react-router-dom';
import * as api from '../services/movies-api';
import defaultImage from '../Images/defaultImage.jpg';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    api.fetchCastInfo(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast && (
        <ul>
          {cast.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                className="actor-img"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : defaultImage
                }
                alt={name}
              />

              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
