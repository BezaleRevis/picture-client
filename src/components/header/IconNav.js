import React, { useState, useEffect } from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Github,
  Whatsapp,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import Login from "../login-signUp/Login";
import "./iconNav.css";
import { confirmAlert } from "react-confirm-alert"; // Import
import { submit } from "../functions/funcs"; // importing function sudmit(confirm logout)
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export const IconNav = () => {
  const [visible, setVisible] = useState("hidden");
  const visibility = () => {
    visible === "hidden" ? setVisible("visible") : setVisible("hidden");
  };
  useEffect(() => {
    window.addEventListener("click", () => {
      setVisible("hidden");
    });
  }, [visible]);

  const [loginPopup, setLoginPopup] = useState(false);
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <div
        className="svg-img"
        // onMouseOver={() => setVisible("visible")}
        onClick={() => visibility()}
      >
        <div className="icon-person">
          <div className="avatar-person">
            {/* <PersonCircle /> */}
            <img
              alt="avatar"
              className="js-avatar"
              src="https://www.gravatar.com/avatar/7f196c35118eb8e39bec7483e633967c?s=60&amp;d=mm"
            ></img>
          </div>

          <div className="svg-down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="div-visibility" style={{ visibility: visible }}>
        <div
          className="btn-close close"
          onClick={() => setVisible("hidden")}
        ></div>
        <div className="button-div">
          <span
            className="button-from-icon span-login"
            onClick={(e) => {
              setVisible("hidden");
              if (sessionStorage.getItem("loginStatus")) {
                // if user clicking on button "logout"
                submit(setLoginPopup, confirmAlert); // func call model box logout
              }
              setLoginPopup(true);
            }}
          >
            {sessionStorage.getItem("loginStatus") ? "Logout" : `login`}
          </span>
        </div>

        <div className="button-div">
          <Link to="/signup" className="link">
            <span className="button-from-icon">register</span>
          </Link>
        </div>

        <div className="button-div">
          <Link to="/forgot-password" className="link">
            <span className="button-from-icon">updatePassword</span>
          </Link>
        </div>
        <div className="icons button-div">
          <span className="facebook">
            <Facebook />{" "}
          </span>
          <span className="whatsapp">
            <Whatsapp />
          </span>
          <span className="instegram">
            {" "}
            <Instagram />{" "}
          </span>
          <span className="twitter">
            <Twitter />{" "}
          </span>
          <span className="github">
            <Github />{" "}
          </span>
        </div>
      </div>
      {!sessionStorage.getItem("loginStatus") && (
        <Login trigger={loginPopup} setTrigger={setLoginPopup} />
      )}
    </div>
  );
};
