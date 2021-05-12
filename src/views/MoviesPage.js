import { fetchSearchMovies } from '../services/movieApi.js';
import { Component } from 'react';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import queryString from 'query-string';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
    error: null,
  };

  async componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);
    if (queryParams.query) {
      this.setState({ searchQuery: queryParams.query });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovies();
    }
  }
  fetchMovies = async () => {
    const { searchQuery } = this.state;
    try {
      const searchMovies = await fetchSearchMovies(searchQuery);
      if (searchMovies.length === 0)
        throw new Error('No movies were found for your request. Try again');
      this.setState({ movies: searchMovies });
      this.props.history.push({ search: `?query=${searchQuery}` });
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  handleChangeQuery = query => {
    this.setState({
      movies: [],
      searchQuery: query,
      error: null,
    });
  };

  render() {
    const { movies, error } = this.state;
    return (
      <main className="MainSearchMovies">
        <SearchBar onChangeQuery={this.handleChangeQuery} />
        {error && <h3 className="Error">{error}</h3>}
        {movies.length > 0 && <MovieList movies={movies} />}
      </main>
    );
  }
}

export default MoviesPage;
