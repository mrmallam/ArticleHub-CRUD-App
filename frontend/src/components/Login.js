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
    const [validCredentials, setValidCredentials] = useState(false)

    let history = useHistory()
    
    useEffect(() => {
        if(token['myToken']) {
            history.push('/articles')
        }
    }, [token, history]);

    const LoginBtn = () => {
      if (username.trim() == '' || password.trim() == '') {
        // alert("please enter your username and password")
        setValidCredentials(true)
        setUsername('')
        setPassword('')
        return;
      }

      APIService.LoginUser({username, password}) 
      .then(resp => {
        if (resp === 'Failed to login') {
          setValidCredentials(true)
          setUsername('')
          setPassword('')
        }
        else{
          setToken('myToken', resp.token)
          setValidCredentials(false)
        }
      })
      .catch(error => console.error(error))
    }

    const registerBtn = () => {
        APIService.RegisterUser({username, password})
        .then(() => LoginBtn())
        .catch(error => console.error(error))

    }

  return ( 
    <section className='heroLogin'>
      <div className='content'>

        {isLogin ? <h1 className='title'>Login</h1> : <h1 className='title'>Register</h1>}

        <div className='line' />
        
        <div className='form-input form-outline mb-4'>
            <input type='text' id='username' className='form-control' placeholder='Enter Username' value={username} onChange={e => setUsername(e.target.value)}></input>
        </div>

        <div className='form-input mb-3'>
            <input type='password' id='password' className='form-control' placeholder='Enter Password' value={password} onChange={e => setPassword(e.target.value)}></input>
        </div>

        <div>
          {validCredentials ? <p className='incorrectCredentials'>Incorrect. Please enter a valid Username or Password</p> : null}
          
        </div>

        {isLogin ? <button className='loginButton btn btn-primary btn-block mb-4' onClick={LoginBtn}>Login</button>
        : <button className=' loginButton btn btn-primary btn-block mb-4' onClick={registerBtn}>Register</button>}


        <div className=''>
            {isLogin ? <h5 className='text'>Not a member? <a className='loginRegisterBtn' onClick={() => setIsLogin(false)}>Register</a></h5>
            :<h5 className='text'>If you have an account, please <a className='loginRegisterBtn' onClick={() => setIsLogin(true)}>Login</a></h5>}
        </div>

      </div>
    </section>
  )
}

export default Login
