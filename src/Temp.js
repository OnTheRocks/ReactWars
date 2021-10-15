import React, { Component } from 'react'

export default class Apple extends Component {
  constructor() {
    super()
    this.state = {
      firstName: ""
      
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {

    this.setState({
      [event.target.name]: event.target.value 
    })
  }

  render() {
   
    return (
      <form>
        <input type="text" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
       <br />
        <input type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <button type="submit">Submit</button>
      </form>
    )
  }
}
