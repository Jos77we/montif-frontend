import React from "react";
import "../Design/PopupWin.css";
import ReceiverId from "../autoGenerate/ReceiverId";
import GenTransaction from "../autoGenerate/GenTransaction";

const NewTransaction = () => {
  return (
    <>
      <div className="popup-input" style={{ height: "85%" }}>
        <div style={{padding:'10px'}}>
        <p style={{fontSize:'1.4rem', fontWeight:'620', marginLeft:'20px'}}>New Transaction</p>
        </div>
        <div
          style={{
            height: "100px",
            display: "flex",
            columnGap: "30%",
          }}
        >
          <div>
            <p>transactionId </p>
            <div
              style={{
                height: "40px",
                width: "160px",
                marginLeft: "20px",
                border: "none",
                borderBottom: "2px solid white",
                backgroundColor: "rgba(146, 146, 146, 0.30)",

              }}
            >
              <div style={{textAlign:'center', padding:'10px'}}>
              <GenTransaction/>
              </div>
            </div>
          </div>
          <div>
            <p>recieverId,</p>
            <div
              style={{
                height: "40px",
                width: "160px",
                marginLeft: "20px",
                border: "none",
                borderBottom: "2px solid white",
                marginTop: "2px",
                backgroundColor: "rgba(146, 146, 146, 0.30)",
                outline: "none",
              }}
            >
              <ReceiverId />
            </div>
          </div>
        </div>
        <div style={{height:'120px'}}>
        <p>receiverAccountNo</p>
        <input
          style={{
            height: "40px",
            width: "80%",
            marginLeft: "20px",
            border: "none",
            borderBottom: "2px solid white",
            marginTop: "2px",
            backgroundColor: "rgba(146, 146, 146, 0.30)",
            outline: "none",
          }}
          // placeholder="Name"
          type="text"
        />
        </div>
       <div style={{height:'120px', columnGap:'30%', display:'flex'}}>
        <div>
        <p>amount,</p>
        <input
          style={{
            height: "40px",
            width: "150px",
            marginLeft: "20px",
            border: "none",
            borderBottom: "2px solid white",
            marginTop: "2px",
            backgroundColor: "rgba(146, 146, 146, 0.30)",
            outline: "none",
          }}
          // placeholder="Name"
          type="text"
        />

        </div>
        <div>
        <p>typeOfTransaction,</p>
        <input
          style={{
            height: "40px",
            width: "70px",
            marginLeft: "20px",
            border: "none",
            borderBottom: "2px solid white",
            backgroundColor: "rgba(146, 146, 146, 0.30)",
            outline: "none",
          }}
          // placeholder="Name"
          type="text"
        />
        </div>
       </div>
        {/* <p>accountNo,</p>
    <input
          style={{
            height: "40px",
            width: "80%",
            marginLeft: "20px",
            border: "none",
            borderBottom: "2px solid white",
            marginTop: "2px",
            backgroundColor: "rgba(146, 146, 146, 0.30)",
            outline:'none'
          }}
          // placeholder="Name"
          type="text"
          
        /> */}
       
        
       
      </div>
    </>
  );
};

export default NewTransaction;
