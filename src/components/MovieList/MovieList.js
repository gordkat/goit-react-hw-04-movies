import { NavLink } from 'react-router-dom';

const MovieList = ({ movies }) => (
  <ul>
    {movies.map(({ id, title }) => (
      <li key={id}>
        <NavLink to={`/movies/${id}`}>{title}</NavLink>
      </li>
    ))}
  </ul>
);

export default MovieList;
