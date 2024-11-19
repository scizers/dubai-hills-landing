"use client";
import Image from "next/image";
import React from "react";
import logo from "../../images/logoWhite.png";

const Footer = ({}) => {
  return (
    <footer className="w-full py-10 bg-primaryGreen">
      <div className="flex flex-col items-center">
        <div className="">
          <Image src={logo} alt="logo" width={208} height={46} />
        </div>

        <div className="my-6 p3  text-white pt-4  w-[80%] m-auto text-center ">
          <hr className="mb-4 border-[#B5B5B5] h-px" />© 2024 AziziVenice. All
          Rights Reserved 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
