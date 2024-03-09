import React from 'react'
import '../Design/PopupWin.css'


const PopupDeposit = ({open, onClose, accountNo, accountName}) => {
    if(!open) return null
  return (
    <>
     <div className="overlay" style={{backgroundColor:'transparent'}}> 
        <div className="popup-alert">
          <div className="alert-popbox">
          <div style={{ padding: "40px 50px 0px 50px", textAlign: "center", fontWeight:'600' }}>
        <p>{accountNo}</p>
        <p>Account Number: <span style={{color:'green'}}>{accountName}</span></p>
      </div>
      <div style={{heigth:'35px', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Button
        onClick={onClose}
          style={{
            height: "30px",
            width: "160px",
            backgroundColor: "gray"
          }}
        >close</Button>
      </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PopupDeposit