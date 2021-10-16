import React, { Component } from 'react'

export default class Apple extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      faveBand: ""
      
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  render() {
   
    return (
      <form>
        <input 
          type="text" 
          placeholder="First Name" 
          name="firstName" 
          value={this.state.firstName} 
          onChange={this.handleChange} 
        />
        <br />
        <input type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
        <h1>{this.state.firstName} {this.state.lastName}</h1>        
   
        <textarea onChange={this.handleChange} value="Let's go Brandon!" />
        <br />
         <label>
            <input 
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          /> Friendly?
        </label>
        <br />
         <label>
            <input 
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          /> Male
        </label>
        <label>
            <input 
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          /> Female
        </label>
        <br />
        <br />

        <label>Favorite Band: </label>
        <select 
          onChange={this.handleChange}
          name="favBand"
          value={this.state.favBand}
        >
            <option value="AC/DC">AC/DC</option>
            <option value="Avenged Sevenfold">Avenged Sevenfold</option>
            <option value="Papa Roach">Papa Roach</option>
            <option value="Volbeat">Volbeat</option>
            <option value="Slipknot">Slipknot</option>
            <option value="Pet Shop Boys">Pet Shop Boys</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
        <br />

        <h2>You are a {this.state.gender}.</h2>
        <h2>You're favorite band is:  {this.state.favBand}</h2>

      </form>
    )
  }
}


