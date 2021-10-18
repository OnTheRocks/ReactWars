import React from 'react'

export default function FormComponent(props) {
  return (
    <main>
        <form>
            <input 
              type="text"
              placeholder="First Name"
              name="firstName"
              value={props.data.firstName}
              onChange={props.handleChange} 
            /><br />
            <input 
              type="text"
              placeholder="Last Name" 
              name="lastName"
              value={props.data.lastName}
              onChange={props.handleChange}
            /><br />
            <input 
              type="text"
              placeholder="Age"
              name="age"
              value={props.data.age}
              onChange={props.handleChange}
            /><br />            
            <label>
              <input 
                type="radio"
                name="gender"
                value="male"
                checked={props.data.gender === "male"}
                onChange={props.handleChange}
              /> Male
            </label>
            <label>
              <input 
                type="radio"
                name="gender"
                value="female"
                checked={props.data.gender === "female"}
                onChange={props.handleChange}
              /> Female
            </label>
            <br />
            <label>
              <select
                onChange={props.handleChange}
                name="destination"
                value={props.data.destination}
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
                checked={props.data.dairy}
                onChange={props.handleChange}
              />Dairy
            </label>
            <label>
              <input
                type="checkbox"
                name="peanuts"
                checked={props.data.peanuts}
                onChange={props.handleChange}
              />Peanuts
            </label>
            <label>
              <input
                type="checkbox"
                name="gluten"
                checked={props.data.gluten}
                onChange={props.handleChange}
              />Gluten
            </label>
            <br />            
            <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {props.data.firstName} {props.data.lastName}</p>
        <p>Your age: {props.data.age}</p>
        <p>Your gender: {props.data.gender}</p>
        <p>Your destination: {props.data.destination}</p>
        <p>Your dietary restrictions: </p>
        <p>Dairy: {props.data.dairy ? "Yes" : "No"}</p>
        <p>Peanuts: {props.data.peanuts ? "Yes" : "No"}</p>
        <p>Gluten: {props.data.gluten ? "Yes" : "No"}</p>        
    </main>
  )
}