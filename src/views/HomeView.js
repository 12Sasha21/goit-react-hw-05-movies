import { useState, useEffect } from 'react';
import * as api from '../services/movies-api';
import PageHeading from '../components/PageHeading/PageHeading';
import MovieList from '../components/MovieList/MovieList';

export default function HomeView() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    api.fetchTrends().then(setMovies);
  }, []);

  return (
    <div>
      <PageHeading text="Trending today" />
      {movies && <MovieList movies={movies} />}
    </div>
  );
}
