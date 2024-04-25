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
import { link } from "fs";

type CategoryType = string[];

const SecondarySection = () => {
  const [category, setCategory] = useState<CategoryType>(
    JSON.parse(localStorage.getItem("moviedata")) || []
  );

  const { height, width } = useScreenSize();

  useEffect(() => {}, [category]);
  return (
    <div
      className="py-4 w-[100%] flex flex-col justify-center items-center gap-5 px-12"
      id="carousel"
    >
      {category.map((category) => (
        <React.Fragment key={category.category}>
          <h3 className="text-white font-bold text-xl">{category.category}</h3>
          <Carousel
            opts={{
              align: "center",
              slidesToScroll: 5,
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {category.data.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-[40%] md:basis-[200px] lg:basis-[250px]"
                  onClick={() => {
                    console.log(item);
                    localStorage.setItem("modalflag", "show");
                  }}
                >
                  <CustomCard poster_path={item.poster_path} />
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

          {/* <CarouselContent>
              {movie.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-[40%] md:basis-[200px] lg:basis-[250px]"
                  onClick={() => {
                    console.log(item);
                    localStorage.setItem("modalflag", "show");
                  }}
                >
                  <CustomCard poster_path={item.poster_path} />
                </CarouselItem>
              ))}
            </CarouselContent>
            {width > 768 ? (
              <>
                {" "}
                <CarouselPrevious />
                <CarouselNext />
              </>
            ) : null} */}
        </React.Fragment>
        //   <Carousel
        //   opts={{
        //     align: "start",
        //     slidesToScroll: 5,
        //     loop: true,
        //   }}
        //   className="w-full"
        //   key={category.category}
        // >
        //   <CarouselContent>
        //   <CarouselItem
        //         key={movie.id}
        //         className="basis-[40%] md:basis-[200px] lg:basis-[250px]"
        //         onClick={() => {
        //           console.log(movie);
        //         }}
        //       >
        //         <CustomCard poster_path={category.data.poster_path} />
        //       </CarouselItem>
        //     </CarouselContent></Carousel>
      ))}
      {/* <Carousel
        opts={{
          align: "start",
          slidesToScroll: 5,
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {data[0].data.map((movie) => (
            <CarouselItem
              key={movie.id}
              className="basis-[40%] md:basis-[200px] lg:basis-[250px]"
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
      </Carousel> */}
    </div>
  );
};

export default SecondarySection;
