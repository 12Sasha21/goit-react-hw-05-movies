import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import 'react-toastify/dist/ReactToastify.css';
// import HomeView from './views/HomeView';
// import MovieDetailsPage from './views/MovieDetailsPage';
// import NotFoundView from './views/NotFoundView';
// import MoviesPage from './views/MoviesPage';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "1" */)
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage' /* webpackChunkName: "2" */)
);
const NotFoundView = lazy(() => import('./views/NotFoundView'));
const MoviesPage = lazy(() => import('./views/MoviesPage'));

export default function App() {
  return (
    <Container>
      <AppBar />
      <ToastContainer />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
