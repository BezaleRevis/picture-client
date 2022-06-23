import axios from "axios";
import React, { useState } from "react";
import { Unsplashimage } from "./Unsplashimage";
import "../categories/categories.css";
// import AllCategories from "../categories/AllCategories";

import "./search.css";
import { Search } from "react-bootstrap-icons";
import { Message } from "../login-signUp/Message";
import { Link } from "react-router-dom";
const SearchImage = () => {
  const [photo, setPhoto] = useState(""); // kind of photo to user choiced
  const [clientId, setClientId] = useState(
    "2excYI0AfsK_ltD1H-BmPWnxVUkVNe97h_2TuJl6wJk"
  );
  const apiUnsplash = "https://api.unsplash.com";
  const [result, setResult] = useState([]); // array of of pictures i get from the api
  const [isLoading, setLoading] = useState(false); // to know if its loading the pictures
  const [error, setError] = useState(null); // if there is a error

  const handleChance = (e) => {
    // func getting the value from search
    setPhoto(e.target.value);
  };
  const handleSudmit = (e) => {
    // handling the photos user want to see
    setLoading(true);
    const url = `${apiUnsplash}/search/photos?page=1&query=${photo}&client_id=${clientId}&count=50`;
    axios.get(url).then(
      (response) => {
        setResult(response.data.results);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.log(err);
        if (err.name === "AbortError") {
          console.log("fetchAborted");
        } else {
          setLoading(false);
          setError(
            `Sorry something went wrong we couldnt find the pictures your'a locking for\n
            ${err}`
          );
        }
      }
    );
  };
  const [bordeColor, setBorderColor] = useState("255,255,255,.2"); // varible for border input
  const [color, setColor] = useState("white"); //varible for input search if focused chabce the color
  const onFocus = () => {
    // function which let me know when input is on focys
    setColor("rgba(0, 0, 0, 0.1)");
    setBorderColor("white");
  };
  const onBlur = () => {
    // function which let me know when input is not on focys
    setColor("rgba(255,255,255,.2)");
    setBorderColor("rgba(0, 0, 0, 0.1)");
  };

  // varible to know when to show div popup of successfully registered message
  const [loginPopup, setLoginPopup] = useState(false);
  const errorMessage = () => {
    /* function to show the message "error message" limit
      time after is throwing an error to user */
    if (error !== null) {
      setTimeout(() => {
        setLoginPopup(false);
      }, 6000);
      setLoginPopup(true);
    }
  };
  // creating varible to know when user is on hower on button category
  const [flagOnHowerCategories, setFlagCategories] = useState(false);
  const onHowerBtnAllCategories = () => {
    setFlagCategories(true);
    // setFlagCategories ? setFlagCategories(true) : setFlagCategories(false);
  };
  return (
    <div className="search">
      <div className="div-search-img bg-image">
        <div className="main-logo">
          <div className="navbar-header">
            <Link to="/" className="logo" href="/">
              <span className="logo-fN">Bezalel</span>
              <span className="logo-lN">Revis</span>
            </Link>
          </div>
          <div
            className="con-search"
            style={{
              backgroundColor: "white",
              color:"black",
              border: `1px solid ${bordeColor}`,
            }}
          >
            <button
              onClick={handleSudmit}
              type="button"
              className="btn btn-primary btn-search"
            >
              <span className="text-center">
                <Search />
              </span>
            </button>
            <input
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={handleChance}
              onKeyUp={handleSudmit}
              onKeyDown={errorMessage}
              type="search"
              className="input-search input-ol"
              placeholder="Search by images name, like Dogs, category, tag..."
            />
          </div>
        </div>
      </div>
      <div className="search-pictures container-fruid">
        {error && (
          <div className="text-center text-warning">
            {/* {errorMessage} */}
            <Message
              message={error}
              trigger={loginPopup}
              setTrigger={setLoginPopup}
            />
          </div>
        )}
        {isLoading && (
          <div className="hey-load">
            <div className="loading">
              <div className="loader"></div>
              <span className="loading-span">
                Plaese wait while we loading your results...
              </span>
            </div>
          </div>
        )}
        {result &&
          result.map((image, i) => (
            <div key={image.id} className="coulmn-result">
              <Unsplashimage url={image.urls.small} />
            </div>
          ))}
      </div>
    </div>
  );
};
export default SearchImage;
