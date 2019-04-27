import React from 'react';

const EditForm = props => {
  return (
    <form>
      <input
        type='text'
        placeholder={props.smurf.name} />
      <input
        type='text'
        placeholder={props.smurf.age} />
      <input
        type='text'
        placeholder={props.smurf.height} />
    </form>
  )
}

export default EditForm
