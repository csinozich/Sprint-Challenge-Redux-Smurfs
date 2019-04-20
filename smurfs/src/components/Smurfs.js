import React from 'react';

// const Smurfs = props => {
//   return (
//     <div>
//       <div>
//         {this.props.smurfs.map(smurf => {
//           return (
//             <div>
//               <p>name: {smurf.name}</p>
//               <p>age: {smurf.age}</p>
//               <p>height: {smurf.height}</p>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

class Smurfs extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.smurfs.map(smurf => {
            return (
              <div>
                <p>name: {smurf.name}</p>
                <p>age: {smurf.age}</p>
                <p>height: {smurf.height}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Smurfs
