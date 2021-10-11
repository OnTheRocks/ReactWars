import React from 'react'

export default class Apple extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClickDouble = this.handleClickDouble.bind(this)
    this.handleClickS = this.handleClickS.bind(this)
    this.handleClickH = this.handleClickH.bind(this)
  }

handleClick() {
  console.log("You clicked me!")
  this.setState(prevState => {
    return {
      count: prevState.count + 1
    }
  })
}
handleClickDouble() {
  console.log("You clicked me!")
  this.setState(prevState => {
    return {
      count: prevState.count * 2
    }
  })  
}
handleClickS() {
  console.log("You clicked me!")
  this.setState(prevState => {
    return {
      count: prevState.count * prevState.count
    }
  })  
}
handleClickH() {
  console.log("You clicked me!")
  this.setState(prevState => {
    return {
      count: prevState.count /2
    }
  })  
}

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
        <button onClick={this.handleClickDouble}>Double!</button>
        <button onClick={this.handleClickS}>Suare!</button>
        <button onClick={this.handleClickH}>Half!</button>
      </div>
    )
  }
}

