import React from 'react';

const Selected = props => {
  return (
    <div>
      <h4>{props.selected.name}</h4>
      <span onClick={() => props.handleView({})}>View</span>
      <p>{props.selected.age}</p>
      <p>{props.selected.height}</p>
      <button onClick={() => props.handleDelete()}>Delete</button>
      <button onClick={() => props.toggleEdit()}>Update</button>
    </div>
  )
}

export default Selected
