import React, { Component } from 'react'

// export default class Apple extends Component {
//   constructor() {
//     super()
//     this.state = {
//       name: "Big Nate",
//       age: "43"
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <h3>{this.state.age} years old.</h3>
//       </div>
//     )
//   }
// }



export default class Apple extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
  }
}
  render( ){
    let wordDisplay
    if (this.state.isLoggedIn === true) {
      wordDisplay = "in"
    } else {
      wordDisplay = "out"
    }
    return (
      <div>
          <h1>You are currently logged {wordDisplay}.</h1>
          
      </div>
    ) 
  }     
}