import React, { useState } from "react";
import "./login.css";
import carousel from "../../assets/banner.jpg";
import logo from "../../assets/insta.png";
import playstore from "../../assets/playstore.png";
import microsoft from "../../assets/microsoft.png";
import axios from "axios";


export default function Login() {
    const [formData, setFormData] = useState({});

    const handleChange = (e) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    };
    const signin = async () => {
      const resp = await axios.post("http://localhost:8080/login", formData);
  
      console.log(resp);
      if (resp.status === 200) {
        console.log("login successfull");
        localStorage.setItem("token", resp.data.token);
      }
    };
  return (
    <div>
      <div className="main-container">
        <div className="mobile carousel">
          <img src={carousel} alt="" />
        </div>
        <div className="login-container">
          <div className="login-details">
            <img src={logo} alt="" />
            <div className="input-container">
              <input
                type="text"
                placeholder="Phone number, username or email"
              
              name="username"
              onChange={handleChange}></input>
              <br />
              <input type="text" placeholder="Password"
               name="password"
               onChange={handleChange}></input>
              <button className="login" onClick={signin}>Log In</button>
            </div>
            <div className="breaker">
              <hr className="smallhr" />
              <span
                style={{
                  verticalAlign: "top",
                  opacity: "0.5",
                  fontWeight: "bold",
                }}
              >
                OR
              </span>
              <hr className="smallhr" />
              <p className="tplogin">Log in with Facebook</p>
              <p className="smallfont">Forgot Password</p>
            </div>
            <div className="action-signup">
              <p>
                Don't have an account{" "}
                <span style={{ color: "dodgerblue", fontWeight: "bold" }}>
                  Sign up
                </span>
              </p>
            </div>
            <div className="action-app">
                <p>Get the app.</p>
                <div className="app-banner">
                    <img src={playstore} alt="" />
                    <img src={microsoft} alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}