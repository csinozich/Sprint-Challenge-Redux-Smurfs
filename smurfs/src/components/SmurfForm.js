import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

class SmurfForm extends React.Component {
  state = {
    name: '',
    age: '',
    height: ''
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleAddSmurf = event => {
    const { name, age, height } = this.state;
    this.props.addSmurf({name, age, height});
    this.setState({name: '', age: '', height: ''})
  }

  render() {
    return (
      <form>
        <input
          name='name'
          value={this.state.name}
          type='text'
          placeholder='Name'
          onChange={this.handleInputChange} />
        <input
          name='age'
          value={this.state.age}
          type='text'
          placeholder='Age'
          onChange={this.handleInputChange} />
        <input
          name='height'
          value={this.state.height}
          type='text'
          placeholder='Height'
          onChange={this.handleInputChange} />
        <button
          onClick={() => this.handleAddSmurf()}
          type='button'>Add Smurf</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    adding: state.adding
  }
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm)
