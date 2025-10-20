import { useEffect, useState } from "react";

export const useFetch = (url, initData) => {
  const [data, setData] = useState(initData);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setIsLoading(false);
        setErrorMessage("");
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setIsLoading(false);
        setData([]);
      });
  }, []);
  return {
    data,
    isLoading,
    errorMessage,
  };
};
