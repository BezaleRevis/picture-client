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
  async function handleDeleteAccount() {
    // func handeling delete account
    const url = "http://localhost:3001/delete-account";
    try {
      const res = await axios.delete(url, {
        data: {
          username: username,
          password: password,
        },
      });
      if (res.data.message !== "your acount was successfully deleted...") {
        console.log(typeof res.data.message);
        setClassName("alert-danger");
        setMessage(res.data.message);
      }else{
        console.log("somthing");
        setClassName("alert-success");
        setMessage(res.data.message+" we are sorry you leaving us");
      }
      setDisplayMessage("flex");
    } catch (err) {
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
