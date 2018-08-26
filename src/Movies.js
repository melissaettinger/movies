import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMoviesIfNeeded } from './actions/index'

class Movies extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.dispatch(fetchMoviesIfNeeded())
  }

  render () {
    const {loading, movies} = this.props;

    return (
      <div>
        <button className="Button" onClick={this.handleClick}>Click me!</button>
        { loading && movies.length === 0 ? 
          <div>Loading...</div> : 
          movies.map(movie =><h2 key={movie.id}>{movie.title} </h2>)
        }
      </div>
    );
  }
}


const mapStateToProps = state => {
  const {
    movies,
    loading
  } = state || {
    loading: true,
    movies: []
  }

  return {
    movies,
    loading
  }
}

export default connect(mapStateToProps)(Movies); 