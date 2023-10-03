import React from 'react'
import './HomeContent.css'

const HomeContent = () => {
  return (
    <>
    <div className='full-layout'>
      <div className='first-layout'>
        <div className='itemBox-layout' style={{backgroundColor:'rgb(0, 31, 92)'}}>
          <div>
            <p style={{fontSize:'1.02rem', fontWeight:'500', marginLeft:'16px', marginTop:'0px', color:'white'}}>Savings Account</p>
          </div>
          <div>
            <p style={{fontSize:'1.8rem', fontWeight:'600', marginLeft:'20px', marginTop:'-1px', color:'white'}}>$45.6k</p>
          </div>
          <div>
            <p style={{fontWeight:'550', marginLeft:'18px', marginTop:'-8px', color:'white'}}>Total Amount: $72.8k</p>
          </div>
        </div>
        <div className='itemBox-layout' style={{marginTop:'10px'}}>
          <div>
            <p style={{fontSize:'1.05rem', fontWeight:'600', marginLeft:'16px', marginTop:'0px'}}>Expenses</p>
            <p style={{fontSize:'0.8rem', marginLeft:'20px', marginTop:'-12px'}}>This Month</p>
          </div>
          <div>
            <p style={{fontSize:'1.8rem', fontWeight:'600', marginLeft:'40px', marginTop:'-8px'}}>$300</p>
          </div>
          <div style={{display:'flex', justifyContent:'end'}}>
            <p style={{marginTop:'-30px', marginRight:'6px', fontWeight:'600', fontSize:'1.02rem'}}>0.6%</p>
          </div>
        </div>
        <div className='itemBox-layout' style={{marginTop:'10px'}}>
          <div style={{display:'flex'}}>
            <div>
            <p style={{fontSize:'1.05rem', fontWeight:'600', marginLeft:'16px', marginTop:'0px'}}>Profit</p>
            </div>
            <div>
            <p style={{ marginLeft:'160px', marginTop:'2px'}}>0.4%</p>
            </div>
        </div>
        <div style={{height:'70px', display:'flex', gridTemplateColumns:'auto', columnGap:'10px'}}>
          <div style={{height:'70px', width:'45%'}}>
            <p style={{fontSize:'1.0rem', fontWeight:'400', textAlign:'center', marginTop:'0px'}}>Interest</p>
            <p style={{fontSize:'1.5rem', fontWeight:'600', textAlign:'center', marginTop:'-6px'}}>$150</p>
          </div>
          <div style={{height:'70px', width:'45%'}}>
            <p style={{fontSize:'1.0rem', fontWeight:'400', textAlign:'center', marginTop:'0px'}}>Projection</p>
            <p style={{fontSize:'1.5rem', fontWeight:'600', textAlign:'center', marginTop:'-6px'}}>0.7%</p>
          </div>
        </div>
        </div>
        <div className='itemLast-layout'></div>
      </div>
      <div className ='second-layout'>
        <div className='statBox-layout' style={{height:'250px', backgroundColor:'rgba(9, 9, 9, 0.24)'}}></div>
        <div className='statBox-layout'style={{marginTop:'10px', height:'150px', display:'flex', gridTemplateColumns:'auto', columnGap:'30px', justifyContent:'center', backgroundColor:'transparent'}}>
          <div style={{height:'150px', width:'200px', backgroundColor:'white', borderRadius:'8px'}}></div>
          <div style={{height:'150px', width:'200px', backgroundColor:'white', borderRadius:'8px'}}></div>
          <div style={{height:'150px', width:'200px', backgroundColor:'white', borderRadius:'8px'}}></div>
        </div>
        <div className='statBox-layout'style={{marginTop:'10px', backgroundColor:'rgba(255, 255, 255, 0.8)'}}>
          <div style={{height:'40px', backgroundColor:'white', marginTop:'12px', width:'98%', marginRight:'auto', marginLeft:'auto'}}></div>
          <div style={{height:'40px', backgroundColor:'white', marginTop:'8px', width:'98%', marginRight:'auto', marginLeft:'auto'}}></div>
          <div style={{height:'40px', backgroundColor:'white', marginTop:'8px', width:'98%', marginRight:'auto', marginLeft:'auto'}}></div>
          <div style={{height:'40px', backgroundColor:'white', marginTop:'8px', width:'98%', marginRight:'auto', marginLeft:'auto'}}></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomeContent