import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import { link } from "fs";

interface ModalCardProps {
  poster_path: string;
  title: string;
  overview: string;
  cast: string;
}

const ModalCard: React.FC<ModalCardProps> = ({
  poster_path,
  title,
  overview,
  cast,
  genres,
}) => {
  return (
    <Card className="w-auto h-[600px] relative overflow-hidden">
      <IoClose
        className="text-white absolute right-0 z-30 mt-4 mr-4 text-xl cursor-pointer"
        onClick={() => {
          return;
        }}
      />
      <CardContent className=" w-[600px] p-0 h-[600px]">
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="My Image"
          width={600}
          height={400}
          className=" absolute top-0 rounded-md"
        />
        <div
          id="movieInfo"
          className="absolute z-50 top-1/2 left-1/2 -translate-x-1/2 w-full p-4 h-1/2"
        >
          <div className="bg-gradient-to-b from-transparent  via-slate-950 to-[#020817] h-1/4 absolute -z-10 w-full top-0 left-0"></div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{overview}</p>
          <p className="flex list-none gap-2">
            <span className="text-neutral-500 font-light text-base">
              Genres:
            </span>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </p>
        </div>
        {/* <Image
          src={`https://image.tmdb.org/t/p/w780/7fBzZBlDlbxBNFEY50P4J4OZ5RX.png`}
          alt="logo"
          width={300}
          height={300}
          className="absolute z-20 bottom-2 left-1/2 -translate-x-[50%] w-[200px]"
        />
        <div className="bg-gradient-to-b from-transparent  via-slate-950 to-black h-[50%] absolute z-10 w-full bottom-0"></div> */}
        {/* <div className="absolute bottom-5 left-1/2 -translate-x-[50%] flex gap-3 z-20">
          <Button asChild className="">
            <Link href="/player">Play now</Link>
          </Button>{" "}
          <Button asChild variant="secondary">
            <Link href="/player">More Info</Link>
          </Button>
        </div> */}
      </CardContent>
    </Card>
  );
};

export default ModalCard;
