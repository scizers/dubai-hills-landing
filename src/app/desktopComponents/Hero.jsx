"use client";
import { Suspense, useState } from "react";
import backgroundImage from "../../images/hero/hero.jpg";
import ContactForm, {
  LinkButtonComp,
} from "@/app/mobileComponents/ContactForm";
import Image from "next/image";
import logo from "../../images/logoDesk.png";
import emaar from "../../images/emaar.png";

export default function HeroSection() {
  const [load, setLoad] = useState(false);
  return (
    <section className="relative flex flex-col items-center w-full h-[750px]  xl:h-[887px] ">
      <Image
        src={backgroundImage}
        alt="Hero background"
        fill="true"
        sizes="100vw"
        priority="true"
        className="object-cover"
      />
      {/* <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent opacity-60"></div> */}

      <div className="container relative top-0 flex justify-center mt-20 ">
        <Image
          src={logo}
          alt="logo"
          width={204}
          height={68}
          className="object-cover"
        />
      </div>

      <div className="container relative z-10 flex items-center justify-center mt-12 space-x-20">
        <div className="flex flex-col justify-center gap-8 ">
          <Image
            src={emaar}
            alt="emaar"
            width={104}
            height={22}
            className="object-cover"
          />
          <div>
            <h1 className="font-semibold text-white uppercase">
              Dubai Hills Estate <br /> The Green Heart of Dubai 
            </h1>

            <button
              aria-label="download brochure"
              className="w-[90%] mt-8 py-4 px-2  button-text text-white transition rounded-[26.98px] bg-primaryGreen uppercase"
            >
              15% Rental Returns and 50% ROI till handover
            </button>
          </div>
        </div>

        <div className="relative z-10 flex w-[409px] mb-auto">
          <div className=" bg-white rounded-[18px] w-full">
            <div className="flex flex-col items-center justify-center w-[100%] m-auto h-full gap-4 py-4 lg:justify-between ">
              <div className="relative top-0 flex flex-col items-center justify-center w-full gap-2 ">
                <h2 className="z-50 text-center !text-[28px] text- uppercase">
                  Register Your Interest
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center w-[90%]">
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
                  className={`uppercase bg-secondary font-heading m-auto text-center w-full text-base text-darkBlue  px-2 py-3  rounded-[2.6875rem] ${
                    load ? "cursor-not-allowed" : ""
                  }`}
                >
                  {load ? "SUBMITTING..." : "Submit"}
                </label>

                <div className="text-grayText text-[10px] text-center font-light my-4">
                  By submitting this form, you’re confirming that you agree to
                  our Privacy Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
