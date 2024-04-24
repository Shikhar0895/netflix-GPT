"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CustomCard from "./CustomCard";
import useScreenSize from "@/hooks/useScreenSize";

const SecondarySection = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("moviedata"))
  );

  const { height, width } = useScreenSize();

  useEffect(() => {}, [data]);
  return (
    <div
      className="py-4 w-[100%] flex flex-col justify-center items-center gap-5"
      id="carousel"
    >
      <h3 className="text-white font-bold text-xl">{data[0].category}</h3>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {data[0].data.map((movie) => (
            <CarouselItem
              key={movie.id}
              className="basis-[40%] md:basis-[200px] lg:basis-[200px]"
              onClick={() => {
                console.log(movie);
                localStorage.setItem("modalflag", "show");
              }}
            >
              <CustomCard poster_path={movie.poster_path} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {width > 768 ? (
          <>
            {" "}
            <CarouselPrevious />
            <CarouselNext />
          </>
        ) : null}
      </Carousel>
    </div>
  );
};

export default SecondarySection;
