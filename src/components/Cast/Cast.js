import { Component } from 'react';
import { fetchMovieCast } from '../../services/movieApi';
import placeholderAvatar from '../../images/no-foto.png';
class Cast extends Component {
  state = { cast: [], error: null };

  async componentDidMount() {
    const id = this.props.match.params.movieId;
    try {
      const movieCast = await fetchMovieCast(id);
      this.setState({ cast: movieCast.cast });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  render() {
    const { cast, error } = this.state;
    return (
      <>
        {error && <h3 className="Error">{error}</h3>}
        <ul>
          {cast.map(({ id, name, profile_path, character }) => {
            const urlProfileUpdated = profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : placeholderAvatar;
            return (
              <li key={id}>
                <img src={urlProfileUpdated} alt={name} width="100" />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Cast;
