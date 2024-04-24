"use client";
import React, { useEffect } from "react";
import { RxMagnifyingGlass } from "react-icons/rx";
import { Button } from "@/components/ui/button";
import { options, url } from "../../public";
import useMovieData from "@/hooks/useMovieData";

const Navbar = () => {
  useMovieData();
  return (
    <nav className="w-[100%]">
      <div className="flex justify-between items-center text-white ">
        <span>
          <h2 className="font-bold">StreamBerry</h2>
        </span>
        <RxMagnifyingGlass size={"2rem"} />
      </div>
      <div className="flex gap-3 py-4 justify-center">
        <Button variant="outline">Movies</Button>
        <Button variant="outline">TV</Button>
        <Button variant="outline">People</Button>
      </div>
    </nav>
  );
};

export default Navbar;
