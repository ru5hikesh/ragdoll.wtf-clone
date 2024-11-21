"use client";

import React from "react";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import Ragdoll from "./components/Ragdoll";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative">
      <Ragdoll />
      <PageOne />
      <PageTwo />
      <Roadmap />
      <Footer />
    </div>
  );
}