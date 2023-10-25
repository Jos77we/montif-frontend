import React from 'react'
import './SignUpForm.css'
import Form1 from './Form1'
import logo from '../images/Logo 500x500 px 1.png'

const SignUpForm = () => {
  return (
    <>
    <div className='form-layout'>
        <div className='form-display'>
          <div style={{height:'80px', marginLeft:'10px'}}>
            <img src={logo} alt='logo' height='60px' width='150px'/>
          </div>
          <div style={{marginTop:'30px', height:'200px', width:'60%', marginLeft:'20px'}}>
            <p style={{fontSize:'1.8rem', maxWidth:'300px'}}>Welcome Aboard</p>
          </div>
        </div>
        <div className='form-input'>
            <Form1/>
        </div>
    </div>
    </>
  )
}

export default SignUpForm