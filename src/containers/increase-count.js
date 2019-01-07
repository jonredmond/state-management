import React, { Fragment } from 'react';

import { increaseCount } from '../actions';
import { Button, Counter } from '../components';
import { connect } from 'react-redux';

const IncreaseCount = ({ count, onClick }) => {
  return (
    <Fragment>
      <Counter count={count} />
      <Button onClick={onClick} />
    </Fragment>
  );
};

const mapStateToProps = state => ({ count: state });
const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(increaseCount())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncreaseCount);
