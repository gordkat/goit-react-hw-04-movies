import { Component } from 'react';
import { fetchMovieReviews } from '../../services/movieApi';
class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const id = this.props.match.params.movieId;
    const movieReviews = await fetchMovieReviews(id);
    this.setState({ ...movieReviews.results });
    console.log(movieReviews.results);
  }
  render() {
    return <p>reviews</p>;
  }
}
export default Reviews;
