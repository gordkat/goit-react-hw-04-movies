import { fetchTrendingMovies } from '../services/movieApi.js';
import { Component } from 'react';
import MovieList from '../components/MovieList';

class HomePage extends Component {
  state = {
    movies: [],
  };
  async componentDidMount() {
    const trendingMovies = await fetchTrendingMovies();
    this.setState({ movies: trendingMovies });
    console.log(trendingMovies);
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        <MovieList movies={movies} />
      </>
    );
  }
}

export default HomePage;
