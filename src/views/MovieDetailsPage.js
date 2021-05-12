import { Component } from 'react';
import React, { lazy, Suspense } from 'react';
import { fetchMovieDetails } from '../services/movieApi';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';
import MovieCard from '../components/MovieCard';

const Cast = lazy(() =>
  import('../components/Cast' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('../components/Reviews' /* webpackChunkName: "reviews" */),
);

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    release_date: null,
    title: null,
    vote_average: null,
    overview: null,
    genres: null,
    error: null,
  };

  async componentDidMount() {
    const id = this.props.match.params.movieId;
    try {
      const movieDetails = await fetchMovieDetails(id);
      const {
        poster_path,
        release_date,
        title,
        vote_average,
        overview,
        genres,
      } = movieDetails;
      this.setState({
        poster_path,
        release_date,
        title,
        vote_average,
        overview,
        genres,
      });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      poster_path,
      release_date,
      title,
      vote_average,
      overview,
      genres,
      error,
    } = this.state;
    const { match } = this.props;
    return (
      <main className="MainDetailsPage">
        <button type="button" onClick={this.handleGoBack}>
          Go back
        </button>
        {error && <h3 className="Error">{error}</h3>}
        <MovieCard
          poster_path={poster_path}
          release_date={release_date}
          title={title}
          vote_average={vote_average}
          overview={overview}
          genres={genres}
        />
        <Suspense fallback={<h1>loading...</h1>}>
          <Switch>
            <Route path={`${match.path}/cast`} component={Cast} />
            <Route path={`${match.path}/reviews`} component={Reviews} />
          </Switch>
        </Suspense>
      </main>
    );
  }
}

export default MovieDetailsPage;
