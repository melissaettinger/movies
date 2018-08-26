import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movies from './Movies';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import movies from './reducers';

const store = createStore(movies, applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Movies</h1>
        </header>
        <Provider store={store}>
          <Movies />
        </Provider>
      </div>
    );
  }
}

export default App;
