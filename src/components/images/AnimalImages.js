import React, { useEffect } from "react";
import useFetch from "../useFetch/useFetch";
import { Unsplashimage } from "./Unsplashimage";
import "./images.css";
import AOS from "aos";
import "aos/dist/aos.css";

export const AnimalImages = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const apiUnsplash = "https://api.unsplash.com";
  //   const accessKey = process.env.REACT_APP_ACCESSKEY;
  const accessKey = "2excYI0AfsK_ltD1H-BmPWnxVUkVNe97h_2TuJl6wJk";
  //   console.log(accessKey);
  const {
    data: images,
    error,
    isLoading,
  } = useFetch(
    `${apiUnsplash}/photos/random?query=animals&client_id=${accessKey}&count=50`
  );
  const {
    data: images1,
    error1,
    isLoading1,
  } = useFetch(
    `${apiUnsplash}/photos/random?query=animals-love&client_id=${accessKey}&count=50`
  );

  const {
    data: images2,
    error2,
    isLoading2,
  } = useFetch(
    `${apiUnsplash}/photos/random?query=animals-in-the-wild&client_id=${accessKey}&count=50`
  );

  const {
    data: images3,
    error3,
    isLoading3,
  } = useFetch(
    `${apiUnsplash}/photos/random?query=animals-portrait&client_id=${accessKey}&count=50`
  );
  const {
    data: images4,
    error4,
    isLoading4,
  } = useFetch(
    `${apiUnsplash}/photos/random?query=animals-upclose&client_id=${accessKey}&count=50`
  );
  const {
    data: images5,
    error5,
    isLoading5,
  } = useFetch(
    `${apiUnsplash}/photos/random?query=animals-nature&client_id=${accessKey}&count=50`
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

        <div className="coulmn-gallery">
          {error3 && <div className="err"> {error3} </div>}
          {isLoading3 && (
            <div className="loading">
              <div className="loader"></div>
            </div>
          )}
          {images3 &&
            images3.map((image) => (
              <Unsplashimage url={image.urls.small} key={image.id} />
            ))}
        </div>

        <div className="coulmn-gallery">
          {error4 && <div className="err"> {error4} </div>}
          {isLoading4 && (
            <div className="loading">
              <div className="loader"></div>
            </div>
          )}
          {images4 &&
            images4.map((image) => (
              <Unsplashimage url={image.urls.small} key={image.id} />
            ))}
        </div>

        <div className="coulmn-gallery">
          {error5 && <div className="err"> {error5} </div>}
          {isLoading5 && (
            <div className="loading">
              <div className="loader"></div>
            </div>
          )}
          {images5 &&
            images5.map((image) => (
              <Unsplashimage url={image.urls.small} key={image.id} />
            ))}
        </div>
      </div>
    </div>
  );
};
