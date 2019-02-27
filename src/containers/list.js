import React, { Fragment } from 'react';

import { addItem, changeInput } from '../actions';
import { Button, Counter } from '../components';
import { connect } from 'react-redux';

const List = ({ list }) => (
  <Fragment>
    {list.map((item, index) => (
      <p key={index}>{item}</p>
    ))}
  </Fragment>
);

const mapStateToProps = ({ list }) => ({ list });
const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
