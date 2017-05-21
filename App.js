import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store'
import Router from './router';

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router />
      </Provider>
    );
  }
}
