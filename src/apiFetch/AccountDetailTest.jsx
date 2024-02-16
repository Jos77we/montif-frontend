import React, { useEffect, useState, useContext } from "react";
import DataContext from "../dataProvider/DataContext";
import axios from "axios";

const AccountDetailTest = () => {
  const { data } = useContext(DataContext);
  const { idNo } = data;
  const [bigData, setBigData] = useState([]);

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

  return (
    <>
      <div style={{ display: "flex", columnGap: "10px" }}>
        {bigData.map((details) => (
          <div
            key={details._id}
            style={{ border: "1px solid black", height: "100%", width: "70%" }}
          >
            <div>
              {/* Render your data here */}
              <p
                style={{
                  fontSize: "1.2rem",
                  marginLeft: "10px",
                  fontWeight: "700",
                }}
              >
                {details.accountName}
              </p>
              <div style={{ height: "160px", border: "1px blue solid" }}>
                <div
                  style={{
                    height: "80px",
                    width: "90%",
                    border: "1px blue solid",
                    display: "flex",
                    columnGap: "5px",
                    alignItems: "center",
                    marginLeft: "20px",
                  }}
                >
                  <div
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      backgroundColor: "grey",
                      marginLeft: "10px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "65px",
                      width: "5px",
                      backgroundColor: "black",
                    }}
                  ></div>
                  <div>
                    <p>Card No</p>
                    <p>{details.cardNo}</p>
                  </div>
                </div>

                <div
                  style={{
                    height: "80px",
                    width: "90%",
                    border: "1px blue solid",
                    display: "flex",
                    columnGap: "40px",
                    alignItems: "center",
                    marginLeft: "20px",
                  }}
                >
                  <div
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "50%",
                      backgroundColor: "grey",
                      marginLeft: "20px",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "65px",
                      width: "5px",
                      backgroundColor: "black",
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

export default AccountDetailTest;
