import React, {useContext, useState, useEffect} from 'react'
import DataContext from '../dataProvider/DataContext'
import axios from 'axios'

const AccountFetch = () => {
    const { data } = useContext(DataContext);
    const { idNo } = data;

    const [accounts, setAccounts] = useState([])

    useEffect(() => {
      const fetchData = async() =>{
        try {
            const res = await axios.get("http://localhost:5000/montif/accounts/account-type", {
                params:{idNo}
            })
            setAccounts(res.data)
            console.log(res)
        } catch (error) {
            console.error("Error fetching documents:", error);
        }
      }
      fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  return (
    <>
    
    {Array.isArray(accounts) && accounts.map((items, index) => (
        <div style={{height: '160px', width: '300px', borderRight:'2px solid black'}} key={index}>
            <p style={{fontSize:'1.3rem', fontWeight:'600', color:'white', marginLeft:'25px'}}>{items.accountName}</p>
            <p style={{fontSize:'0.8rem', fontWeight:'600', color:'white', marginLeft:'25px'}}>A/C  {items.accountNo}</p>
            <p style={{fontSize:'1.6rem', fontWeight:'600', color:'white', marginLeft:'25px', marginTop:'-6px'}}>{items.amount}</p>
            <p style={{marginTop:'-12px', fontWeight:'500', marginLeft:'10px'}}>{items.status}</p>
        </div>
    ))}
   
    </>
  )
}

export default AccountFetch