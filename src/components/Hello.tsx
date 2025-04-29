import React, { useState } from 'react';
import '../index.css';
const Hello = ({ value }) => {


  const [count, setCount] = useState(value)

  const onIncrement = () => setCount(count + 1)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onIncrement}>incrementar </button>
    </>
  )
}

export default Hello;