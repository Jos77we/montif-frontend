import React, {useContext, useState, useEffect} from 'react'
import './CardContent.css'
import DataContext from '../dataProvider/DataContext';
import GenTransaction from '../autoGenerate/GenTransaction';
 import {CreditCardOutlined} from '@ant-design/icons'
 import axios from 'axios'
import ApiRender from '../apiFetch/ApiRender';

const CardContent = () => {
  const { data } = useContext(DataContext);
  const { name, idNo } = data;

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
        <div style={{height: '160px', width: '300px', backgroundColor:'blue'}}></div>
        <div style={{height: '160px', width: '300px', backgroundColor:'blue'}}></div>
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
              <p>New transaction</p>
              </div>
            <div>
              <CreditCardOutlined/>
            </div>
            
          </div>
          <div className='transact'>
            <p>Withdraw</p>
          </div>
          <div className='transact'></div>
        </div>
      </div>
      <div className='calender'>
      <p>Name: {name}</p>
      <p>ID: {idNo}</p>
      <GenTransaction/>
      <ApiRender/>
      <p>Subscriptions</p>
      </div>
    </div>
    </>
  )
}

export default CardContent