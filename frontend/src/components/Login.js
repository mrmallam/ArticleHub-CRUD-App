import React from 'react'
import { useState, useEffect } from 'react'
import APIService from '../APIService'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['myToken'])

    let history = useHistory()
    
    useEffect(() => {
        if(token['myToken']) {
            history.push('/articles')
        }
    }, [token, history]);

    const LoginBtn = () => {
        APIService.LoginUser({username, password}) 
        .then(resp => setToken('myToken', resp.token))
        .catch(error => console.error(error))
    }

  return (
    <div>
      <div className='App'>
        <br />
        <br />
        <h1>Please Login</h1>

        <div className='mb-3'>
            <label htmlFor='username' className='form-label'>Username</label>
            <input type='text' id='username' className='form-control' placeholder='Please enter Username' value={username} onChange={e => setUsername(e.target.value)}></input>
        </div>

        <div className='mb-3'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type='password' id='password' className='form-control' placeholder='Please enter Password' value={password} onChange={e => setPassword(e.target.value)}></input>
        </div>

        <button className='btn btn-primary' onClick={LoginBtn}>Login</button>

      </div>
    </div>
  )
}

export default Login
