import React from "react";
import useFetch from "../useFetch/useFetch";
import { Unsplashimage } from "./Unsplashimage";
import "./images.css";

const Nature  = () => {
    const apiUnsplash = "https://api.unsplash.com";
    //   const accessKey = process.env.REACT_APP_ACCESSKEY;
    const accessKey = "2excYI0AfsK_ltD1H-BmPWnxVUkVNe97h_2TuJl6wJk";
    //   console.log(accessKey);
    const {
      data: images,
      error,
      isLoading,
    } = useFetch(
      `${apiUnsplash}/photos/random?query=nature&client_id=${accessKey}&count=50`
    );
    const {
      data: images1,
      error1,
      isLoading1,
    } = useFetch(
      `${apiUnsplash}/photos/random?query=nature-images&client_id=${accessKey}&count=50`
    );
  
    const {
      data: images2,
      error2,
      isLoading2,
    } = useFetch(
      `${apiUnsplash}/photos/random?query=nature-girls&client_id=${accessKey}&count=50`
    );
    return (
        <div className="container-fruid con-pictures">
          <div className="row-gallery">
            <div className="coulmn-gallery" >
              {error && <div className="err"> {error} </div>}
              {isLoading && (
                <div className="loading">
                  <div className="loader"></div>
                  <span className="loading-span">
                    Plaese wait while we loading your results...
                  </span>
                </div>
              )}
    
              {images &&
                images.map((image) => (
                  <Unsplashimage url={image.urls.small} key={image.id} />
                ))}
            </div>
    
            <div className="coulmn-gallery">
              {error1 && <div className="err"> {error1} </div>}
              {isLoading1 && (
                <div className="loading">
                  <div className="loader"></div>
                </div>
              )}
              {images1 &&
                images1.map((image) => (
                  <Unsplashimage url={image.urls.small} key={image.id} />
                ))}
            </div>
    
            <div className="coulmn-gallery">
              {error2 && <div className="err"> {error} </div>}
              {isLoading2 && (
                <div className="loading">
                  <div className="loader"></div>
                </div>
              )}
              {images2 &&
                images2.map((image) => (
                  <Unsplashimage url={image.urls.small} key={image.id} />
                ))}
            </div>
          </div>
        </div>
      );
};

export default Nature;
