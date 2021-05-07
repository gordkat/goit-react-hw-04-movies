import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => (
  <nav>
    <NavLink exact to={routes.home}>
      Home
    </NavLink>
    <NavLink to={routes.movies}>Movies</NavLink>
  </nav>
);
export default Navigation;
