import React, { useState } from 'react'
import {NavLink, Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../Context/AuthContext'
import {MdOutlineClose} from 'react-icons/md'
import {GoThreeBars} from 'react-icons/go'

import './Navbar.css'
const Navbar = () => {
  const [navShowing, setNavshowing] = useState(false)
  const{user, logOut} = UserAuth()
  const navigate = useNavigate()

  const handleLogOut = async()=>{
    try{
      await logOut()
      navigate('/')
    }catch(error){
      console.log(error)
    }
  }
  console.log(user)
  return (
    <nav>
      <div className='nav-wrapper'>
      <Link to = '/'><h1>NETFLIX</h1></Link>
      {
        user?.email ? (
          <div className={`button-wrapper ${navShowing ? 'show-nav' : 'hide-nav' }`}>
        <NavLink to = '/Account'><button className='btn btn-white'>Account</button></NavLink>
        <NavLink><button onClick={handleLogOut}className='btn btn-red'>Sign Out</button></NavLink>
      </div>
        ):
        <div className={`button-wrapper ${navShowing ? 'show-nav' : 'hide-nav' }`}>
        <NavLink to = '/LogIn'><button className='btn btn-white'>Sign In</button></NavLink>
        <NavLink to='/SignUp'><button className='btn btn-red'>Sign Up</button></NavLink>
      </div>
      }
      <button className='nav-toggle' onClick={()=>setNavshowing(prev=>!prev)}>
                    { navShowing ? <MdOutlineClose/> : <GoThreeBars/>}
                </button>
      </div>
      
    </nav>
  )
}

export default Navbar