"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ContactForm from "../mobileComponents/ContactForm";
import Link from "next/link";
import Image from "next/image";
import whatsappChat from "../../images/whatsapp.png";

const Popup = () => {
  const [load, setLoad] = useState(false);
  let searchParams = useSearchParams();
  let abcd = searchParams.get("showPopup");
  let router = useRouter();

  return (
    abcd && (
      <div className="fixed w-full top-0 h-full z-50 flex flex-col   bg-[#000]/50 ">
        <section className="flex flex-col mx-auto justify-center w-[60%] xl:w-[50%] max-w-[785px] h-screen   lg:rounded-[1.125rem] ">
          <div className=" bg-white rounded-[18px] h-[410px] xl:h-[461px] flex flex-col justify-between ">
            <div className="flex items-start justify-start px-10 pt-2 xl:pt-4 2xl:pt-6">
              <Link
                href={""}
                scroll={false}
                onClick={(e) => {
                  e.preventDefault();
                  router.back();
                }}
                className="flex items-center text-base text-buttonText font-heading"
              >
                <svg
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 27L18 19L26 27M26 11L17.9985 19L10 11"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
                <span className="p2 font-heading"> Close</span>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center w-full pb-4 m-auto ">
              <div className="relative top-0 flex flex-col items-center justify-center w-full gap-2 ">
                <h2 className="z-50 text-center !text-[24px] text-darkBlue uppercase">
                  Register Your Interest
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center w-[70%]">
                <div className="w-full">
                  <ContactForm
                    formName={"popupForm"}
                    setLoad={setLoad}
                    isLight={true}
                  />
                </div>

                <div className="text-grayText text-[10px] font-light -mt-2">
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
            <div className="bg-lightBlue flex justify-between items-center w-full rounded-b-[18px] py-4">
              <label
                htmlFor="popupForm-submit"
                tabIndex="0"
                className={`uppercase bg-secondary font-heading m-auto text-center w-[70%] text-base text-darkBlue  px-2 py-3  rounded-[2.6875rem] ${
                  load ? "cursor-not-allowed" : ""
                }`}
              >
                {load ? "SUBMITTING..." : "submit"}
              </label>
            </div>
          </div>
        </section>
      </div>
    )
  );
};

export default Popup;
