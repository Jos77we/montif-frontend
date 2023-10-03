import React from 'react'
import './IntroCard.css'
import {BsLaptop, BsPhone} from 'react-icons/bs'
import {SlScreenTablet} from 'react-icons/sl'
import {IoIosDesktop} from 'react-icons/io'
import pic1 from '../images/Component_1-removebg-preview.png'

const IntroCard = () => {
  return (
    <>
    <div className='card-layout'>
    <div className='card1'>
      <div style={{height:'200px', width:'75%', display:'flow-root', marginLeft:'80px', marginTop:'40px'}}>
        <p style={{fontSize:'2.4rem', fontWeight:'450', maxWidth:'380px'}}>Enjoy the best of internet banking at </p>
        <p style={{fontSize:'2.4rem', fontWeight:'450', marginTop:'-40px'}}>your comfort from anywhere</p>
      </div>
      <div style={{height:'80px', width:'75%', display:'flow-root', marginLeft:'80px'}}>
        <p style={{maxWidth:'280px', fontSize:'0.85rem'}}>Managing your money has never been easy using any device anywhere in the world</p>
        <div style={{display:'flex', gridTemplateColumns:'auto', columnGap:'10px', marginLeft:'10px'}}>
          <div> <BsLaptop/></div>
       
        <div><SlScreenTablet/></div>
        
        <div><BsPhone/></div>
       
        <div><IoIosDesktop/></div>
        
        </div>
      </div>
      <div style={{marginLeft:'80px', marginTop:'20px'}}>
        <button style={{height:'30px', width:'80px', border:'none', fontSize:'0.7rem', backgroundColor:'rgba(70, 68, 68, 0.23)', borderRadius:'6px'}}>Get Started</button>
      </div>
    </div>
        <div className='card2'>
          <div style={{marginTop:'20px', marginLeft:'80px'}}>
          <img src={pic1} alt='intro' height='350px' width='300px' />
          </div>
        </div>
    </div>
    <div className='card-info'>
    </div>
    </>
  )
}

export default IntroCard