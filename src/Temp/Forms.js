import React, { Component } from 'react'
import FormComponent from './FormComonent'

export default class Apple extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      destination: "",
      gender: "",
      dairy: false,
      peanuts: false,
      gluten: false     
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
    return (
      <FormComponent
        handleChange={this.handleChange}
        data = {this.state}
      />
    )    
  }
}