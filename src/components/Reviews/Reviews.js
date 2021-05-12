import { Component } from 'react';
import { fetchMovieReviews } from '../../services/movieApi';
class Reviews extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const id = this.props.match.params.movieId;
    try {
      const movieReviews = await fetchMovieReviews(id);
      this.setState({ reviews: movieReviews.results });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }
  render() {
    const { reviews, error } = this.state;
    return (
      <div>
        {error && <h3 className="Error">{error}</h3>}
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(({ author, content, id }) => (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </div>
    );
  }
}
export default Reviews;
