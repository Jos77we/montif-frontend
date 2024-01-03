import React, {useState} from 'react'
import AccountDetailTest from '../apiFetch/AccountDetailTest'
import PopupWin from '../Design/PopupWin'
import GenTransaction from '../autoGenerate/GenTransaction'
import ReceiverId from '../autoGenerate/ReceiverId'


const Cryptocurrency = () => {
  const [openWin, setOpenWin] = useState(false)
 const num = <ReceiverId/>
  return (
    <>
    <div>Cryptocurrency</div>
   <AccountDetailTest/>
   <button onClick={() => setOpenWin(true)}>Click</button>
   <PopupWin open={openWin} onClose={() => setOpenWin(false)}/>
   <GenTransaction/>
   <div>{num}</div>
   
    </>
  )
}

export default Cryptocurrency