import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => (
  <nav className="Navigation">
    <NavLink
      exact
      to={routes.home}
      className="Home"
      activeClassName="ActiveLinkNav"
    >
      Home
    </NavLink>
    <NavLink to={routes.movies} activeClassName="ActiveLinkNav">
      Movies
    </NavLink>
  </nav>
);
export default Navigation;
