import React, {Component} from 'react';

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      movies: []
    };
    this.fetchMovies = this.fetchMovies.bind(this);
  }

  fetchMovies() {
    this.setState({ loading: true });
    fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({ loading: false, movies: responseJson.movies});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render () {
    const MovieList = ({movies}) => movies.map(movie =><h2 key={movie.id}>{movie.title} </h2>)

    return (
      <div>
        <button className="Button" onClick={this.fetchMovies}>Click me!</button>
        { this.state.loading ? <div>Loading...</div> : <MovieList movies={this.state.movies} /> }
      </div>
    );
  }
}

export default Movies; 