import React, { useState, useEffect, useDebugValue } from "react";

const useFetch = (url) => {

  let amiiboLocal = JSON.parse(localStorage.getItem('amiibos')) || [];

  const [data, setData] = useState([amiiboLocal]);
  const [fetching, setFetching] = useState(true);

  useDebugValue("These are my amiibos");

  useEffect(() => {
    localStorage.setItem('amiibos', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
      const getData = async()=>{
        try {
            const resp = await fetch(url);
            const {amiibo} = await resp.json();

            setData(amiibo);
            setFetching(false);

        } catch (error) {
          console.log(error);
        }
      }
      getData();
  }, [url])

  return [
    data,
    fetching
  ]
};

export default useFetch;
