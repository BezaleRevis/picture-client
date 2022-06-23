import React from "react";
import useFetch from "../useFetch/useFetch";
import { Unsplashimage } from "./Unsplashimage";
import { useState } from "react";
import { Message } from "../login-signUp/Message";

export const PepleSearch = ({ photo ,result}) => {
  const [clientId, setClientId] = useState(
    "2excYI0AfsK_ltD1H-BmPWnxVUkVNe97h_2TuJl6wJk"
  );
  const apiUnsplash = "https://api.unsplash.com";

  const {
    data: images,
    error,
    isLoading,
  } = useFetch(
    `${apiUnsplash}/search/photos?page=1&query=${photo}&client_id=${clientId}&count=50`
  );
  return (
    <div className="coulmn-gallery">
        {/* {console.log(images)} */}
      {error && <div className="err"> <Message message={error}/> </div>}
      {isLoading && (
        <div className="loading">
          <div className="loader"></div>
        </div>
      )}
      

      {images &&
        result.map((image) => (
        <Unsplashimage url={image.urls.small} key={image.id}/>
        ))}
    </div>
  );
};
