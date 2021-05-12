import { NavLink, withRouter } from 'react-router-dom';
import ProtoTypes from 'prop-types';

const MovieList = ({ movies, location }) => (
  <ul>
    {movies.map(({ id, title }) => (
      <li key={id}>
        <NavLink to={{ pathname: `/movies/${id}`, state: { from: location } }}>
          {title}
        </NavLink>
      </li>
    ))}
  </ul>
);

MovieList.protoTypes = {
  movies: ProtoTypes.arrayOf(
    ProtoTypes.shape({ id: ProtoTypes.number.isRequired }).isRequired,
  ),
};
export default withRouter(MovieList);
