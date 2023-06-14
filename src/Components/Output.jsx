import React from 'react'

const Output = (props) => {
  return (
    <div className=' font-semibold font-serif text-orange-400'>
        <h1>My Name is {props.userName} </h1>
        <h2>I am a FrontEnd Developer</h2>
    </div>
  )
}

export default Output
