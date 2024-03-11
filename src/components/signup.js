import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import "./signup.css";

const SignUp = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "79474543031-tmjo35916ufn421ej3u1i2ljao2apr4s.apps.googleusercontent.com",
        scope: "",
      });
    }
    gapi.load("client: auth2", start);
  });

  const [popupStyle, showPopup] = useState("hide");

  const popup = () => {
    showPopup("login-popup");
    setTimeout(() => showPopup("hide"), 3000);
  };

  const onSuccess = (e) => {
    alert("User signed in");
    console.log(e);
  };

  const onFailure = (e) => {
    alert("User sign in Failed");
    console.log(e);
  };

  return (
    <div className="cover">
      <h1>Registration</h1>
      <div className="underline"></div>
      <div className="icon">
        <i class="fa fa-user-o" aria-hidden="true"></i>
        <input name="name" type="text" placeholder="Name" />
      </div>
      <div className="icon">
        <i class="fa fa-university" aria-hidden="true"></i>

        <input name="college" type="text" placeholder="College" />
      </div>
      <div className="icon">
        <i class="fa fa-calendar" aria-hidden="true"></i>

        <input name="year" type="number" placeholder="Year of studying" />
      </div>
      <div className="icon">
        <i class="fa fa-book" aria-hidden="true"></i>

        <input name="department" type="text" placeholder="Department" />
      </div>
      <div className="icon">
        <i class="fa fa-id-card-o" aria-hidden="true"></i>

        <input name="roll" type="number" placeholder="Roll No." />
      </div>
      <div className="icon">
        <i class="fa fa-envelope-o" aria-hidden="true"></i>

        <input name="email" type="email" placeholder="Email id" />
      </div>
      <div className="icon">
        <i class="fa fa-mobile" aria-hidden="true"></i>

        <input name="phoneNumber" type="tel" placeholder="Phone Number" />
      </div>

      <div className="login-btn" onClick={popup}>
        Sign Up
      </div>

      {/* <p className="text" >Or sign up using</p> */}

      

      {/* <div className={popupStyle}>
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div> */}
    </div>
  );
};

export default SignUp;
