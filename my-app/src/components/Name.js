import React, { Component } from 'react'

export default class Name extends Component {
    constructor(){
        super()
        this.state = {
            name: "Mohammed"
        }
    }

    clickedMe = () => {
        this.setState({
            //name: 'Changed Text'
            name:this.state.name === "Mohammed" ? "John Doe" : "Mohammed" 
        })  
    }


  render() {
    return (
      <div>
        <h3 className='bg-primary text-white text-center' >Hi from {this.state.name}</h3>

        <button onClick={this.clickedMe} className='btn btn-success' >
            Change text
        </button>
      </div>
    )
  }
}
