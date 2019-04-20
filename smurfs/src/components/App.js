import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import { fetchSmurfs } from '../actions/index';
import { connect } from 'react-redux'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own.
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        {this.props.error ? <h2>Error</h2> : null }
        {this.props.fetching
          ? <h2>Fetching...</h2>
          : <Smurfs smurfs={this.props.smurfs} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetching: state.fetching
  }
}

export default connect(mapStateToProps, { fetchSmurfs })(App)
