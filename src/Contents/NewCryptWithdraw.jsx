import React from 'react'
import "../Design/PopupWin.css";
import { Button } from "antd";

const NewCryptWithdraw = () => {
  return (
    <>
    <div className='popup-input' style={{height:'85%'}}>
    <div
          style={{
            height: "60px",
            width: "50%",
            borderBottom: "2px solid #04742a",
            marginLeft: "20px",
          }}
        >
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: "620",
              padding: " 30px 0px",
            }}
          >
            Crypto Withdrawal
          </p>
        </div>

        <form>
            <div>
                <p style={{ marginLeft: "20px", fontWeight: "600" }}>Account Type</p>
                <input
              style={{
                height: "40px",
                width: "60%",
                marginLeft: "20px",
                border: "none",
                borderBottom: "2px solid white",
                marginTop: "2px",
                backgroundColor: "rgba(146, 146, 146, 0.30)",
                borderRadius: "6px",
              }}
              // placeholder="Name"
              type="text"/>
            </div>
            <div>
                <p style={{ marginLeft: "20px", fontWeight: "600" }}>Amount</p>
                <input
              style={{
                height: "40px",
                width: "60%",
                marginLeft: "20px",
                border: "none",
                borderBottom: "2px solid white",
                marginTop: "2px",
                backgroundColor: "rgba(146, 146, 146, 0.30)",
                borderRadius: "6px",
              }}
              // placeholder="Name"
              type="text"/>
            </div>
            <div>
                <p style={{ marginLeft: "20px", fontWeight: "600" }}>Address</p>
                <input
              style={{
                height: "40px",
                width: "60%",
                marginLeft: "20px",
                border: "none",
                borderBottom: "2px solid white",
                marginTop: "2px",
                backgroundColor: "rgba(146, 146, 146, 0.30)",
                borderRadius: "6px",
              }}
              // placeholder="Name"
              type="text"/>
            </div>
            <div>
                <p style={{ marginLeft: "20px", fontWeight: "600" }}>Tag</p>
                <input
              style={{
                height: "40px",
                width: "60%",
                marginLeft: "20px",
                border: "none",
                borderBottom: "2px solid white",
                marginTop: "2px",
                backgroundColor: "rgba(146, 146, 146, 0.30)",
                borderRadius: "6px",
              }}
              // placeholder="Name"
              type="text"/>
            </div>
            <div style={{ height: "30px", marginTop: "8px" }}>
            <Button
              style={{
                height: "30px",
                width: "80px",
                margin: "10px 75%",
                background: "blue",
                borderRadius: "6px",
                border: "none",
                color: "white",
              }}
              type="primary"
              htmlType="submit"
            >
            Submit
            </Button>
            </div>
        </form>
    </div>
    </>
  )
}

export default NewCryptWithdraw