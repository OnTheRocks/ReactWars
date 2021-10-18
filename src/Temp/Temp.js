import React, { Component } from 'react'

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
        <main>
            <form>
                <input 
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange} 
                /><br />
                <input 
                  type="text"
                  placeholder="Last Name" 
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                /><br />
                <input 
                  type="text"
                  placeholder="Age"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                /><br />
                
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
                <label>
                  <select
                    onChange={this.handleChange}
                    name="destination"
                    value={this.state.destination}
                  >
                    <option value="">-- Please Choose a Destination --</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Las Vegas">Las Vegas</option>
                    <option value="Miami">Miami</option>
                    <option value="Las Angeles">Las Angeles</option>
                    <option value="New York">New York</option>
                    <option value="Nashville">Nashville</option>
                    <option value="New Orleans">New Orleans</option>
                    <option value="Austin">Austin</option>
                  </select>
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    name="dairy"
                    checked={this.state.dairy}
                    onChange={this.handleChange}
                  />Dairy
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="peanuts"
                    checked={this.state.peanuts}
                    onChange={this.handleChange}
                  />Peanuts
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="gluten"
                    checked={this.state.gluten}
                    onChange={this.handleChange}
                  />Gluten
                </label>

                <br />
                
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {this.state.firstName} {this.state.lastName}</p>
            <p>Your age: {this.state.age}</p>
            <p>Your gender: {this.state.gender}</p>
            <p>Your destination: {this.state.destination}</p>
            <p>Your dietary restrictions: </p>
            <p>Dairy: {this.state.dairy ? "Yes" : "No"}</p>
            <p>Peanuts: {this.state.peanuts ? "Yes" : "No"}</p>
            <p>Gluten: {this.state.gluten ? "Yes" : "No"}</p>
            
        </main>
    )
}
}




//   render() {   
//     return (
//       <form>
//         <input 
//           type="text" 
//           placeholder="First Name" 
//           name="firstName" 
//           value={this.state.firstName} 
//           onChange={this.handleChange} 
//         />
//         <br />
//         <input type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
//         <h1>{this.state.firstName} {this.state.lastName}</h1>       
//         <textarea onChange={this.handleChange} value="Let's go Brandon!" />
//         <br />
//          <label>
//             <input 
//             type="checkbox"
//             name="isFriendly"
//             checked={this.state.isFriendly}
//             onChange={this.handleChange}
//           /> Friendly?
//         </label>
//         <br />
//          <label>
//             <input 
//             type="radio"
//             name="gender"
//             value="male"
//             checked={this.state.gender === "male"}
//             onChange={this.handleChange}
//           /> Male
//         </label>
//         <label>
//             <input 
//             type="radio"
//             name="gender"
//             value="female"
//             checked={this.state.gender === "female"}
//             onChange={this.handleChange}
//           /> Female
//         </label>
//         <br />
//         <br />
//         <label>Favorite Band: </label>
//         <select 
//           onChange={this.handleChange}
//           name="favBand"
//           value={this.state.favBand}
//         >
//             <option value="AC/DC">AC/DC</option>
//             <option value="Avenged Sevenfold">Avenged Sevenfold</option>
//             <option value="Papa Roach">Papa Roach</option>
//             <option value="Volbeat">Volbeat</option>
//             <option value="Slipknot">Slipknot</option>
//             <option value="Pet Shop Boys">Pet Shop Boys</option>
//         </select>
//         <br />
//         <br />
//         <button>Submit</button>
//         <br />
//         <h2>You are a {this.state.gender}.</h2>
//         <h2>You're favorite band is:  {this.state.favBand}</h2>
//       </form>
//     )
//   }
// }


