import React from 'react'
import './CardContent.css'

const CardContent = () => {
  return (
    <>
    <div className='card-balance'>CardContent</div>
    <div className='card-back'>
      <div className='card'></div>
      <div className='card'></div>
      <div className='card'></div>
    </div>
    <div className='layoutOutline'>
      <div style={{height:'400px', width:'60%'}}>
        <div className='credit'></div>
        <div className='activity'></div>
      </div>
      <div className='calender'></div>
    </div>
    </>
  )
}

export default CardContent