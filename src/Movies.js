import React, {Component} from 'react';

class Movies extends Component {
  constructor() {
    super();
    this.state = { movies: [] };
  }

  componentDidMount() {
    fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({movies: responseJson.movies});
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render () {
    const MovieList = ({movies}) => movies.map(movie =><h2 key={movie.id}>{movie.title} </h2>)

    return (
      <div>
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default Movies; 