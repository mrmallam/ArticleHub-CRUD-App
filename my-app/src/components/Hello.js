import React from 'react'

function Hello(props) {
  return (
    <div>
      <h1>Hello from {props.fname} {props.lname}</h1>

      <button className='container'>
        click me
      </button>
    </div>
  )
}

export default Hello
