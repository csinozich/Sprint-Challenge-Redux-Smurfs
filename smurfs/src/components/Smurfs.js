import React from 'react';
import Selected from './Selected';
import { connect } from 'react-redux';
import { deleteSmurf, editSmurf, toggleEdit } from '../actions/index';
import EditForm from './EditForm'

class Smurfs extends React.Component {
  handleDelete = () => {
    const { id } = this.props.selected;
    this.props.deleteSmurf(id);
  }

  handleView = smurf => {
    this.props.editSmurf(smurf);
  }

  toggleEdit = () => {
    this.props.toggleEdit
  }

  render() {
    return (
      <div>
        <div>
          {this.props.smurfs.map(smurf => {
            return (
              <div onClick={() => this.handleView(smurf)} key={smurf.id}>
                <p>name: {smurf.name}</p>
                <p>age: {smurf.age}</p>
                <p>height: {smurf.height}</p>
              </div>
            )
          })}
        </div>
        {Object.keys(this.props.selected).length > 0
          ? (<Selected
                handleView = {this.handleView}
                toggleEdit = {this.toggleEdit}
                handleDelete = {this.handleDelete}
                selected = {this.props.selected} />)
          : null }
          {this.props.viewEdit
            ? <EditForm smurf={this.props.selected} />
            : null}
          {this.props.deleting
            ? <h2>Deleting...</h2>
            : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    deleting: state.smurfReducer.deleting,
    error: state.smurfReducer.error,
    viewEdit: state.singleReducer.viewEdit,
    selected: state.singleReducer.selected
  }
}

export default connect(
  mapStateToProps,
  { deleteSmurf, editSmurf, toggleEdit }
)(Smurfs)
