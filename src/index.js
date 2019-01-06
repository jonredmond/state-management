import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from './reducers';
import { IncreaseCount } from './containers';

const store = createStore(combineReducers(reducers));

console.log(store.getState());

class App extends React.Component {
  render() {
    return (
      <div>
        <IncreaseCount />
      </div>
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
