import React from 'react'
import '../Design/PopupWin.css'
import NewTransaction from '../Contents/NewTransaction'

const PopupWin = ({open, onClose}) => {
    if(!open) return null
  return (
    <>
    <div className='overlay'>
    <div className='pop-tab'>
        <p>PopupWin</p>
    <p onClick={onClose}>X</p>
    </div>
    <NewTransaction/>
    </div>
    </>
  )
}

export default PopupWin