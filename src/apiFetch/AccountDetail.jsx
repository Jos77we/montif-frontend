import React, { useContext, useState, useEffect } from "react";
import DataContext from "../dataProvider/DataContext";
import "../Design/SavingLayout.css";
import axios from "axios";
import { FaRegCreditCard } from "react-icons/fa6";
import { RiAccountCircleLine } from "react-icons/ri";
import PopupDeposit from "../Design/PopupDeposit";

const AccountDetail = () => {
  const { data } = useContext(DataContext);
  const { idNo } = data;

  const [bigData, setBigData] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState({
    accountNo: "",
    accountName: "",
  });
  const [openWin, setOpenWin] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(
          "https://montif-backend.onrender.com/montif/accounts/detail-accounts",
          {
            params: { idNo },
          }
        );
        setBigData(res.data.data);
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };
    fetchDetails();
  }, [idNo]);
  // console.log(details)

  const handleDepositClick = (accountNo, accountName) => {
    // Update the state with the selected accountNo and accountName
    setSelectedAccount({
      accountNo,
      accountName,
    });
    setOpenWin(true)
  };

  return (
    <>
      <div style={{ display: "flex", columnGap: "20px" }}>
        {bigData.map((details) => (
          <div
            key={details._id}
            style={{
              height: "350px",
              width: "280px",
              marginLeft: "10px",
              borderRadius: "12px",
              background: "#D6E8EE",
              boxShadow: "0 2px 8px 0 rgba(22, 36, 36, 0.79)",
            }}
          >
            <div>
              {/* Render your data here */}
              <p
                style={{
                  fontSize: "1.2rem",
                  marginLeft: "10px",
                  fontWeight: "600",
                }}
              >
                {details.accountName}
              </p>
              <div style={{ height: "160px" }}>
                <div className="category-pp">
                  <div className="category-card">
                    <FaRegCreditCard
                      style={{ fontSize: "22px", color: "white" }}
                    />
                  </div>
                  <div
                    style={{
                      height: "65px",
                      width: "3px",
                      backgroundColor: "black",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div>
                    <p>Card No</p>
                    <p>{details.cardNo}</p>
                  </div>
                </div>

                <div className="category-pp">
                  <div className="category-card">
                    <RiAccountCircleLine
                      style={{ fontSize: "22px", color: "white" }}
                    />
                  </div>
                  <div
                    style={{
                      height: "65px",
                      width: "3px",
                      backgroundColor: "black",
                      borderRadius: "4px",
                    }}
                  ></div>
                  <div>
                    <p>Account No</p>
                    <p>{details.accountNo}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "70px",
                // border: "1px black solid",
                width: "80%",
                marginLeft: "20px",
                marginTop: "25px",
                borderRadius: "16px",
              }}
            >
              <div
                style={{ height: "30px", display: "flex", columnGap: "45%" }}
              >
                <div>
                  <p style={{ fontWeight: "600" }}>Balance</p>
                </div>
                <div>
                  <p style={{ color: "green" }}>{details.amount}</p>
                </div>
              </div>
              <div
                style={{
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  columnGap: "45%",
                  marginTop: "10px",
                }}
              >
                <div>
                  <p style={{ color: "red", fontWeight: "700" }}>
                    {details.status}
                  </p>
                </div>
                <div
                  style={{
                    height: "30px",
                    width: "80px",
                    borderRadius: "8px",
                    backgroundColor: "blue",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => handleDepositClick(details.accountNo, details.accountName)}
                >
                  <p style={{ fontSize: "0.8rem", fontWeight: "600" }}>
                    Deposit
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {selectedAccount.accountNo && selectedAccount.accountName && (
          <div style={{ marginTop: "20px" }}>
            <p>Selected Account No: {selectedAccount.accountNo}</p>
            <p>Selected Account Name: {selectedAccount.accountName}</p>
          </div>
        )}
        <PopupDeposit open={openWin} onClose={() => setOpenWin(false)} accountNo={selectedAccount.accountNo} accountName={selectedAccount.accountName}/>
      </div>
    </>
  );
};

export default AccountDetail;
