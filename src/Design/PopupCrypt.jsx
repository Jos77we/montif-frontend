import React from 'react'
import '../Design/PopupWin.css'
import { IoClose } from "react-icons/io5";
import NewCryptWithdraw from '../Contents/NewCryptWithdraw';

const PopupCrypt = ({open, onClose}) => {
    if(!open) return null
  return (
    <>
    <div className='overlay'>
    <div className='pop-tab'>
       <div></div>
    <div onClick={onClose} style={{marginTop:'10px'}}><IoClose style={{fontSize:'20px'}}/></div>
    </div>
    <NewCryptWithdraw/>
    </div>
    </>
  )
}

export default PopupCrypt