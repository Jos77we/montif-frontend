import React, { useState } from "react";
import "./SignUpForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const Form1 = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    country: "",
    phoneNo: "",
    idNo: "",
    addressLine: "",
    postalCode: "",
    field: "",
    occupation: "",
    company: "",
    salaryRange: "",
    password: "",
    securityQue: "",
    securityAns: "",
  });

  const url = "https://montif-backend.onrender.com/montif/newUser/user";
  const nav = useNavigate();

  const handleInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleSubmit = async (e) => {
    try {
      const res = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      if (res.status === 200) {
        nav("/dashboard");
      }

      //console.log(res)
    } catch (error) {
      alert("Error login in. Please try again.");
    }
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div style={{ height: "80px" }}>
              <p
                style={{
                  fontSize: "1.5rem",
                  marginLeft: "50px",
                  fontWeight: "500",
                }}
              >
                Personal Information
              </p>
            </div>
            <div
              style={{
                height: "60px",
                width: "70%",
                marginLeft: "30px",
                marginTop: "5px",
              }}
            >
              <p className="input-text">Full Name</p>
              <input
                className="input-layout"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInput}
              />
            </div>

            <div
              style={{
                height: "60px",
                width: "70%",
                marginLeft: "30px",
                marginTop: "5px",
              }}
            >
              <p className="input-text">Age</p>
              <input
                className="input-layout"
                type="text"
                name="age"
                value={formData.age}
                onChange={handleInput}
              />
            </div>

            <div
              style={{
                height: "60px",
                width: "70%",
                marginLeft: "30px",
                marginTop: "10px",
              }}
            >
              <p className="input-text">Email</p>
              <input
                type="text"
                className="input-layout"
                name="email"
                value={formData.email}
                onChange={handleInput}
              />
            </div>
            <div
              style={{
                height: "60px",
                display: "flex",
                gridTemplateColumns: "auto",
                columnGap: "60px",
                marginTop: "10px",
              }}
            >
              <div>
                <div
                  style={{
                    height: "60px",
                    width: "200px",
                    marginLeft: "30px",
                  }}
                >
                  <p className="input-text">Country</p>
                  <input
                    type="text"
                    style={{
                      height: "30px",
                      width: "220px",
                      marginTop: "-6px",
                      borderRadius: "4px",
                      border: "1px solid grey",
                      backgroundColor: "rgba(221, 221, 221, 0.548)",
                    }}
                    name="country"
                    value={formData.country}
                    onChange={handleInput}
                  />
                </div>
              </div>
              <div>
                <div
                  style={{
                    height: "60px",
                    width: "200px",
                  }}
                >
                  <p className="input-text">Phone Number</p>
                  <input
                    type="text"
                    style={{
                      height: "30px",
                      width: "65%",
                      marginTop: "-6px",
                      borderRadius: "4px",
                      border: "1px solid grey",
                      backgroundColor: "rgba(221, 221, 221, 0.548)",
                    }}
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleInput}
                  />
                </div>
              </div>
            </div>
            <div
              style={{
                height: "60px",
                width: "70%",
                marginLeft: "30px",
                marginTop: "10px",
              }}
            >
              <p className="input-text">Id Number</p>
              <input
                type="text"
                className="input-layout"
                name="idNo"
                value={formData.idNo}
                onChange={handleInput}
              />
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div style={{ height: "50px" }}>
              <p
                style={{
                  fontSize: "1.5rem",
                  marginLeft: "60px",
                  fontWeight: "500",
                }}
              >
                Personal Information
              </p>
            </div>

            <div
              style={{
                height: "60px",
                width: "70%",
                marginLeft: "30px",
                marginTop: "5px",
              }}
            >
              <p className="input-text">Postal Code</p>
              <input
                type="text"
                className="input-layout"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInput}
              />
            </div>
            <div
              style={{
                height: "60px",
                width: "70%",
                marginLeft: "30px",
                marginTop: "5px",
              }}
            >
              <p
                style={{
                  marginTop: "0px",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                }}
              >
                Field
              </p>
              <input
                type="text"
                className="input-layout"
                name="field"
                value={formData.field}
                onChange={handleInput}
              />
            </div>
            <div
              style={{
                height: "60px",
                width: "70%",
                marginLeft: "30px",
                marginTop: "5px",
              }}
            >
              <p className="input-text">Occupation</p>
              <input
                type="text"
                className="input-layout"
                name="occupation"
                value={formData.occupation}
                onChange={handleInput}
              />
            </div>
            <div
              style={{
                height: "60px",
                width: "70%",
                marginLeft: "30px",
                marginTop: "5px",
              }}
            >
              <p className="input-text">Company</p>
              <input
                type="text"
                className="input-layout"
                name="company"
                value={formData.company}
                onChange={handleInput}
              />
            </div>
            <div
              style={{
                height: "60px",
                width: "70%",
                marginLeft: "30px",
                marginTop: "5px",
              }}
            >
              <p className="input-text">Salary</p>
              <input
                type="text"
                className="input-layout"
                name="salaryRange"
                value={formData.salaryRange}
                onChange={handleInput}
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div style={{ height: "50px" }}>
              <p
                style={{
                  fontSize: "1.5rem",
                  marginLeft: "60px",
                  fontWeight: "500",
                }}
              >
                Security Information
              </p>
            </div>

            <div
              style={{
                height: "60px",
                width: "70%",
                marginLeft: "30px",
                marginTop: "15px",
              }}
            >
              <p className="input-text">Address line</p>
              <input
                type="text"
                className="input-layout"
                name="addressLine"
                value={formData.addressLine}
                onChange={handleInput}
              />
            </div>
            <div
              style={{
                height: "60px",
                width: "70%",
                marginLeft: "30px",
                marginTop: "10px",
              }}
            >
              <p className="input-text">Password</p>
              <input
                type="password"
                className="input-layout"
                name="password"
                value={formData.password}
                onChange={handleInput}
              />
            </div>
            <div
              style={{
                height: "60px",
                width: "70%",
                marginLeft: "30px",
                marginTop: "10px",
              }}
            >
              <p className="input-text">Confirm Passord</p>
              <input className="input-layout" />
            </div>
            <div
              style={{
                height: "60px",
                width: "70%",
                marginLeft: "30px",
                marginTop: "10px",
              }}
            >
              <p className="input-text">Security Question</p>
              <input
                type="text"
                className="input-layout"
                name="securityQue"
                value={formData.securityQue}
                onChange={handleInput}
              />
            </div>
            <div
              style={{
                height: "60px",
                width: "70%",
                marginLeft: "30px",
                marginTop: "10px",
              }}
            >
              <p className="input-text">Security Answer</p>
              <input
                type="text"
                className="input-layout"
                name="securityAns"
                value={formData.securityAns}
                onChange={handleInput}
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  // const contentToRender = content ? nextItem : personalDetail;
  return (
    <>
      <div>
        {renderFormStep()}
        {step < 3 && (
          <Button
            type="primary"
            onClick={handleNextStep}
            style={{ marginTop: "20px", marginLeft: "30px" }}
          >
            Next
          </Button>
        )}
        {step === 3 && (
          <Button
            type="primary"
            onClick={handleSubmit}
            style={{ marginTop: "20px", marginLeft: "30px" }}
          >
            Submit
          </Button>
        )}
      </div>
    </>
  );
};

export default Form1;
