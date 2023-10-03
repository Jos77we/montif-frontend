import React from 'react'
import pic1 from '../images/illustration.png'
import LoginLayout from '../Design/LoginLayout'

const Login = () => {
  return (
    <div style={{height:'99vh', backgroundColor:'rgba(96, 196, 84, 0.42)'}}>
    <div style={{height:'600px', width:'600px', marginLeft:'auto', marginRight:'auto', position:'relative'}}>
        <img src={pic1} alt='illustration' height='480px' style={{marginTop:'80px'}}/>
        <LoginLayout/>
    </div>
     
    </div>
  )
}

export default Login