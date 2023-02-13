import React, { Component } from 'react'

export default class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         password:'',
         posts:[],
      }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({posts: data}))
    }
    
    usernameHandler = (event) => {
        this.setState({ 
            username: event.target.value
        })
    }

    passwordHandler = (event) => {
        this.setState({ 
            password: event.target.value
        })
    }

  render() {
    const {posts} = this.state
    return (
      <div className='container'>
        <input type='text' value={this.state.username} onChange={this.usernameHandler} placeholder='username' className='form-control' />
        <input type='password' value={this.state.password} onChange={this.passwordHandler} placeholder='password' className='form-control'/>
        <button className='btn btn-primary'>Click Me</button>

        {posts.map(post => <p key={post.id}>{post.title}</p>
            )}

      </div>
    )
  }
}
