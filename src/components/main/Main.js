import React from "react";
import UnsplashSearch from "unsplash-search";
import { Link } from "react-router-dom";
import SearchImage from "../images/SearchImage";
import "./main.css";

export const Main = () => {
  return (
    <div>
      <SearchImage />
      <div className="container-fruit main">
        <div className="row">
          <div className="column">
            <Link to="/animal-pictures">
              <img
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt="food images"
                className="img"
              />
            </Link>

            <Link to="">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80"
                alt="food images"
                className="img"
              />
            </Link>

            <Link to="/animals-pictures">
              <img
                src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=450&q=80"
                alt="food images"
                className="img"
              />
            </Link>
            <img
              src="https://images.pexels.com/photos/1433052/pexels-photo-1433052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="food images"
              className="img"
            />
            <img
              src="https://images.pexels.com/photos/1212693/pexels-photo-1212693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="food images"
              className="img"
            />
            <img
              src="https://images.pexels.com/photos/2604929/pexels-photo-2604929.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="food images"
              className="img"
            />
          </div>
          <div className="column">
            <img
              src="https://images.pexels.com/photos/1322093/pexels-photo-1322093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="food images"
              className="img"
            />
            <img
              src="https://media.istockphoto.com/photos/jerusalem-old-city-western-wall-with-israeli-flag-picture-id641067732"
              alt="food images"
              className="img"
            />
            <img
              src="https://images.pexels.com/photos/2260800/pexels-photo-2260800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="food images"
              className="img"
            />
            <img
              src="https://images.pexels.com/photos/2097628/pexels-photo-2097628.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="food images"
              className="img"
            />
            <img
              src="https://images.pexels.com/photos/8185246/pexels-photo-8185246.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="food images"
              className="img"
            />
          </div>
          <div className="column">
            <img
              src="https://images.pexels.com/photos/1406506/pexels-photo-1406506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="food images"
              className="img"
            />
            <img
              src="https://images.pexels.com/photos/10434597/pexels-photo-10434597.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="food images"
              className="img"
            />
            <img
              src="https://images.pexels.com/photos/1390200/pexels-photo-1390200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="food images"
              className="img"
            />
            <img
              src="https://images.pexels.com/photos/5935227/pexels-photo-5935227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="food images"
              className="img"
            />
            <img
              src="https://images.pexels.com/photos/8676395/pexels-photo-8676395.jpeg"
              alt="food images"
              className="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
