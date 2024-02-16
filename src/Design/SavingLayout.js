import React, { useRef, useState } from "react";
import "./SavingLayout.css";
import AccountDetail from "../apiFetch/AccountDetail";
import PopupAcc from "./PopupAcc";
import { MdOutlineSavings } from "react-icons/md";
import { FaUnlock } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FcDataProtection } from "react-icons/fc";
import { MdAdd } from "react-icons/md";
import { IoWaterOutline } from "react-icons/io5";
import { TbSunElectricity } from "react-icons/tb";
import { SiNetflix } from "react-icons/si";
import { FaAmazonPay } from "react-icons/fa6";
//import AccountNo from "../autoGenerate/AccountNo";

const SavingLayout = () => {

  const [openWin, setOpenWin] = useState(false);
  

  const containerRef = useRef(null);

  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -100,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 100,
        behavior: "smooth",
      });
    }
  };

 
  return (
    <>
      <div className="saving-outline">
        <div className="type-layout">
          <div className="type-top-outline-cont">
            <div className="type-top-outline" ref={containerRef}>
              <div className="type-boxes">
                <p
                  style={{
                    marginLeft: "10px",
                    color: "white",
                    fontSize: "1.1rem",
                  }}
                >
                  Savings Account
                </p>
                <div
                  style={{
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    columnGap: "20px",
                  }}
                >
                  <MdOutlineSavings
                    style={{
                      fontSize: "24px",
                      marginLeft: "10px",
                      color: "white",
                    }}
                  />
                  <p style={{ color: "white" }}>Limitless saving</p>
                </div>
                <div style={{ height: "40px" }}>
                  <div
                    style={{
                      height: "30px",
                      width: "30px",
                      backgroundColor: "grey",
                      borderRadius: "8px",
                      marginLeft: "80%",
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                    onClick={() => setOpenWin(true)}
                  >
                    <MdAdd style={{fontSize:'20px', color:'white'}}/>
                  </div>
                </div>
              </div>
              <div className="type-boxes">
                <p
                  style={{
                    marginLeft: "10px",
                    color: "white",
                    fontSize: "1.1rem",
                  }}
                >
                  Fixed-Deposit Account
                </p>
                <div
                  style={{
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    columnGap: "20px",
                  }}
                >
                  <FaUnlock
                    style={{
                      fontSize: "24px",
                      marginLeft: "10px",
                      color: "white",
                    }}
                  />
                  <p style={{ color: "white" }}>Lock your Funds</p>
                </div>
                <div style={{ height: "40px" }}>
                  <div
                    style={{
                      height: "30px",
                      width: "30px",
                      backgroundColor: "grey",
                      borderRadius: "8px",
                      marginLeft: "80%",
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <MdAdd style={{fontSize:'20px', color:'white'}}/>
                  </div>
                </div>
              </div>
              <div className="type-boxes">
                <p
                  style={{
                    marginLeft: "10px",
                    color: "white",
                    fontSize: "1.1rem",
                  }}
                >
                  Investment Account
                </p>
                <div
                  style={{
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    columnGap: "20px",
                  }}
                >
                  <FaMoneyBillTrendUp
                    style={{
                      fontSize: "24px",
                      marginLeft: "10px",
                      color: "white",
                    }}
                  />
                  <p style={{ color: "white" }}>Grow your funds</p>
                </div>
                <div style={{ height: "40px" }}>
                  <div
                    style={{
                      height: "30px",
                      width: "30px",
                      backgroundColor: "grey",
                      borderRadius: "8px",
                      marginLeft: "80%",
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  ><MdAdd style={{fontSize:'20px', color:'white'}}/></div>
                </div>
              </div>
              <div className="type-boxes">
                <p
                  style={{
                    marginLeft: "10px",
                    color: "white",
                    fontSize: "1.1rem",
                  }}
                >
                  Insurance Account
                </p>
                <div
                  style={{
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    columnGap: "20px",
                  }}
                >
                  <FcDataProtection
                    style={{ fontSize: "24px", marginLeft: "10px" }}
                  />
                  <p style={{ color: "white" }}>Limitless saving</p>
                </div>
                <div style={{ height: "40px" }}>
                  <div
                    style={{
                      height: "30px",
                      width: "30px",
                      backgroundColor: "grey",
                      borderRadius: "8px",
                      marginLeft: "80%",
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  ><MdAdd style={{fontSize:'20px', color:'white'}}/></div>
                </div>
              </div>
            </div>
            <div className="type-arrow">
              <div className="scroll-left" onClick={handleScrollLeft}>
                {/* &#9665; */}
                <div className="circle-press"></div>
              </div>
              <div className="scroll-right" onClick={handleScrollRight}>
                {/* &#9655; */}
                <div className="circle-press1"></div>
              </div>
            </div>
            <PopupAcc open={openWin} onClose={() => setOpenWin(false)} />
          </div>
          <div className="type-bottom-outline">
            <div>
              <AccountDetail />
            </div>
          </div>
        </div>
        <div className="category-layout">
          <div className="category-notification">
            <p
              style={{
                padding: "10px",
                fontSize: "1.2rem",
                fontWeight: "700",
                color: "white",
              }}
            >
              Notifications
            </p>
          </div>
          <div className="category-major-activity">
            <div
              style={{
                height: "50px",
                // border: "1px black solid",
                display: "flex",
              }}
            >
              <p
                style={{
                  margin: "10px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                Utility & Bills
              </p>
            </div>
            <div className="not-box">
              <div className="icon-enclose"><IoWaterOutline style={{color:'white'}}/></div>
              <div style={{ minWidth: "70px" }}>
                <p>Water</p>
              </div>
              <p>$100.00</p>
            </div>
            <div className="not-box">
              <div className="icon-enclose"><TbSunElectricity style={{color:'white'}}/></div>
              <div style={{ minWidth: "70px" }}>
                <p>Electricity</p>
              </div>
              <p>$75.50</p>
            </div>
            <div className="not-box">
              <div className="icon-enclose"><SiNetflix style={{color:'red'}}/></div>
              <div style={{ minWidth: "70px" }}>
                <p>Netflix</p>
              </div>
              <p>$49.99</p>
            </div>
            <div className="not-box">
              <div className="icon-enclose"><FaAmazonPay style={{color:'white'}}/></div>
              <div style={{ minWidth: "70px" }}>
                <p>Amazon Pay</p>
              </div>
              <p>$250.00</p>
            </div>
          </div>
          <div className="category-subscription">
            <div
              style={{
                height: "60px",
                // border: "1px black solid",
                display: "flex",
              }}
            >
              <p
                style={{
                  margin: "10px",
                  fontSize: "0.9rem",
                  fontWeight: "600",
                }}
              >
                Pending Bills
              </p>
            </div>
            <div className="not-box">
              <div className="icon-enclose"></div>
              <div style={{ minWidth: "70px" }}>
                <p>Mortgage</p>
              </div>
              <p>$699.99</p>
            </div>
            <div className="not-box">
              <div className="icon-enclose"></div>
              <div style={{ minWidth: "70px" }}>
                <p>Insurance</p>
              </div>
              <p>$250.00</p>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavingLayout;
