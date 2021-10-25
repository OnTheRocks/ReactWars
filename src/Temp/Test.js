import React, { useState } from 'react'

const Test = () => {
  const [count, setCount] = useState(1)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment!</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement!</button>
      <button onClick={() => setCount(prevCount => prevCount * 5)}>Multiply * 5!</button>
      <button onClick={() => setCount(prevCount => prevCount / 5)}>Divide * 5!</button>
    </div>
  )
}

export default Test










// import React, { useState } from 'react'

// // export const Test = () => {
// //   const value = useState=("Yes")

// export default function Test() {
//   const [ answer ] = useState("Poop")
//   console.log(answer)

//   return (
//     <div>
//       <h1>Is state important? {answer}</h1>
//     </div>
//   )
// }