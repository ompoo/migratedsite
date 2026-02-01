"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TableOfContents from "@/components/TableOfContents";
import AboutCircle from "@/components/AboutCircle";
import WhatIsElectone from "@/components/WhatIsElectone";
import SNS from "@/components/SNS";
import Activities from "@/components/Activities";
import ExternalLinks from "@/components/ExternalLinks";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#3c4043] font-sans">
      <Header />
      <Hero />
      <TableOfContents />

      {/* Main Content */}
      <main className="w-full px-6 py-12 max-w-6xl mx-auto">
        <AboutCircle />
        <WhatIsElectone />
        <SNS />
        <Activities />
        <ExternalLinks />

        <footer className="mt-32 pt-12 border-t border-gray-100 text-center text-[#5f6368]">
          <p className="mb-4 text-sm">お問い合わせはこちらまで → e-mail: tuat.electone@gmail.com</p>
          <p className="text-xs">&copy; 2026 tuat electone ompoo</p>
        </footer>
      </main>
    </div>
  );
}