import { fetchTrendingMovies } from '../services/movieApi.js';
import { Component } from 'react';
import MovieList from '../components/MovieList';

class HomePage extends Component {
  state = {
    movies: [],
    error: null,
  };
  async componentDidMount() {
    try {
      const trendingMovies = await fetchTrendingMovies();
      this.setState({ movies: trendingMovies });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  render() {
    const { movies, error } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        {error && <h3 className="Error">{error}</h3>}
        <MovieList movies={movies} />
      </>
    );
  }
}

export default HomePage;
