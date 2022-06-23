import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./categories.css";

const AllCategories = () => {
  const components = [
    //  array of all categories
    { className: "btn btn-info btn-categories", value: "Animals" },
    { className: "btn btn-info btn-categories", value: "Animals" },
    { className: "btn btn-info btn-categories", value: "Houman" },
    { className: "btn btn-info btn-categories", value: "Busnies" },
    { className: "btn btn-info btn-categories", value: "Girls" },
    { className: "btn btn-info btn-categories", value: "pealw" },
    { className: "btn btn-info btn-categories", value: "Face" },
    { className: "btn btn-info btn-categories", value: "Animals" },
    { className: "btn btn-info btn-categories", value: "Houman" },
    { className: "btn btn-info btn-categories", value: "Busnies" },
    { className: "btn btn-info btn-categories", value: "Girls" },
    { className: "btn btn-info btn-categories", value: "pealw" },
    { className: "btn btn-info btn-categories", value: "Tzlil" },
  ];

  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(width);
    // console.log(count);
  }, [count]);
  const componetsItems = [];
  // console.log(width);
  for (let index = count; index < components.length; index++) {
    // console.log(count);
    {
      componetsItems.push(
        <span key={index}>
          <Link to={"/" + components[index].value}>
            <button className={components[index].className}>
              {components[index].value}
            </button>
          </Link>
        </span>
      );
    }
  }
   // This function will scroll the window to the top 
   const scrollToRight = () => {
    window.scrollTo({
      right: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    
    <div>
      <div className="categories-images">
        <div className="categories-items">
          {count <= 0 ? (
            <span></span>
          ) : (
            <div onClick={() => setCount(count - 1)} className="previous round">
              &#8250;
            </div>
          )}

          {componetsItems}

          {count < 5 ? (
            <div onClick={() => setCount(count + 1)} className="next round">
              &#8249;
            </div>
          ) : (
            <span></span>
          )}
        </div>
      </div>

      {/* {console.log(width)} */}
    </div>
  );
};

export default AllCategories;
