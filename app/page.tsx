import React from "react";
import Landing from "@/components/landing/Landing"
import Spline from "@/components/landing/Spline"

export default function page() {
  return (
    <div className="relative">
      <Spline/>
      <Landing/>
    </div>
  );
}
