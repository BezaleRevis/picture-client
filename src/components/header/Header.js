import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "../login-signUp/Login"; //importing componenet popup login
import "./header.css"; // Import css
import { IconNav } from "./IconNav"; // importing the menu in navbar
import ScroolCategories from "../topScrool/ScroolCategories"; // importing the catogorgies in button nav
import Tag from "../topScrool/Tag";

import { Search } from "react-bootstrap-icons";
import "react-confirm-alert/src/react-confirm-alert.css";
import { submit } from "../functions/funcs"; // importing function sudmit(confirm logout)
import { confirmAlert } from "react-confirm-alert"; // importing boostrap alert
// import Navbar from "./Navbar";

export const Header = ({ data }) => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [valueInput, setValueInput] = useState(""); // value input from search pictures
  const [filterData, setfilterData] = useState([]);
  const [displayToggle, setDisplayToggle] = useState(""); // for icon in navbar
  const [flag, setFlag] = useState(true); // to know when to show toggle btn
  const handleFilter = (e) => {
    // function which will auto comlete search pictur in input search
    setValueInput(e.target.value);
    const searchWord = e.target.value;
    console.log(searchWord);
    const newFilter = data.filter((v) => {
      return v.value.toLowerCase().includes(searchWord.toLowerCase());
    });
    searchWord === "" ? setfilterData([]) : setfilterData(newFilter);
  };
  // const handleClickToggle = () => {
  //   displayToggle === "" || displayToggle === "none"
      // ? setDisplayToggle("flex")
  //     : setDisplayToggle("none");
  //   // setFlag(true);
  // };

  useEffect(() => {});

  return (
    <div className="header navbar">
      <div className="nav-con container-fluid">
        <div className="navbar-left">
          <div className="nav">
            <Link className="home-bottun" to={"/picture-client"}>
              <span>HOME</span>
            </Link>
          </div>
        </div>

        <div className="navbar-right">
          <div
            style={{
              display: displayToggle,
            }}
            className="small-screen-none"
          >
            <IconNav />
            {/* <!-- Search form --> */}
            <div className="input-group search-div">
              <Link to={`/${valueInput}`}>
                <button type="button" className="btn btn-primary">
                  <Search />
                </button>
              </Link>
              <div id="navbar-search-autocomplete" className="form-outline">
                <input
                  type="search"
                  placeholder="search for pictures"
                  id="form1"
                  className="form-control search-input"
                  onChange={handleFilter}
                />
                {filterData != 0 && (
                  <div className="auto-complete">
                    {filterData.slice(0, 9).map((d, i) => (
                      <Link
                        className="data-value"
                        key={i}
                        to={"/" + d.value}
                        target="_blank"
                      >
                        <Tag data={d.value} className="p" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="login-div">
              <button
                onClick={(e) => {
                  e.stopPropagation(); ///
                  if (sessionStorage.getItem("loginStatus")) {
                    // if user clicking on button "logout"
                    submit(setLoginPopup, confirmAlert); // func call model box logout
                  }
                  setLoginPopup(true);
                }}
                type="submit"
                className="btn login"
              >
                <span className="span-login">
                  {sessionStorage.getItem("loginStatus") ? "Logout" : `log in`}
                </span>
              </button>
            </div>
          </div>
          {/* <div>
            {flag ? (
              <div onClick={() => handleClickToggle()} className="toogler-icon">
                <Navbar />
              </div>
            ) : (
              ""
            )}
          </div> */}
        </div>
      </div>
      {!sessionStorage.getItem("loginStatus") && (
        <Login trigger={loginPopup} setTrigger={setLoginPopup} />
      )}
      <div className="header-categories">
        <div className="compenent-images">
          <ScroolCategories />
        </div>
      </div>
    </div>
  );
};
