import React, {useContext, useState, useEffect} from 'react'
import DataContext from '../dataProvider/DataContext'
import axios from 'axios'

const AccountFetch = () => {
    const { data } = useContext(DataContext);
    const { idNo } = data;

    const [accounts, setAccounts] = useState([])
    console.log(idNo)
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
    
    {accounts && (
        <div style={{height: '160px', width: '300px', borderRight:'2px solid black'}}>
            <p style={{fontSize:'1.3rem', fontWeight:'600', color:'white', marginLeft:'25px'}}>{accounts.accountName}</p>
            <p style={{fontSize:'0.8rem', fontWeight:'600', color:'white', marginLeft:'25px'}}>A/C  {accounts.accountNo}</p>
            <p style={{fontSize:'1.6rem', fontWeight:'600', color:'white', marginLeft:'25px', marginTop:'-6px'}}>{accounts.amount}</p>
            <p style={{marginTop:'-12px', fontWeight:'500', marginLeft:'10px'}}>{accounts.status}</p>
        </div>
    )}
   
    </>
  )
}

export default AccountFetch