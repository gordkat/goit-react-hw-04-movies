import { Component } from 'react';

class SearchBar extends Component {
  state = {
    search: '',
  };

  handleChange = event => {
    this.setState({ search: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onChangeQuery(this.state.search);

    this.setState({ search: '' });
  };

  render() {
    const { search } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search movies"
          value={search}
          onChange={this.handleChange}
        ></input>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
