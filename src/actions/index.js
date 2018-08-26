export const REQUEST_MOVIES = 'REQUEST_MOVIES'
export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'

export const getMovies = movies => ({ 
  type: REQUEST_MOVIES, 
  movies
});

function receiveMovies(json) {
  return {
    type: RECEIVE_MOVIES,
    movies: json.movies
  }
}

function fetchMovies() {
  return dispatch => {
    dispatch(getMovies())
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then(response => response.json())
      .then(json => {
        dispatch(receiveMovies(json))
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

function shouldFetchMovies(state) {
  const { loading, movies } = state
  if (!movies.length) {
    return true
  } else if (loading) {
    return false
  }
}

export function fetchMoviesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchMovies(getState())) {
      return dispatch(fetchMovies())
    }
  }
}