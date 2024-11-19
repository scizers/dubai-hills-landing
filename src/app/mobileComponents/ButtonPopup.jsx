"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ContactForm from "./ContactForm";

const Popup = () => {
  const [load, setLoad] = useState(false);
  let searchParams = useSearchParams();
  let abcd = searchParams.get("showPopup");
  let router = useRouter();

  return (
    abcd && (
      <div className="fixed w-full top-0 h-full z-50 flex flex-col   bg-[#000]/50 ">
        <div className="flex items-start justify-end px-2 py-8 ">
          <a
            href={""}
            onClick={(e) => {
              e.preventDefault();
              router.back();
            }}
            className="flex items-center gap-2 text-base text-buttonText font-heading"
          >
            <svg
              width="36"
              height="37"
              viewBox="0 0 36 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="37" rx="18" fill="#00061C" />
              <path
                d="M10 27L18 19L26 27M26 11L17.9985 19L10 11"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <section className="flex flex-col mx-auto justify-center w-[95%] h-screen overflow-hidden lg:rounded-[1.125rem] ">
          <div className=" bg-white rounded-[18px] ">
            <div className="flex flex-col items-center justify-center w-[90%] m-auto h-full gap-4 py-20 lg:justify-between ">
              <div className="relative top-0 flex flex-col items-center justify-center w-full gap-2 ">
                <h2 className="z-50 text-center !text-[24px] text-darkBlue uppercase">
                  Register Your Interest
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
                <div className="w-full">
                  <ContactForm
                    formName={"popupForm"}
                    setLoad={setLoad}
                    isLight={true}
                  />
                </div>
                <label
                  htmlFor="popupForm-submit"
                  tabIndex="0"
                  className={`uppercase bg-secondary font-heading m-auto text-center w-full lg:w-1/2 text-base text-darkBlue  px-2 py-3  rounded-[2.6875rem] ${
                    load ? "cursor-not-allowed" : ""
                  }`}
                >
                  {load ? "SUBMITTING..." : "submit"}
                </label>

                <div className="text-grayText text-[10px] font-light mt-4">
                  By submitting this form, you’re confirming that you agree to
                  our Privacy Policy
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  );
};

export default Popup;
