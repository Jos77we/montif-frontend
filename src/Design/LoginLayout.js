import React, {useState, useContext} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {Button} from 'antd'
import DataContext from '../dataProvider/DataContext';
import { LoadingOutlined } from "@ant-design/icons";

const LoginLayout = () => {

   const { setData } = useContext(DataContext)
  const [name, setName] = useState(' ')
  const [email, setEmail] = useState(' ')
  const [password, setPassword] = useState(' ')
  const [load, setLoad] = useState('Sign-in')

  const url = "http://localhost:5000/montif/newUser/login"
  const nav = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault()
  const formData = new FormData();
  formData.append("name", name)
  formData.append("email", email)
  formData.append("password", password)

  try {
    setLoad(<LoadingOutlined />)
    const res = await axios.post(url, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
 console.log(res.data)
    const { name, idNo } = res.data;
    setData({ name, idNo });
    
    if(res.status === 200){
    nav("/dashboard")
    }
   

  } catch (error) {
    alert("Error occured")
  }
} 

  return (
   
    <>
    <form onSubmit={(e) => handleLogin(e)}>
      <div
        style={{
          height: "400px",
          width: "400px",
          backgroundColor: "rgba(146, 146, 146, 0.40)",
          marginLeft: "15%",
          position: "absolute",
          marginTop: "-450px",
          borderBottomRadius: "6px",
        }}
      >
        <input
          style={{
            height: "40px",
            width: "80%",
            marginLeft: "40px",
            border: "none",
            borderBottom: "2px solid white",
            marginTop: "40px",
            backgroundColor: "rgba(146, 146, 146, 0.30)",
            outline:'none'
          }}
          placeholder="Name"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={{
            height: "40px",
            width: "80%",
            marginLeft: "40px",
            border: "none",
            borderBottom: "2px solid white",
            marginTop: "40px",
            backgroundColor: "rgba(146, 146, 146, 0.30)",
            outline:'none'
          }}
          placeholder="Email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={{
            height: "40px",
            width: "80%",
            marginLeft: "40px",
            border: "none",
            borderBottom: "2px solid white",
            marginTop: "40px",
            backgroundColor: "rgba(146, 146, 146, 0.30)",
            outline:'none'
          }}
          placeholder="Password"
          type="text"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{marginTop:'50px'}} >
          
          <Button style={{height:'30px', width:'80%', marginLeft:'40px', border:'none', backgroundColor:'blue', color:'white', borderRadius:'4px'}} type="primary" htmlType="submit" >{load}</Button>
          
        </div>
      </div>
      </form>
    </>
  );
};

export default LoginLayout;
