"use client";

import Profile from "@/public/icons/profile.svg";
import Cart from "@/public/icons/cart.svg";
import Search from "@/public/icons/search.svg";
import { useState, useEffect } from "react";

export const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [ActiveNumber, setActiveNumber] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY < 900) {
        setActiveNumber(1);
      } else if (window.scrollY < 1990) {
        setActiveNumber(2);
      } else if (window.scrollY < 3500) {
        setActiveNumber(3);
      } else {
        setActiveNumber(4);
      }
      if (window.scrollY < 200) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
      if (window.scrollY > 160) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`h-40 z-50 bg-white sticky transition-all duration-500 ease-in-out ${
        isVisible ? "top-0" : "-top-40"
      } ${isAtTop ? "border-b-[1px] border-zinc-300" : "shadow-md"}`}
    >
      <nav className="h-full text-2xl font-medium w-full flex items-center pr-20 justify-between">
        <div className="invisible">Placeholder</div>

        <ul className="flex gap-12 absolute left-1/2 transform -translate-x-1/2">
          <li>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`hover:text-[#90E051] transition-all duration-300 bg-transparent ${
                ActiveNumber === 1 ? "text-[#90E051]" : "text-gray-700"
              }`}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                window.scrollTo({ top: 920, behavior: "smooth" });
              }}
              className={`hover:text-[#90E051] transition-all duration-300 bg-transparent ${
                ActiveNumber === 2 ? "text-[#90E051]" : "text-gray-700"
              }`}
            >
              Menu
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                window.scrollTo({ top: 2000, behavior: "smooth" });
              }}
              className={`hover:text-[#90E051] transition-all duration-300 bg-transparent ${
                ActiveNumber === 3 ? "text-[#90E051]" : "text-gray-700"
              }`}
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                window.scrollTo({ top: 3500, behavior: "smooth" });
              }}
              className={`hover:text-[#90E051] transition-all duration-300 bg-transparent ${
                ActiveNumber === 4 ? "text-[#90E051]" : "text-gray-700"
              }`}
            >
              Review
            </button>
          </li>
        </ul>

        {/* Social media icons */}
        <div className="flex hover:text-[#90E051] gap-6 text-gray-600 text-xl">
          <Profile className="cursor-pointer" />
          <Cart className="cursor-pointer" />
          <Search className="cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};
