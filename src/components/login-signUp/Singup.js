import axios from "axios";
import React, { useState, useRef } from "react";
import Alert from "../functions/Alert";
import "./singup.css";
import { Message } from "./Message";

export const Singup = () => {
  const [username, setUsername] = useState(""); // varible for username input
  const [password, setPassword] = useState(""); // varible for password input
  // varible for confirm password input
  const [confirmPassword, setConfirmPassword] = useState("");
  // varible that will tell the user if passwords are Match and will make sure it is
  // const [passwordsMatch, setPasswordsMatch] = useState("");
  // varible that will tell the user if usename input is empty
  const [messageUserInputEmpty, setMessageUserInputEmpty] = useState("");
  // varible that will tell the user if password input is empty
  const [messagePasswordEmpty, setMessagePasswordEmpty] = useState("");
  // varible for messeges if passwords are mathed
  const [messagePasswordConfirm, setMessagePasswordConfirm] = useState("");
  // varible for successfully ot not seccessfully registered message
  const [messageReg, setMessageReg] = useState("");
  // varible to know when to show div popup of successfully registered message
  const [loginPopup, setLoginPopup] = useState(false);
  // varibles use ref to focud
  const inputRefUser = useRef(null);
  const inputRefPassword = useRef(null);
  const inputRefConfirmPassword = useRef(null);
  const resSuc = () => {
    /* function to show the message "you have successfully registered" limit
    time after user succeeded to register */
    setLoginPopup(false);
    setLoginPopup(true);
  };

  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  const [displayMessage, setDisplayMessage] = useState("none");
  const [flag, setFlag] = useState(true); // varible messege while we regisrer
  const [ClassName, setClassName] = useState("alert-success");

  const handleSingUpBtn = (username, password) => {
    // handling on click on rgister button when user finihed to enter his details
    console.log(username + "," + password);
    if (username !== "" && password !== "") {
      console.log(username  + "empty," + password+" empty");
      // both passwords are Matched
      if (password === confirmPassword) {
        console.log(username + " == confirm," + password);
        setFlag(true);
        if (flag) {
          setDisplayMessage("flex");
          setClassName("alert-primary");
          setMessageReg("please wait while we trying to register...");
        }
        // const url = `http://localhost:3001/register?username=${username}&password=${password}`;
        const url = `https://pictures-tzali.herokuapp.com/register`;
        try {
          axios
            .post(url, {
              username: username,
              password: password,
            })
            .then((response) => {
              setFlag(false);
              console.log(response + " hey ok");
              setMessageReg(response.data);
              resSuc();
            })
            .catch((err) => {
              setClassName("alert-danger");
              setMessageReg("sorry but we couldn't register...");
              console.log(err);
            });
        } catch (err) {
          setClassName("alert-danger");
          setMessageReg("sorry but we couldn't register please try again later...");
          console.log(err);
        }
      } else {
        /* passwords are not Matched
       sending a messege to the user that passwords are not match */
       console.log(username + " == !confirm," + password);
        setMessagePasswordConfirm(
          "Password and Confirm Password do not match."
        );
        inputRefConfirmPassword.current.focus(); // in case input is epmty im using it to focus on confirmPassword input
      }
    } else {
      // on of them password input or usename input is empty
      if (username === "") {
        // username field is empty
        setMessageUserInputEmpty("Please enter a valid name!..");
        inputRefUser.current.focus(); // in case input is epmty im using it to focus on user input
        console.log("im here");
      }
      if (password === "") {
        // password field is empty
        setMessagePasswordEmpty("Please enter a valid password!..");
        inputRefPassword.current.focus(); // in case input is epmty im using it to focus on password input
      }
    }
  };
  return (
    <div className="singup">
      <form className="form_singup">
        <h1>Sign Up</h1>
        <p className="p_singup">
          Please fill in this form to create an account.
        </p>
        <hr />

        {/* username input */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="username">
            <span className="input-message">Your Username.</span>
          </label>
          <input
            type="text"
            className="form-control form-control-lg"
            id="username"
            placeholder="Your Username"
            onChange={(e) => setUsername(e.target.value)}
            ref={inputRefUser} // in case input is epmty im usung it to focus on it
          />
          <p style={{ color: "red" }}>
            {username.length === 0 ? messageUserInputEmpty : ""}
          </p>
        </div>

        {/* input for password */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="password">
            <span className="input-message">Your Password.</span>
          </label>
          <input
            type="password"
            placeholder="Your Password"
            id="password"
            className="form-control form-control-lg"
            onChange={(e) => setPassword(e.target.value)}
            ref={inputRefPassword} // in case input is epmty im usung it to focus on it
          />
          <p style={{ color: "red" }}>
            {password.length === 0 ? messagePasswordEmpty : ""}
          </p>
        </div>

        {/* confirm password */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="password">
            <span className="input-message">Confirm Your Password.</span>
          </label>
          <input
            type="password"
            placeholder="Confirm Your Password"
            // id="password"
            className="form-control form-control-lg"
            onChange={(e) => setConfirmPassword(e.target.value)}
            ref={inputRefConfirmPassword} // in case input is epmty im usung it to focus on it
          />
          <p style={{ color: "red" }}>
            {confirmPassword.length === 0 ? messagePasswordConfirm : ""}
          </p>
        </div>

        {/* register button */}
        <div className="reg-btn">
          <button
            onClick={(e) => handleSingUpBtn(username, password)}
            type="button"
            className="reg-btn btn btn-success btn-block btn-lg gradient-custom-4 text-body"
          >
            Register
          </button>
        </div>

        {/* link to form if allredy having an account */}
        <p className="text-accont-exixt">
          Have already an account?{" "}
          <a href="#!" className="login-here fw-bold ">
            <u>Login here</u>
          </a>
        </p>
        <Alert
          message={messageReg}
          displayMessage={displayMessage}
          classN={ClassName}
        />
      </form>
      {/* <button onClick={(e) => resSuc()}>click</button> */}
      <Message
        trigger={loginPopup}
        setTrigger={setLoginPopup}
        message={messageReg}
      />
    </div>
  );
};
