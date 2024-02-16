import React from "react";
import "../Design/PopupWin.css";
import { IoClose } from "react-icons/io5";

const PopupAcc = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div className="overlay">
        <div className="pop-tab">
          <div></div>
          <div onClick={onClose} style={{ marginTop: "10px" }}>
            <IoClose style={{ fontSize: "20px"}} />
          </div>
        </div>
        <div className="popup-alert">
          <div className="alert-popbox"></div>
        </div>
      </div>
    </>
  );
};

export default PopupAcc;
