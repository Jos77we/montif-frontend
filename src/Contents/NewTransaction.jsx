import React, { useState, useContext } from "react";
import "../Design/PopupWin.css";
import axios from "axios";
import ReceiverId from "../autoGenerate/ReceiverId";
//import GenTransaction from "../autoGenerate/GenTransaction";
import DataContext from "../dataProvider/DataContext";
import { Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const NewTransaction = () => {
  const { data } = useContext(DataContext);
  const { name } = data;
  const { idNo } = data;

  // console.log(recId)
  // console.log(transId)

  // const genId = GenTransaction();

  const [randomCharacters, setRandomCharacters] = useState(" ");

  const s1 = [
    "A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y",
    "Z",
  ];

  const s2 = [
    "a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y",
    "z",
  ];

  let x = Math.floor(Math.random() * 1000 + 25);
  let y = Math.floor(Math.random() * 100 + 15);

  useEffect(() => {
    // Function to generate random characters
    const generateRandomCharacters = () => {
      const getRandomChars = () => {
        const uniqueChars = new Set();
        while (uniqueChars.size < 2) {
          const randomIndex = Math.floor(Math.random() * s1.length);
          uniqueChars.add(s1[randomIndex]);
        }
        return Array.from(uniqueChars).join("");
      };

      const getRandomCs = () => {
        const uniqueChars = new Set();
        while (uniqueChars.size < 4) {
          const randomIndex1 = Math.floor(Math.random() * s2.length);
          uniqueChars.add(s2[randomIndex1]);
        }
        return Array.from(uniqueChars).join("");
      };

      const randomChars = getRandomChars();
      const randomCs = getRandomCs();
      const generatedRandomCharacters = randomChars + x + randomCs + y;
      setRandomCharacters(generatedRandomCharacters);
    };

    generateRandomCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // No dependency array

  const [formData, setFormData] = useState({
    name: name,
    idNo: idNo,
    receiverId: randomCharacters,
    transactionId: ReceiverId(),
    amount: "",
    accountNo: "",
    receiverAccountNo: "",
    typeOfTransaction: "",
  });

  const transactionCharacters = ReceiverId();

  const [load, setLoad] = useState("Submit");

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };

  const url = "http://localhost:3000";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoad(<LoadingOutlined />);
      const res = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status === 200) {
        alert("Transaction successful");
      }
    } catch (error) {
      alert("Error Occured");
    }
  };

  return (
    <>
      <div className="popup-input" style={{ height: "85%" }}>
        <div
          style={{
            height: "60px",
            width: "50%",
            borderBottom: "2px solid #04742a",
            marginLeft: "20px",
          }}
        >
          <p
            style={{
              fontSize: "1.4rem",
              fontWeight: "620",
              padding: " 30px 0px",
            }}
          >
            New Transaction
          </p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div
            style={{
              height: "120px",
              width: "95%",
              display: "flex",
              columnGap: "40px",
              borderBottom: "2px solid black",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div style={{ marginTop: "10px" }}>
              <p style={{ marginLeft: "20px", fontWeight: "600" }}>
                Transaction ID{" "}
              </p>
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
                <div
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    fontWeight: "700",
                  }}
                >
                  {randomCharacters}
                </div>
              </div>
            </div>
            <div style={{ marginTop: "10px" }}>
              <p style={{ marginLeft: "20px", fontWeight: "600" }}>
                Reciever ID
              </p>
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
                <div
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    fontWeight: "700",
                  }}
                >
                  <ReceiverId />
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: "80px" }}>
            <p style={{ marginLeft: "20px", fontWeight: "600" }}>AccountNo</p>
            <input
              style={{
                height: "40px",
                width: "60%",
                marginLeft: "20px",
                border: "none",
                borderBottom: "2px solid white",
                marginTop: "2px",
                backgroundColor: "rgba(146, 146, 146, 0.30)",
                borderRadius: "6px",
              }}
              // placeholder="Name"
              type="text"
              name="accountNo"
              value={formData.accountNo}
              onChange={handleInput}
            />
          </div>
          <div style={{ height: "80px" }}>
            <p style={{ marginLeft: "20px", fontWeight: "600" }}>
              Receiver AccountNo
            </p>
            <input
              style={{
                height: "40px",
                width: "60%",
                marginLeft: "20px",
                border: "none",
                borderBottom: "2px solid white",
                marginTop: "2px",
                backgroundColor: "rgba(146, 146, 146, 0.30)",
                borderRadius: "6px",
              }}
              // placeholder="Name"
              type="text"
              name="receiverAccountNo"
              value={formData.receiverAccountNo}
              onChange={handleInput}
            />
          </div>
          <div style={{ height: "90px", columnGap: "50px", display: "flex" }}>
            <div style={{ padding: "0px 5px" }}>
              <p style={{ marginLeft: "20px", fontWeight: "600" }}>Amount</p>
              <input
                style={{
                  height: "40px",
                  width: "150px",
                  marginLeft: "20px",
                  border: "none",
                  borderBottom: "2px solid white",
                  marginTop: "2px",
                  backgroundColor: "rgba(146, 146, 146, 0.30)",
                  borderRadius: "6px",
                  outline: "none",
                }}
                // placeholder="Name"
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleInput}
              />
            </div>
            <div>
              <p style={{ marginLeft: "20px", fontWeight: "600" }}>
                Transaction Type
              </p>
              <input
                style={{
                  height: "40px",
                  width: "100px",
                  marginLeft: "20px",
                  border: "none",
                  borderBottom: "2px solid white",
                  backgroundColor: "rgba(146, 146, 146, 0.30)",
                  borderRadius: "6px",
                  outline: "none",
                }}
                // placeholder="Name"
                type="text"
                name="typeOfTransaction"
                value={formData.typeOfTransaction}
                onChange={handleInput}
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

          <div style={{ height: "30px", marginTop: "8px" }}>
            <Button
              style={{
                height: "30px",
                width: "80px",
                margin: "10px 75%",
                background: "blue",
                borderRadius: "6px",
                border: "none",
                color: "white",
              }}
              type="primary"
              htmlType="submit"
              
            >
              {load}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewTransaction;
