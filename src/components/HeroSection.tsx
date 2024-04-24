import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Card className="w-[90%] flex justify-center items-center">
      <CardContent className="relative p-0">
        <Image
          src="https://image.tmdb.org/t/p/w342/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg"
          alt="My Image"
          width={342}
          height={200}
          className=" rounded-md"
        />
        <Image
          src="https://image.tmdb.org/t/p/w780/7fBzZBlDlbxBNFEY50P4J4OZ5RX.png"
          alt="logo"
          width={300}
          height={300}
          className="absolute z-20 top-[50%] left-1/2 -translate-x-[50%] w-[80%]"
        />
        <div className="bg-gradient-to-b from-transparent  via-slate-950 to-black h-[50%] absolute z-10 w-full bottom-0"></div>
        <div className="absolute bottom-5 left-1/2 -translate-x-[50%] flex gap-3 z-20">
          <Button asChild className="">
            <Link href="/player">Play now</Link>
          </Button>{" "}
          <Button asChild variant="secondary">
            <Link href="/player">More Info</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroSection;
