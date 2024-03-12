import React from "react";
import "../Design/PopupWin.css";
import { Button } from "antd";

const PopupDeposit = ({ open, onClose, accountNo, accountName }) => {
  if (!open) return null;
  return (
    <>
      <div className="overlay" style={{ backgroundColor: "transparent" }}>
        <div className="popup-alert">
          <div className="alert-popbox" style={{height:'400px'}}>
            <div
              style={{
                padding: "40px 50px 0px 50px",
                textAlign: "center",
                fontWeight: "600",
              }}
            >
              <div>
              <p>Account Number</p>
              <p>{accountNo}</p>
              </div>
              <div>
              <p>Account Name</p>
              <p style={{ color: "green" }}>{accountName}</p>
              </div>
              <div>
              <p>Deposit</p>
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
              placeholder="Deposit"
              type="text"
              />
              </div>
              
            </div>
            <div
              style={{
                heigth: "35px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                onClick={onClose}
                style={{
                  height: "30px",
                  width: "160px",
                  backgroundColor: "gray",
                }}
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupDeposit;
