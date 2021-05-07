import { Component } from 'react';
import { fetchMovieCast } from '../../services/movieApi';
class Cast extends Component {
  state = { cast: [] };

  async componentDidMount() {
    const id = this.props.match.params.movieId;
    const movieCast = await fetchMovieCast(id);
    this.setState({ ...movieCast.cast });
    console.log(movieCast.cast);
  }
  render() {
    return <p>cast</p>;
  }
}

export default Cast;
