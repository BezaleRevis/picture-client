import React, { useState, useEffect, useRef } from "react";
import Tag from "./Tag.js";
import "./scrool.css";
import { components } from "./categories.js"; // importing the array on categories

import { Link } from "react-router-dom";
const ScroolCategories = () => {
  const categories = components; // varible categories which have the array of categories


  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrolEnd, setscrolEnd] = useState(false); // For detecting end of scrolling
  const scrl = useRef(null);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift); // Updates the latest scrolled postion

    //For checking if the scroll has ended
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  //This will check scroll event and checks for scroll end
  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  useEffect(() => {
    //Check width of the scollings
    if (
      scrl.current &&
      scrl?.current?.scrollWidth === scrl?.current?.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
    return () => {};
  }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth]);

  return (
    <div className="container-scroll">
      {/* //Left Button */}
      {scrollX !== 0 && (
        <button className="previous round" onClick={() => slide(-50)}>
          &#8250;
        </button>
      )}
      <ul
        className="ul"
        ref={scrl}
        onScroll={scrollCheck}
        data-aos-anchor-placement="top-center"
      >
        {categories.map((d, i) => (
          <Link key={i} to={"/" + d.value}>
            <Tag data={d.value} className={d.className} />
          </Link>
        ))}
      </ul>

      {/* //Right Button */}
      {!scrolEnd && (
        <button className="next round" onClick={() => slide(+50)}>
          &#8249;
        </button>
      )}
    </div>
  );
};

export default ScroolCategories;
