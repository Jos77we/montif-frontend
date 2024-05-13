import React, {useState, useEffect, useContext} from "react";
import "../Design/PopupWin.css";
import {Button} from 'antd';
import DataContext from "../dataProvider/DataContext";
import axios from "axios";
//import NewAccount from "../Contents/NewAccount";



const PopupAcc = ({ open, onClose, accName }) => {

  const { data } = useContext(DataContext);
  const { name } = data;
  const { idNo } = data;

  const [randomSequence, setRandomSequence] = useState('');
  const [newItem, setNewItem] = useState({
    name: name,
    idNo: idNo,
    accountNo:"",
    accountName:"",
    cardNo:"",
    amount:"0.00",
    depositStamp:"",
    withdrawStamp:"",
    status:"Active",
  });

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

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var dayOfWeek = today.getDay(); 
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = days[dayOfWeek];

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = day +' '+ date + ' ' + time;


useEffect(() => {
  if (open) {
      const sequence = generateRandomNumber();
      setRandomSequence(sequence);
      setNewItem((prevState) => ({
      ...prevState,
      accountNo: sequence,
      accountName: accName,
      depositStamp: dateTime
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const sendData = () => {
    axios.post('https://montif-backend.onrender.com/montif/accounts/new-account', newItem)
      .then(response => {
        console.log('Data sent successfully:', response.data);
        onClose();
      })
      .catch(error => {
        console.error('Error sending data:', error);
      });
  };

  
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
         onClick={() => {
          sendData(); 
        }}
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
