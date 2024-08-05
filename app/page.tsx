import React from "react";
import Alert from "@/components/Alert";
import { FloatingNavDemo } from "@/components/Navbar";

export default function page() {
  return (
    <div className="h-[400vh]">
      <Alert />
      <FloatingNavDemo/>
    </div>
  );
}
