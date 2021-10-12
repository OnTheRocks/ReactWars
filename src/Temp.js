import React, { Component } from 'react'

export default class Apple extends Component {
  constructor() {
    super()
    this.state ={}
  }

componentDidMount() {
        // GET the data I need to correctly display
}

shouldComponentUpdate() {
        // return true if want it to update
        // return false if not
}

componentWillUnmount() {
        // teardown or cleanup your code before your component disappears
        // (E.g. remove event listeners)
}

  render() {
    return (
      <div>
        Code goes here.
      </div>
    )
  }
}


// https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
// https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes