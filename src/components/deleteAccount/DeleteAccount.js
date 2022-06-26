import React, { useState } from "react";
import "./deleteAccount.css";
import axios from "axios";
import Alert from "../functions/Alert";
// import { X } from "react-bootstrap-icons";
const DeleteAccount = ({ displayPopup, setDisplayPopup }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [displayMessage, setDisplayMessage] = useState("none");
  const [ClassName, setClassName] = useState("alert-success");
  const closePopup = () => {
    setDisplayPopup("none");
  };
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
  };
  const [flag, setFlag] = useState(true); // varible messege while it deleting account
  async function handleDeleteAccount() {
    setFlag(true)
    // func handeling delete account
    if (flag) {
      setDisplayMessage("flex");
      setClassName("alert-danger");
      setMessage("please wait while it deleting account");
    }
    const url = "https://pictures-tzali.herokuapp.com/delete-account";
    try {
      const res = await axios.delete(url, {
        data: {
          username: username,
          password: password,
        },config
      });
      if (res.data.message !== "your acount was successfully deleted...") {
        setClassName("alert-danger");
        setMessage("sorry we coudn't delete your account");
      } else {
        setClassName("alert-success");
        setMessage(res.data.message + " we are sorry you leaving us");
      }
      setFlag(false);
      setDisplayMessage("flex");
    } catch (err) {
      setClassName("alert-danger");
      setMessage("sorry we coudn't delete your account");
      console.log(err);
    }
  }
  return (
    <div
      style={{
        display: displayPopup,
      }}
      className="popup-body"
    >
      <div className="popup-inner-delete container">
        <button
          type="button"
          className="btn-close close-btn"
          aria-label="Close"
          onClick={() => closePopup()}
        ></button>
        <br />
        <label className="label-delete">username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          placeholder="username"
        />
        <label className="label-delete">password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="password"
        />
        <button
          className="btn btn-danger btn-delete"
          onClick={() => handleDeleteAccount()}
        >
          Delete Account
        </button>
        <Alert
          message={message}
          displayMessage={displayMessage}
          classN={ClassName}
        />
      </div>
    </div>
  );
};

export default DeleteAccount;
