import { useState, useEffect } from "react";
const useFetch = (url, method) => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let headers = new Headers();
  headers.append("Accept", "application/json");

  let config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS,DELETE,PUT",
      Authorization: "Bearer key",
    },
  };
  useEffect(() => {
    const abortCont = new AbortController();
    fetch(url, {
      singal: abortCont.signal,
      method: method,
      config,
      mode: "cors",
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(error);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetchAborted");
        } else {
          setLoading(false);
          setError(
            "Sorry something went wrong when we tried to load this images..."
          );
        }
      });
    return () => abortCont.abort();
  }, [url]);
  return { data, error, isLoading };
};
export default useFetch;
