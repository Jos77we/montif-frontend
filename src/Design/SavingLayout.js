import React, { useRef } from "react";
import "./SavingLayout.css";
import AccountDetail from "../apiFetch/AccountDetail";

const SavingLayout = () => {
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
          SavingLayout
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
          </div>
          <div className="type-bottom-outline">
            <div>
              <AccountDetail />
            </div>
          </div>
        </div>
        <div className="category-layout">
          <div className="category-notification"></div>
          <div className="category-major-activity">
            <div
              style={{
                height: "50px",
                // border: "1px black solid",
                display: "flex",
              }}
            >
              <p>Utility & Bills</p>
            </div>
            <div className="not-box">
              <div className="icon-enclose"></div>
              <div style={{minWidth:'70px'}}><p>Water</p></div>
              <p>$100.00</p>
            </div>
            <div className="not-box">
              <div className="icon-enclose"></div>
              <div style={{minWidth:'70px'}}><p>Electricity</p></div>
              <p>$75.50</p>
            </div>
            <div className="not-box">
              <div className="icon-enclose"></div>
              <div style={{minWidth:'70px'}}><p>Netflix</p></div>
              <p>$49.99</p>
            </div>
            <div className="not-box">
              <div className="icon-enclose"></div>
              <div style={{minWidth:'70px'}}><p>Amazon Pay</p></div>
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
              <p>Pending Bills</p>
            </div>
            <div className="not-box">
              <div className="icon-enclose"></div>
            </div>
            <div className="not-box">
              <div className="icon-enclose"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavingLayout;
