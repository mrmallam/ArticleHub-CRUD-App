import React from 'react'
import { useState, useEffect } from 'react'
import APIService from '../APIService'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['myToken'])
    const [isLogin, setIsLogin] = useState(true)

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

    const registerBtn = () => {
        APIService.RegisterUser({username, password})
        .then(() => LoginBtn())
        .catch(error => console.error(error))

    }

  return ( 
    <div>
      <div className='App'>
        <br />
        <br />
        {isLogin ? <h1>Please Login</h1> : <h1>Please Register</h1>}

        <div className='mb-3'>
            <label htmlFor='username' className='form-label'>Username</label>
            <input type='text' id='username' className='form-control' placeholder='Please enter Username' value={username} onChange={e => setUsername(e.target.value)}></input>
        </div>

        <div className='mb-3'>
            <label htmlFor='password' className='form-label'>Password</label>
            <input type='password' id='password' className='form-control' placeholder='Please enter Password' value={password} onChange={e => setPassword(e.target.value)}></input>
        </div>

        {isLogin ? <button className='btn btn-primary' onClick={LoginBtn}>Login</button>
        : <button className='btn btn-primary' onClick={registerBtn}>Register</button>}


        <div className='mb-3'>
            <br />
            {isLogin ? <h5>If you dont have an account, please <button className='btn btn-primary' onClick={() => setIsLogin(false)}>Register</button> Here</h5>
            :<h5>If you have an account, please <button className='btn btn-primary' onClick={() => setIsLogin(true)}>Login</button> here.</h5>}
        </div>

      </div>
    </div>
  )
}

export default Login
