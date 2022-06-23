import React, { useState } from "react";
import "./forgot-password.css";
import axios from "axios";

const UpdatePassword = () => {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [responseData, setResponseData] = useState("");
  const [errorResponse, setErrorResponseData] = useState("");
  // const handleResetPsw = ()=>{

  // }
  async function handleResetPsw() {
    try {
      const url = "http://localhost:3001/updatePassword";
      const response = await axios.post(url, { username, newPassword });
      setResponseData(response.data.message);
      setErrorResponseData(response.data.err);
    } catch (err) {
      console.error(err);
      console.log(err);
    }
  }
  return (
    <div className="component-update-password container">
      <form className="containe-reset-password">
        <div className="text-in-forgot-password">
          <h1>Forgot your password?</h1>
          <p>Enter your current username to reset your password.</p>
        </div>
        <div className="user-reset">
          <label htmlFor="uname" className="text-user-psw">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="username"
            required
            className="form-control input"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="psw-reset">
          <label htmlFor="psw" className="text-user-psw">
            <b>Enter your new password</b>
          </label>
          <input
            className="form-control input"
            type="password"
            name="password"
            autoComplete="on"
            placeholder="Enter Password"
            required
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleResetPsw}
          type="button"
          className="btn-reset btn btn-dark"
        >
          Reset your password
        </button>
      </form>
      <div className="meesege-sucssed-failled">
        {responseData !== "" && responseData !== undefined ? (
          <div className="alert alert-success">
            <strong>Success!</strong> {responseData}.
          </div>
        ) : (
          ""
        )}
        {errorResponse !== "" && errorResponse !== undefined ? (
          <div className="alert alert-danger">
            <strong>Warning!</strong> Username probrtly not exixt, make sure you entering te right username.
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default UpdatePassword;
