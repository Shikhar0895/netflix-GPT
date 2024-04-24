import React from "react";
import CustomCard from "./CustomCard";
import ModalCard from "./Modalcard";

const Modal = () => {
  return (
    <div className=" fixed z-40 w-full h-full bg-slate-950 bg-opacity-50 top-0 ">
      <div className="absolute z-50 top-[30%] left-1/2 -translate-x-1/2 -translate-y-[30%] text-white font-bold">
        <ModalCard
          poster_path="/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg"
          title="GHostBusters"
          overview={"lorem 100"}
          genres={[16, 28, 10751, 35, 14]}
        />
      </div>
    </div>
  );
};

export default Modal;
