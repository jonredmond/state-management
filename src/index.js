import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

class App extends React.Component {
  render() {
    return <div />;
  }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);
