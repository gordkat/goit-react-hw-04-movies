import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import AppBar from './components/AppBar';

const HomePage = lazy(() =>
  import('./views/HomePage.js' /* webpackChunkName: "home-page" */),
);

const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "movies-page" */),
);

const MovieDetailsPage = lazy(
  () =>
    import(
      './views/MovieDetailsPage'
    ) /* webpackChunkName: "movie-details-page" */,
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>loading...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route path={routes.movies} component={MoviesPage} />
        <Route component={HomePage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
