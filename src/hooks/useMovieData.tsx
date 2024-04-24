"use client";

import { useEffect } from "react";
import { url, options, urlList } from "../../public";

const useMovieData = () => {
  const getMovieData = async () => {
    try {
      const reqArr = urlList.map(async (urlObj) => {
        const req = await fetch(urlObj.url, options);
        const data = await req.json();
        const list = data.results;

        return { category: urlObj.title, data: list };
      });

      const response = await Promise.all(reqArr);
      localStorage.setItem("moviedata", JSON.stringify(response));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("moviedata")) {
      getMovieData();
    }
  }, []);
};

export default useMovieData;
