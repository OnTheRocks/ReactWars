import React, { Component } from 'react'

export default class Apple extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }
 
  render() {
    let btnTxt = this.state.isLoggedIn ? "Log Out" : "Log In"
    let disTxt = this.state.isLoggedIn ? "Logged in" : "Logged Out"
    return (
      <div>
        <h1>{disTxt}</h1>
        <button onClick={this.handleClick}>{btnTxt}</button>
      </div>
    )
  }
}