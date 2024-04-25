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

type CategoryType = {
  category: string;
  data: MovieType[];
};

type MovieType = {
  id: string;
  poster_path: string;
};

const SecondarySection = () => {
  const storedData = localStorage.getItem("moviedata");
  const initialCategory: CategoryType[] = storedData
    ? JSON.parse(storedData)
    : [];
  const [category, setCategory] = useState<CategoryType[]>(initialCategory);

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
                  }}
                >
                  <CustomCard poster_path={item.poster_path} />
                </CarouselItem>
              ))}
            </CarouselContent>
            {width > 768 ? (
              <>
                <CarouselPrevious />
                <CarouselNext />
              </>
            ) : null}
          </Carousel>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SecondarySection;
