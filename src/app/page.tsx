"use client";
import Image from "next/image";
import Navbar from "../components/Navbar";
import HeroSection from "@/components/HeroSection";
import SecondarySection from "@/components/SecondarySection";
import useScreenSize from "@/hooks/useScreenSize";
import { useEffect, useState } from "react";
import Modal from "@/components/Modal";

export default function Home() {
  useScreenSize();
  const [showModal, setShowModal] = useState(true);
  useEffect(() => {}, [showModal]);
  return (
    <main className="flex flex-col items-center justify-between px-4 pt-2 sm:p-12">
      <Navbar />
      <HeroSection />
      <SecondarySection />
      {showModal ? <Modal /> : null}
    </main>
  );
}
