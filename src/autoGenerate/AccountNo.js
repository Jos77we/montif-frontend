import React, {useState} from 'react'

const AccountNo = () => {

    const [num, setNum] = useState('');

    let x = Math.floor((Math.random() * 1000) + 25);
    let y = Math.floor((Math.random() * 100) + 15);
  
    const conf = x + y;
    setNum(conf )
  return (
  <>    
  <div>AccountNo</div>
  <p>{num}</p>
  </>

  )
}

export default AccountNo