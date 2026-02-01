"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[60px] flex items-center z-[1000] transition-all duration-200 ease-in-out ${
        scrolled 
          ? "bg-white border-b border-gray-200 shadow-sm" 
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full px-4 flex items-center">
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <div className="w-[36px] h-[36px] relative flex-shrink-0">
            <Image
              src="/unnamed (6).jpg"
              alt="tuat electone logo"
              fill
              className="object-cover"
            />
          </div>
          <span className={`text-[22px] font-semibold leading-tight tracking-tight transition-colors duration-200 ${
            scrolled ? "text-[#351c75]" : "text-[#202124]"
          }`}>
            tuat electone
          </span>
        </Link>
      </div>
    </header>
  );
}
