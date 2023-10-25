import React, { useContext, useEffect, useState } from "react";
import DataContext from "../dataProvider/DataContext";
import axios from "axios";

const ApiRender = () => {
  const { data } = useContext(DataContext);
  const { idNo } = data;

  const [user, setUser] = useState([]);

  useEffect(() => {
    try {
      const res = axios.get(
        "http://localhost:5000/montif/newUser/logged-user",
        {
          params: { idNo },
        }
      );
      setUser(res.data);
      console.log(res);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(user);
  return (
    <div style={{ height: "60px", width: "100px", backgroundColor: "blue" }}>
      {user}
    </div>
  );
};

export default ApiRender;
