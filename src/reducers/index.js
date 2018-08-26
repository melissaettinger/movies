import { REQUEST_MOVIES, RECEIVE_MOVIES } from "../actions/index.js"

const initialState = {
  loading: false,
  movies: []
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return Object.assign({}, state, {loading: true})
    case RECEIVE_MOVIES:
      return Object.assign({}, state, {loading: false, movies: action.movies})
    default:
      return state;
  }
}

export default movies;