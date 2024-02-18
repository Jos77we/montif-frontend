import React, {useState, useEffect} from "react";
import "../Design/PopupWin.css";
import {Button} from 'antd';
//import NewAccount from "../Contents/NewAccount";



const PopupAcc = ({ open, onClose, accName }) => {
  const [randomSequence, setRandomSequence] = useState('');

  const generateRandomNumber = () => {
  let result = '';

  for (let i = 0; i < 12; i++) {
    const randomDigit = Math.floor(Math.random() * 10);
    result += randomDigit;
    if (i % 4 === 3 && i !== 11) {
      result += '-';
    }
  }

  return result;
};
useEffect(() => {
  if (open) {
      const sequence = generateRandomNumber();
      setRandomSequence(sequence);
    }
  }, [open]);

  
  if (!open) return null;
  
  return (
    <>
      <div className="overlay" style={{backgroundColor:'transparent'}}> 
        <div className="popup-alert">
          <div className="alert-popbox">
          <div style={{ padding: "40px 50px 0px 50px", textAlign: "center", fontWeight:'600' }}>
        <p>Congratulations your new {accName} was created successfully</p>
        <p>Account Number: <span style={{color:'green'}}>{randomSequence}</span></p>
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
  );
};

export default PopupAcc;
