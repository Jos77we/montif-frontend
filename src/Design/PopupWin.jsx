import React from 'react'
import '../Design/PopupWin.css'
import NewTransaction from '../Contents/NewTransaction'
import { IoClose } from "react-icons/io5";

const PopupWin = ({open, onClose}) => {
    if(!open) return null
  return (
    <>
    <div className='overlay'>
    <div className='pop-tab'>
       <div></div>
    <div onClick={onClose} style={{marginTop:'10px'}}><IoClose style={{fontSize:'20px'}}/></div>
    </div>
    <NewTransaction/>
    </div>
    </>
  )
}

export default PopupWin