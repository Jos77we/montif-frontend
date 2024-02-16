import React, {useContext, useState, useEffect} from 'react'
import DataContext from '../dataProvider/DataContext'
import axios from 'axios'
import pic1 from '../images/mastercard-removebg-preview.png'

const CardFetch = () => {
    const { data } = useContext(DataContext);
    const { idNo } = data;

    const [results, setResults] = useState([])

    useEffect(() => {
     const fetchApi = async () => {
       try {
        const res = await axios.get("https://montif-backend.onrender.com/montif/card/card-owner", {
            params: {idNo}
        })
        setResults(res.data)
       } catch (error) {
        console.error("Error fetching documents:", error);
       }
     }
     fetchApi()
    })
  return (
    <>
    {results && ( 
        <div style={{marginTop:'10px', height:'200px', width:'90%', backgroundColor:'gold', borderRadius:'6px', marginLeft:'auto', marginRight:'auto'}} >
           <div style={{height:'50px', backgroundColor:'blue', borderTopLeftRadius:'6px', borderTopRightRadius:'6px', display:'flex', alignItems:'center'}}>
            <p style={{marginLeft:'10px', fontSize:'1.2rem'}}>Montif</p>
            <p style={{marginLeft:'64%'}}>Virtual</p>
           </div>
           <div style={{height:'90px'}}>
           </div>
           <div style={{height:'60px', backgroundColor:'grey', borderBottomLeftRadius:'6px', borderBottomRightRadius:'6px', display:'flex', alignItems:'center'}}>
            <div>
            <img src={pic1} alt="logo" height='40px' width='60px'/>
            </div>
            <div style={{marginLeft:'34%'}}>
            <p style={{marginLeft:'60px', fontWeight:'600'}}>{results.cardType}</p>
            <p style={{fontWeight:'600'}}>{results.cardNo}</p>
            </div>
           </div>
        </div>
     )}
    
    </>
  )
}

export default CardFetch