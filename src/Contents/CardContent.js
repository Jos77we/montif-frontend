import React, { useState, useEffect } from "react";
import "./CardContent.css";
import {
  CreditCardOutlined,
  MoneyCollectOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import axios from "axios";
import AccountFetch from "../apiFetch/AccountFetch";
import CardFetch from "../apiFetch/CardFetch";
import PopupWin from "../Design/PopupWin";
import PopupCrypt from "../Design/PopupCrypt";
const CardContent = () => {
  const [result, setResult] = useState([]);
  const [openWin, setOpenWin] = useState(false);
  const [window, setWindow] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/montif/transactions/all-transactions")
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="card-balance">
        <div
          style={{
            height: "180px",
            width: "90%",
            display: "flex",
            gridTemplateColumns: "auto",
            columnGap: "20px",
          }}
        >
          <div style={{ marginTop: "20px" }}>
            <AccountFetch />
          </div>
        </div>
      </div>
      {/* <div className='card-back'>
      <div className='card-back1'></div>
      <div className='card-back2'></div>
      <div className='card-back3'></div>
    </div> */}
      <div className="layoutOutline">
        <div style={{ height: "400px", width: "60%" }}>
          <div className="credit-box">
            <div style={{ height: "40px", display: "grid" }}>
              <p
                style={{
                  margin: "10px",
                  fontWeight: "600",
                  fontSize: "1.2rem",
                }}
              >
                Transactions
              </p>
              <div
                style={{
                  height: "30px",
                  width: "92%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  backgroundColor: "transparent",
                  borderRadius: "4px",
                  display: "flex",
                  gridTemplateColumns: "auto",
                  columnGap: "10px",
                }}
              >
                <div
                  style={{ height: "45px", width: "150px", marginLeft: "10px" }}
                >
                  <p style={{ fontWeight: "600" }}>A/C Number</p>
                </div>
                <div
                  style={{ height: "45px", width: "150px", marginLeft: "5px" }}
                >
                  <p style={{ fontWeight: "600" }}>Date</p>
                </div>
                <div
                  style={{ height: "45px", width: "150px", marginLeft: "5px" }}
                >
                  <p style={{ fontWeight: "600" }}>Time</p>
                </div>
                <div style={{ height: "45px", width: "150px" }}>
                  <p style={{ fontWeight: "600" }}>Amount</p>
                </div>
              </div>
            </div>
            <div className="credit">
              {result.map((item, index) => (
                <div key={index} className="transaction">
                  <div
                    style={{
                      height: "45px",
                      width: "150px",
                      marginLeft: "10px",
                    }}
                  >
                    <p>{item.receiverAccountNo}</p>
                  </div>
                  <div style={{ height: "45px", width: "150px" }}>
                    <p>{new Date(item.createdAt).toDateString()}</p>
                  </div>
                  <div style={{ height: "45px", width: "150px" }}>
                    <p>{new Date(item.createdAt).toLocaleTimeString()}</p>
                  </div>
                  <div style={{ height: "45px", width: "150px" }}>
                    <p>{item.amount}</p>
                  </div>
                  {/* Add more elements as needed */}
                </div>
              ))}
            </div>
          </div>
          <div className="activity">
            <div className="transact" onClick={() => setOpenWin(true)}>
              <div>
                <p style={{ marginLeft: "10px" }}>New transaction</p>
              </div>
              <div>
                <CreditCardOutlined
                  style={{ marginLeft: "15px", fontSize: "20px" }}
                />
              </div>
            </div>
            <PopupWin open={openWin} onClose={() => setOpenWin(false)} />
            <div className="transact" onClick={() => setWindow(true)}>
              <p style={{ marginLeft: "10px" }}>Withdraw</p>
              <div>
                <MoneyCollectOutlined
                  style={{ marginLeft: "15px", fontSize: "20px" }}
                />
              </div>
            </div>
            <PopupCrypt open={window} onClose={() => setWindow(false)} />
            <div className="transact">
              <p style={{ marginLeft: "10px" }}>Subscription</p>
              <div>
                <ScheduleOutlined
                  style={{ marginLeft: "15px", fontSize: "20px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="calender">
          <p
            style={{
              marginTop: "5px",
              marginLeft: "20px",
              fontWeight: "600",
              fontSize: "1.2rem",
            }}
          >
            Available cards
          </p>
          <div style={{ marginTop: "50px" }}>
            <CardFetch />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContent;
