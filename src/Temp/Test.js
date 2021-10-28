import React, { useEffect, useState } from 'react'
import randomcolor from "randomcolor"

const Test = () => {
  const [count, setCount] = useState(1)
  const [color, setColor] = useState("green")

  useEffect (() => {
    setColor(randomcolor())
  }, [])

  return (
    <div>
      <h1 style={{color: color}}>{count}</h1>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment!</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement!</button>
      <button onClick={() => setCount(prevCount => prevCount * 5)}>Multiply * 5!</button>
      <button onClick={() => setCount(prevCount => prevCount / 5)}>Divide * 5!</button>
    </div>
  )
}

export default Test