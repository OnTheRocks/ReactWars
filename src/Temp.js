import React from 'react'

function handleClick() {
  console.log("You clicked me!")
}

function handleMouseOver() {
  console.log("You Moused me!")
}

export default function Apple() {
  return (
    <div>
      <img src="https://www.fillmurray.com/54/150" onMouseOver={handleMouseOver} />
      <br />
      <br />
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}
