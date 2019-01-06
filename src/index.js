import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import { Button, Counter } from './components';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increaseCount = () => {
    const { count } = this.state;

    this.setState({
      count: count + 1
    });
  };

  render() {
    const { count } = this.state;

    return (
      <Fragment>
        <Counter count={count} />
        <Button onClick={this.increaseCount} />
      </Fragment>
    );
  }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);
