import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import { Button, Counter } from './components';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Counter count={0} />
        <Button onCLick={() => {}} />
      </Fragment>
    );
  }
}

const AppWithHot = hot(module)(App);

var mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot />, mountNode);
