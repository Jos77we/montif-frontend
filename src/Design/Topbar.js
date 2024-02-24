import React from 'react'
import './Topbar.css'
import logo from '../images/Logo 500x500 px 1.png'
import {Link} from 'react-router-dom'

const Topbar = () => {
  return (
    <>
    <div className='layout'>
    <div className='layout1'>
        <img src={logo} alt='logo' height='60%'/>
    </div>
    <div className='layout2'>
        <p>About</p>
        <p>Product</p>
        <p>Invest</p>
        <p>Service</p>
    </div>
    <div className='layout3'>
      <Link to='/login' style={{textDecoration:'none', fontWeight:'600'}}>
    Login
    </Link>
    <Link to='/signUp'>
    <button style={{height:'40px', width:'70px', borderRadius:'6px', backgroundColor:'blue', border:'none', color:'white'}}>
    Sign-up
    </button>
    </Link>
    </div>
    </div>
    </>
  )
}

export default Topbar