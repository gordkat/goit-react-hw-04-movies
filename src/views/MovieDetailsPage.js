import { Component } from 'react';
import { fetchMovieDetails } from '../services/movieApi';
import { NavLink, Route } from 'react-router-dom';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    release_date: null,
    title: null,
    vote_average: null,
    overview: null,
    genres: null,
  };

  async componentDidMount() {
    const id = this.props.match.params.movieId;
    const movieDetails = await fetchMovieDetails(id);
    this.setState({ ...movieDetails });
  }

  render() {
    const {
      poster_path,
      release_date,
      title,
      vote_average,
      overview,
      genres,
    } = this.state;
    const { match } = this.props;

    const genresUpdated = genres?.map(genre => genre.name).join(' ') || null;
    const urlImgUpdated = poster_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : null;
    const yearRelease = release_date ? release_date.split('-')[0] : null;
    const userScore = vote_average ? vote_average * 10 : null;

    return (
      <>
        <div>
          <button type="button">Вернуться назад</button>
          <img src={urlImgUpdated} alt={title} />
          <h2>
            {title} ({yearRelease})
          </h2>
          <p>User score {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresUpdated}</p>
        </div>
        <div>
          <p>Additional information</p>
          <ul>
            <li>
              <NavLink to={`${match.url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </div>
        <Route path={`${match.path}/cast`} component={Cast} />
        <Route path={`${match.path}/reviews`} component={Reviews} />
      </>
    );
  }
}

export default MovieDetailsPage;
