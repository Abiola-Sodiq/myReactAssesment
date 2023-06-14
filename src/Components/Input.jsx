import React from 'react'

const Input = (props) => {
  return (
    <div>
        <input type="text" className=' rounded-md w-60 h-10 border-none bg-gray-200' onChange={props.newName} />
    </div>
  )
}

export default Input