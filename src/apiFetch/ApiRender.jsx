import React, { useContext, useEffect, useState } from "react";
import DataContext from "../dataProvider/DataContext";
import axios from "axios";

const ApiRender = () => {
  const { data } = useContext(DataContext);
  const { idNo } = data;

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () =>{
    try {
      const res = await axios.get(
        "https://montif-backend.onrender.com/montif/newUser/logged-user",
        {
          params: { idNo },
        }
      );
      setUser(res.data);
      console.log("results are", res);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  }
  fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(user);
  return (
    <div style={{ height: "100px", backgroundColor: "transparent" }}>
      {user && (
        <div> 
       <p style={{marginTop:'10px', marginLeft:'10px', fontSize:'1.2rem', fontWeight:'600', color:'white'}}>Welcome</p>
        <p style={{marginTop:'-5px',fontSize:'0.9rem', fontWeight:'600', color:'white', marginLeft:'10px'}}>{user.name}</p>
        <p style={{marginTop:'-5px', fontSize:'0.7rem', marginLeft:'10px', color:'white'}}>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default ApiRender;
