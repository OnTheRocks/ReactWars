import React, { Component } from 'react'

export default class Apple extends Component {
  constructor() {
    super()
    this.state = {
      name: "Big Nate",
      age: "43"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h3>{this.state.age} years old.</h3>
      </div>
    )
  }
}

