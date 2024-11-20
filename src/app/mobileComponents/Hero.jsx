"use client";

import { Suspense, useState } from "react";
import backgroundImage from "../../images/hero/heroMob.png";
import ContactForm, { LinkButtonComp } from "./ContactForm";
import Image from "next/image";
import logo from "../../images/logo.png";
import whatsappChat from "../../images/whatsapp.png";

export default function HeroSection() {
  const [load, setLoad] = useState(false);

  return (
    <section className="w-full">
      <div className="relative w-full h-[400px] ">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill="true"
          sizes="100vw"
          priority="true"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#022B1833]/20 to-transparent"></div>

        <div className="absolute z-10 transform -translate-x-1/2 top-8 left-1/2">
          <Image
            src={logo}
            alt="logo"
            width={107}
            height={36}
            className="object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col px-6 bg-primaryGreen ">
        <div className="transform -translate-y-40">
          <h1 className="mb-4 font-bold text-center text-white uppercase">
            Dubai Hills Estate <br />
            The Green Heart of Dubai
          </h1>
          <div className=" bg-white rounded-[18px] lg:w-[50%] mx-auto">
            <div className="flex flex-col items-center justify-center w-[90%] m-auto h-full gap-2 py-4">
              <h3 className="z-50 text-center uppercase text-darkBlue">
                Register Your Interest
              </h3>
              <div className="flex flex-col items-center justify-center w-full ">
                <div className="w-full">
                  <ContactForm
                    formName={"topForm"}
                    setLoad={setLoad}
                    isLight={true}
                  />
                </div>
                <label
                  htmlFor="topForm-submit"
                  tabIndex="0"
                  className={`uppercase bg-secondary font-heading m-auto text-center w-full  text-base text-primaryGreen px-2 py-3 rounded-[2.6875rem] ${
                    load ? "cursor-not-allowed" : ""
                  }`}
                >
                  {load ? "SUBMITTING..." : "Submit"}
                </label>

                <div className="text-grayText text-[10px] font-light mt-4 mb-2">
                  By submitting this form, you’re confirming that you agree to
                  our Privacy Policy
                </div>
                <a
                  id={"waLink"}
                  href="https://api.whatsapp.com/send/?phone=18106769485&text=Hi%2C+I+want+to+know+more+about+Dubai+Hills&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={whatsappChat}
                    width={178}
                    height={36}
                    alt="whatapp bot"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 -mt-32 mb-14">
          <div className="flex flex-col gap-2 mt-8 text-center text-white">
            <h2>The Future of Urban Living?</h2>
            <p className="mt-2 p2">
              At Dubai Hills Estate, we are redefining modern urban living
              within the renowned Mohammed Bin Rashid City. Our vision is to
              create an integrated lifestyle destination, offering a harmonious
              blend of comfort, luxury, and innovation.
            </p>
            <div className="p-4 pb-2 mt-8">
              <h1>22,000</h1>
              <p className="text-center text-white p1">Premium Apartments</p>
            </div>
            <hr className="border-[#4C4C4C80]/50 w-[80%] mx-auto" />
            <div className="p-4 pb-2">
              <h1>4,600</h1>
              <p className="text-center text-white p1">Exclusive Villas</p>
            </div>
            <hr className="border-[#4C4C4C80]/50 w-[80%] mx-auto" />
            <div className="p-4 pb-2">
              <h1>220,000</h1>
              <p className="text-center text-white p1">Modern Offices</p>
            </div>
            <Suspense>
              <LinkButtonComp href={`/?showPopup=${true}`}>
                <button
                  aria-label="register"
                  className="mt-8 w-[301px] py-4 px-2 button-text text-white border border-white transition rounded-[26.98px] bg-transparent uppercase"
                >
                  REGISTER YOUR INTEREST
                </button>
              </LinkButtonComp>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
