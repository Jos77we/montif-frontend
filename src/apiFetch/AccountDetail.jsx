import React, {useContext, useState, useEffect} from 'react'
import DataContext from '../dataProvider/DataContext'
import axios from 'axios'

const AccountDetail = () => {
    const { data } = useContext(DataContext);
    const { idNo } = data;

    const [details, setDetails] = useState(null)
    useEffect(() => {
        const fetchDetails = async () => {
         try {
            const res = await axios.get("http://localhost:5000/montif/accounts/account-details", {
                params: {idNo}
            })
            setDetails(res.data)
         } catch (error) {
            console.error("Error fetching documents:", error);
         }
        }
        fetchDetails()
    }, [idNo])
    console.log(details)
  return (
    <>
     <div>
      {details && (
        <div>
          {/* Render your data here */}
          <p>{details.cardNo}</p>
          <p>{details.accountNo}</p>
          <p>{details.accountName}</p>
          <p>{details.amount}</p>
          <p>{details.status}</p>
          <p>{details.lastDeposit}</p>
          <p>{details.lastWithdrawal}</p>
        </div>
      )}
    </div>
    </>
  )
}

export default AccountDetail