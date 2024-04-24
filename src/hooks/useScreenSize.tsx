"use client";
import React, { useEffect, useState } from "react";

const useScreenSize = () => {
  const height = window.innerHeight;
  const width = window.innerWidth;

  const [screen, setScreen] = useState({ height: height, width: width });

  useEffect(() => {
    window.addEventListener("resize", () => {
      setScreen({ height: window.innerHeight, width: window.innerWidth });
    });

    return () =>
      window.removeEventListener("resize", () =>
        setScreen({ height: height, width: width })
      );
  }, [height, width]);

  return { ...screen };
};

export default useScreenSize;
