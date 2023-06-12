
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'
import './SignUp.css'

const LogIn = () => {
    const {user, signIn}= UserAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
  const navigate = useNavigate()
   
    const handleSubmit = async(e)=>{
      setError('')
      e.preventDefault()
      try{
        await signIn(email, password)
        navigate('/')
      }catch(error){
        setError(error.message)
      }
    }
    return (
      <header>
         <div className='sign-wrapper'>
          <form onSubmit={handleSubmit}>
          <h1>SIGN IN</h1>
          {error? <p>{error}</p>: null}
              <input onChange= {(e)=>setEmail(e.target.value)} className='details' type="email" placeholder='Email' autoComplete='email' /><br/>
              <input onChange= {(e)=>setPassword(e.target.value)} className='details' type="password" placeholder='password' autoComplete='current-password' /><br/><br/>
              <button className='btn btn-new'>Sign In</button>
              <div className='remember'>
                  <p><input type="checkbox" id='checked'/>Remember Me</p>
                  <p className='help'>Need Help?</p>
              </div>
              <p><span>Already Subscribed to Netflix?</span> <Link to='/LogIn'>Sign Up</Link></p>
          </form>
          </div>
      
      </header>
    )
  
}

export default LogIn