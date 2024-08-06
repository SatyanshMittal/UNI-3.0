"use client";

import React, { useEffect, useRef } from "react";
import Landing from "@/components/landing/Landing";
import Spline from "@/components/landing/Spline";
import About from "@/components/landing/About";
import Navbar from "@/components/landing/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Communityo from "@/components/landing/Communityo";
import Communityt from "@/components/landing/Communityt";

export default function Page() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });

      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, []);

  return (

    <div className="w-full h-full bg-transparent relative">
      <Navbar />
      <Spline />
      <div ref={scrollRef} className="scroll-container ">
        <Landing />
        <About />
        <Communityo />
        <Communityt />
      </div>
    </div>
  );
}
