import React from "react";
import { useRef, useState, useEffect } from "react";
import "./login.css";
import "./popup.css";
import "./forgot-password.css";
import { Link } from "react-router-dom";
import axios from "axios";

import { Message } from "./Message";
import { CheckCircleFill } from "react-bootstrap-icons";
import Alert from "../functions/Alert";

export default function Login({ trigger, setTrigger }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [usernameActive, setUsernameActive] = useState("");
  const clearInputUsername = useRef();
  const clearInputPassword = useRef();

  const [loginStatus, setLoginStatus] = useState(false);
  const [messageIfLogedIn, setMessageIfLogedIn] = useState("");
  // varible to know when to show div popup of successfully log in message
  const [loginPopup, setLoginPopup] = useState(false);
  const [ClassName, setClassName] = useState("alert-success");
  const [displayMessage, setDisplayMessage] = useState("none");

  const resSuc = () => {
    /* function to show the message "you have successfully registered" */
    setLoginPopup(false);
    setLoginPopup(true);
  };

  useEffect(() => {
    window.addEventListener("click", () => {
      setTrigger(false);
    });
  },);

  const [flag, setFlag] = useState(true); // varible messege while we login in

  const handleLoginpBtn = (username, password) => {
    setFlag(true);
    console.log(username + " ,", password);
    const url = `https://pictures-tzali.herokuapp.com/login`;
    if (loginStatus) {
      // if allredy loged in
      setFlag(false);
      setDisplayMessage("flex");
      setClassName("alert-warning");
      setMessageIfLogedIn(`you dont need to login again you are alredy in...`);
    } else {
      // if:he is not loged in let him log in
      if (flag) {
        setDisplayMessage("flex");
        setClassName("alert-primary");
        setMessageIfLogedIn("please wait while we trying to login...");
      }
      try {
        axios
          .post(url, {
            username: username,
            password: password,
          })
          .then(
            (response) => {
              if (response.data.message) {
                setFlag(false);
                setClassName("alert-danger");
                setMessageIfLogedIn(response.data.message);
              } else {
                // if login succseded
                setFlag(false);
                sessionStorage.setItem("loginStatus", true); // storin
                sessionStorage.setItem("usernameActive", username);
                // setUsernameActive(username);
                setMessageIfLogedIn(
                  <div className="alert alert-success alert-dismissible  fade show">
                    <i className="bi-check-circle-fill">
                      <CheckCircleFill />
                    </i>
                    <strong className="mx-2">
                      Hey {response.data[0].username}
                    </strong>
                    you have successfully logged in and we are happy to see you
                    here
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                    ></button>
                  </div>
                );
                setLoginStatus(true);
                console.log(response.data[0].username);
              }
              resSuc();
            },
            (err) => {
              console.log(err);
              setFlag(false);
              setMessageIfLogedIn("somthing went wrong please try again later");
              setDisplayMessage("flex");
              setClassName("alert-danger");
            }
          );
      } catch (err) {
        console.log(err);
      }
    }
  };

  return trigger ? (
    <div className="popup">
      <span onClick={() => setTrigger(false)} className="close">
        close
      </span>

      <div className="popup-inner" onClick={(e) => e.stopPropagation()}>
        <form className="login-form shadow-lg bg-white rounded card-body">
          <div onClick={() => setTrigger(false)} className="closex">
            <span className="text-x">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
              ></button>
            </span>
          </div>

          <p className="small fw-bold mt-2 pt-1 mb-0 link-register">
            Don't have an account?
            <Link
              className="link-danger"
              to="/signup"
              onClick={() => setTrigger(false)}
            >
              Register
            </Link>
          </p>
          <div className="con-form">
            <div className="user-div">
              <label htmlFor="uname" className="text-user-psw">
                <b>Username</b>
              </label>
              <input
                ref={clearInputUsername}
                type="text"
                placeholder="Enter Username"
                name="username"
                required
                className="form-control input"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="psw-div">
              <label htmlFor="psw" className="text-user-psw">
                <b>Password</b>
              </label>
              <input
                ref={clearInputPassword}
                className="form-control input"
                autoComplete="on"
                placeholder="Enter Password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="forgot-password">
              <div className="update-password">
                <div className="containerCheckbox">
                  <input
                    className="form-check-input input-checkbox"
                    id="ckb1"
                    type="checkbox"
                    name="remember-me"
                  />
                  <label className="label-checkbox">Remember me</label>
                </div>
                <div>
                  <Link
                    onClick={() => setTrigger(false)}
                    to={"forgot-password"}
                    className="txt-forgpt-password"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </div>
            <div className="buttons">
              <div>
                <button
                  onClick={() => handleLoginpBtn(username, password)}
                  type="button"
                  className="log-btn"
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
          <Alert
            message={messageIfLogedIn}
            displayMessage={displayMessage}
            classN={ClassName}
          />
        </form>
      </div>
      <Message
        message={messageIfLogedIn}
        trigger={loginPopup}
        setTrigger={setLoginPopup}
        className={ClassName}
      />
    </div>
  ) : (
    ""
  );
}
