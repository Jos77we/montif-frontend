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
              <div className="type-boxes"></div>
              <div className="type-boxes"></div>
              <div className="type-boxes"></div>
              <div className="type-boxes"></div>
            </div>
            <div className='type-arrow'>
            <div className="scroll-left" onClick={handleScrollLeft}>
              &#9665;
            </div>
            <div className="scroll-right" onClick={handleScrollRight}>
              &#9655;
            </div>
            </div>
          </div>
          <div className="type-bottom-outline">
            <div className="category-card">
              <p>Savings account</p>
              <AccountDetail/>
              
            </div>
          </div>
        </div>
        <div className="category-layout">
          <div className="category-notification"></div>
          <div className="category-major-activity"></div>
          <div className="category-subscription"></div>
        </div>
      </div>
    </>
  );
};

export default SavingLayout;
