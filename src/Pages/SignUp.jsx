import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'
import './SignUp.css'

const SignUp = () => {

  const {user, signUp}= UserAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
const navigate = useNavigate()
 
  const handleSubmit = async(e)=>{
    e.preventDefault()
    try{
      await signUp(email, password)
      navigate('/')
    }catch(error){
      
    }
  }
  return (
    <header>
       <div className='sign-wrapper'>
        <form onSubmit={handleSubmit}>
        <h1>SIGN UP</h1>
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

export default SignUp