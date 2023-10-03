import React from "react";

const LoginLayout = () => {
  return (
    <>
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
          }}
          placeholder="Name"
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
          }}
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
          }}
        />
        <div style={{marginTop:'50px'}}>
          <a href='/dashboard'>
          <button style={{height:'30px', width:'80%', marginLeft:'40px', border:'none', backgroundColor:'blue', color:'white', borderRadius:'4px'}}>Sign-in</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginLayout;
