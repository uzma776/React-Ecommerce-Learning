import React, { useState } from 'react'

const About = () => {
  const [num, setNum] =useState(10)
  return (
    <>
    <h1>About</h1>
    <div className="container text-center mt-5">
      <h1>{num}</h1>
      <button onClick={() => setNum(num+1)}>increase</button>
      <button onClick={ () => setNum(num-1)}>decrease</button>

    </div>

      
    </>
  )
}

export default About
