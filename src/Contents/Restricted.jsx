import React from "react";
import { InfoCircleOutlined } from "@ant-design/icons";

const Restricted = () => {
  //const name = props.name

  return (
    <>
      <div
        style={{
          height: "92vh",
          backgroundColor: "rgba(211, 217, 220, 0.75)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "80vh",
            width: "40%",
            backgroundColor: "ghostwhite",
            borderRadius: "10px",
            boxShadow: "0 2px 8px 0 rgba(22, 36, 36, 0.79)",
          }}
        >
          <div
            style={{
              height: "40%",
              width: "60%",
              marginLeft: "auto",
              marginRight: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10%",
            }}
          >
            <InfoCircleOutlined
              style={{ fontSize: "120px", marginTop: "10%", color: "red" }}
            />
          </div>
          <div style={{ padding: "50px 40px" }}>
            <p
              style={{
                textAlign: "center",
                fontSize: "1.05rem",
                fontWeight: "600",
              }}
            >
              Your account is not yet approved for this feature. We are working
              to ensure your request is approved
            </p>
            <p style={{ textAlign: "center" }}>
              For more infornation contact us
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Restricted;
