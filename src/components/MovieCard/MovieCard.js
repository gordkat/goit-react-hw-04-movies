import { NavLink, withRouter } from 'react-router-dom';
import placeholder from '../../images/no-poster.png';
import PropTypes from 'prop-types';
const MovieCard = ({
  poster_path,
  release_date,
  title,
  vote_average,
  overview,
  genres,
  match,
  location,
}) => {
  const genresUpdated = genres?.map(genre => genre.name).join(' ') || null;
  const urlImgUpdated = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : placeholder;
  const yearRelease = release_date ? release_date.split('-')[0] : null;
  const userScore = vote_average ? vote_average * 10 : null;
  return (
    <>
      <div className="ContainerMovie">
        <img src={urlImgUpdated} alt={title} className="MovieImg" width="200" />
        <div className="DescriptionMovie">
          <h2>
            {title} ({yearRelease})
          </h2>
          <p>User score {userScore}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresUpdated}</p>
        </div>
      </div>
      <div className="ContainerCastReviews">
        <p>Additional information</p>
        <ul>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/cast`,
                state: { from: location.state?.from },
              }}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: `${match.url}/reviews`,
                state: { from: location.state?.from },
              }}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

MovieCard.propTypes = {
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.shape({ name: PropTypes.string })),
};
export default withRouter(MovieCard);
