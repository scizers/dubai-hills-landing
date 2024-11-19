"use client";
import Image from "next/image";
import React from "react";
import logo from "../../images/logoWhiteDesk.png";
import emaar from "../../images/emaar.png";

const Footer = ({}) => {
  return (
    <footer className="w-full py-10 pt-16 border-t bg-primaryGreen border-grayText">
      <div className="container flex flex-col items-center mx-auto">
        <div className="flex items-end justify-between w-full ">
          <Image
            src={logo}
            alt="logo"
            width={204}
            height={68}
            className="object-cover"
          />

          <Image
            src={emaar}
            alt="emaar"
            width={104}
            height={22}
            className="object-cover"
          />
        </div>

        <div className="w-full pt-4 m-auto text-center text-white p3-light">
          <hr className="mb-4 border-grayText" />© 2024 Dubaihills. All Rights
          Reserved 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
