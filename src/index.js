import 'babel-polyfill';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { input, list } from './reducers';
import { InputForm, List } from './containers';

const store = createStore(
  combineReducers({ input, list }),
  applyMiddleware(thunk)
);

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <InputForm />
        <List />
      </Fragment>
    );
  }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <AppWithHot />
  </Provider>,
  mountNode
);
