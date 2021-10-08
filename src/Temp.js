import React, { Component } from 'react'

export default class Apple extends Component {
  render() {
    return (
      <div>
        <Header username="Big Nate" />
        <Greeting />
      </div>
    )
  }
}

class Header extends Component {
  render(props) {
    return (
      <header><p>Welcome, {this.props.username}!</p></header>
    )
  }
}

class Greeting extends Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours > 1) {
      timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
    } else {
      timeOfDay = "night"
    }return (
      <h1>Good {timeOfDay} to you, sir or madam!</h1>
    )
    }
  }
