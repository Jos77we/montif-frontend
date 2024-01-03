import React, { useContext, useState, useEffect } from "react";
import DataContext from "../dataProvider/DataContext";
import '../Design/SavingLayout.css'
import axios from "axios";

const AccountDetail = () => {
  const { data } = useContext(DataContext);
  const { idNo } = data;

  const [bigData, setBigData] = useState([]);
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/montif/accounts/detail-accounts",
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
  return (
    <>
      <div style={{ display: "flex", columnGap: "20px" }}>
        {bigData.map((details) => (
          <div
            key={details._id}
            style={{
              border: "1px solid black",
              height: "95%",
              width: "300px",
              marginLeft: "10px",
              borderRadius: "6px",
              backgroundColor: "rgb(202, 116, 4)",
            }}
          >
            <div>
              {/* Render your data here */}
              <p
                style={{
                  fontSize: "1.2rem",
                  marginLeft: "10px",
                  fontWeight: "600",
                  color:'white'
                }}
              >
                {details.accountName}
              </p>
              <div style={{ height: "160px", border: "1px blue solid" }}>
                <div className="category-pp">
                  <div className="category-card"></div>
                  <div
                    style={{
                      height: "65px",
                      width: "3px",
                      backgroundColor: "black",
                      borderRadius: '4px'
                    }}
                  ></div>
                  <div>
                    <p>Card No</p>
                    <p>{details.cardNo}</p>
                  </div>
                </div>

                <div className="category-pp">
                  <div className="category-card"></div>
                  <div
                    style={{
                      height: "65px",
                      width: "3px",
                      backgroundColor: "black",
                      borderRadius:'4px'
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
                height: "80px",
                border: "1px black solid",
                width: "70%",
                display: "flex",
                marginLeft: "30px",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  height: "80px",
                  width: "10px",
                  border: "1px red solid",
                }}
              ></div>
              <div>
                <p>{details.amount}</p>
              </div>
              <div>
                <p>{details.status}</p>
              </div>
            </div>
            {/* <div>
          <p>{details.lastDeposit}</p>
          <p>{details.lastWithdrawal}</p>
          </div> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default AccountDetail;
