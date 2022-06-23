import React, { } from "react";
import "./images.css";

export const Unsplashimage = ({url }) => {
    // const { tabIndex } = key.props;
    return (
        <div className="div-img">
            <figure
                className="figure"
            >
                <img
                    className="img"
                    src={url}
                    
                    alt="images"
                    responsive="true"
                />
            </figure>
        </div>
    );
};
