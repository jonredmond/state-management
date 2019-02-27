import React from 'react';

import { addItem, changeInput } from '../actions';
import { Button, Counter } from '../components';
import { connect } from 'react-redux';

class InputForm extends React.Component {
  handleOnChange = ({ target: { value } }) => {
    const { onInputChange } = this.props;

    onInputChange(value);
  };

  handleSubmit = e => {
    e.preventDefault();
    const { input, onSubmit } = this.props;

    onSubmit(input);
  };

  render = () => {
    const { input } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Input: {input}
          <br />
          <input type="text" onChange={this.handleOnChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  };
}

const mapStateToProps = ({ input }) => ({ input });
const mapDispatchToProps = dispatch => ({
  onInputChange: value => dispatch(changeInput(value)),
  onSubmit: value => dispatch(addItem(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputForm);
