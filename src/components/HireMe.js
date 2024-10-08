import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";
const HireMe = () => {
  return (
    <div
      className="fixed left-4 bottom-4 flex 
    items-center justify-center md:absolute sm:right-0
    overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto
    "
    >
      <div
        className="w-48 md:w-24 h-auto flex items-center justify-center
      relative 
      "
      >
        {/* <CircularText
          className={"fill-dark animate-spin-slow dark:fill-light"}
        /> */}
        <Link
          className="flex items-center justify-center absolute left-1/2 top-1/2
        -translate-x-1/2 -translate-y-1/2
        bg-dark md:w-12 md:h-12 md:text-[10px]
        dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light
        hover:dark:border-light dark:hover:border-dark
        text-light shadow-md border border-solid border-dark rounded-full font-semibold
        hover:bg-light hover:text-dark transition duration-300 ease-in-out
        w-20 h-20
        "
          href="https://www.linkedin.com/in/sdhanraj300/"
          target={"_blank"}
        >
          Hire Me!
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
