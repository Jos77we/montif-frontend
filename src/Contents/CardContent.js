import React, {useState, useEffect} from 'react'
import './CardContent.css'
 import {CreditCardOutlined, MoneyCollectOutlined, ScheduleOutlined } from '@ant-design/icons'
 import axios from 'axios'
import AccountFetch from '../apiFetch/AccountFetch';
import CardFetch from '../apiFetch/CardFetch';

const CardContent = () => {
 
 const [result, setResult] = useState([])


  useEffect(() => {
    axios.get('http://localhost:5000/montif/transactions/all-transactions')
    .then(response => {
      setResult(response.data)
     
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
  }, [])

  return (
    <>
    <div className='card-balance'>
      <p>CardContent</p>
      <div style={{height:'180px', width:"90%", display:'flex', gridTemplateColumns:'auto', columnGap:'20px'}}>
        <AccountFetch/>
      </div>
      </div>
    {/* <div className='card-back'>
      <div className='card-back1'></div>
      <div className='card-back2'></div>
      <div className='card-back3'></div>
    </div> */}
    <div className='layoutOutline'>
      <div style={{height:'400px', width:'60%'}}>
        <div className='credit-box'>
        <div style={{height:'40px'}}>
          <p style={{marginTop:"0px", marginLeft:'20px', fontWeight:'600', fontSize:'1.2rem'}}>Transactions</p>
        </div>
        <div className='credit'>
      {result.map((item, index) => (
        <div key={index} className="transaction">
          <div style={{height:'45px', width:'150px'}}>
          <p>{item.amount}</p>
          </div>
          <div style={{height:'45px', width:'150px'}}>
          <p>{new Date(item.createdAt).toDateString()}</p>
          </div>
          <div style={{height:'45px', width:'150px'}}>
          <p>{new Date(item.createdAt).toLocaleTimeString()}</p>
          </div>
          <div style={{height:'45px', width:'150px'}}>
          <p>{item.receiverAccountNo}</p>
          </div>
          {/* Add more elements as needed */}
        </div>
      ))}
    </div>
        </div>
        <div className='activity'>
          <div className='transact'>
            <div>
              <p style={{marginLeft:'10px'}}>New transaction</p>
              </div>
            <div >
              <CreditCardOutlined style={{marginLeft:'15px', fontSize:'20px'}}/>
            </div>
            
          </div>
          <div className='transact'>
            <p style={{marginLeft:'10px'}}>Withdraw</p>
            <div>
              <MoneyCollectOutlined style={{marginLeft:'15px', fontSize:'20px'}}/>
            </div>
          </div>
          <div className='transact'>
            <p style={{marginLeft:'10px'}}>Subscription</p>
            <div>
            <ScheduleOutlined style={{marginLeft:'15px', fontSize:'20px'}}/>
            </div>
          </div>
        </div>
      </div>
      <div className='calender'>
       <p style={{marginTop:"5px", marginLeft:'20px', fontWeight:'600', fontSize:'1.2rem'}}>Available cards</p>
       <div style={{marginTop:'50px'}}>
       <CardFetch/>
       </div>
      </div>
    </div>
    </>
  )
}

export default CardContent