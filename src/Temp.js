import React, { Component } from 'react'

export default class Apple extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }

componentDidMount() {
  this.setState({loading: true})
  fetch("https://swapi.dev/api/people/2")
    .then(response => response.json())
    .then(data => {
      this.setState({
        loading: false,
        character: data
      })

    })
}

  render() {
    const text = this.state.loading ? "Loading..." : this.state.character.name
    return (
      <div>
        <h1>{text}</h1>
      </div>
    )
  }
}
