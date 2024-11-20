"use client";
import React, { useState } from "react";
import ContactForm from "./ContactForm";
import { email, whatsapp } from "../utils/svgs/icons";
import Image from "next/image";
import whatsappChat from "../../images/whatsapp.png";

function Register() {
  const [load, setLoad] = useState(false);

  return (
    <section className="w-full pt-16 mx-auto pb-14 bg-primaryGreen">
      <div className=" w-[85%] m-auto rounded-[18px] top-0 bg-white ">
        <div className=" h-full py-4 w-[90%] m-auto">
          <div className="flex flex-col items-center justify-center w-full h-full gap-4 py-4 lg:justify-between ">
            <div className="relative top-0 flex flex-col items-center justify-center w-full gap-4 ">
              <h2 className="z-50 text-center uppercase text-primaryGreen">
                Register your interest
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
              <div className="w-full">
                <ContactForm
                  formName={"bottomForm"}
                  setLoad={setLoad}
                  isLight={true}
                />
              </div>
              <label
                htmlFor="bottomForm-submit"
                tabIndex="0"
                className={`uppercase bg-secondary font-heading m-auto text-center w-full lg:w-1/2 text-base text-darkBlue  px-2 py-3 mt-2 rounded-[2.6875rem] ${
                  load ? "cursor-not-allowed" : ""
                }`}
              >
                {load ? "SUBMITTING..." : "SUBMIT NOW"}
              </label>

              <div className="text-primaryGreen text-[10px] font-light mt-4">
                By submitting this form, you’re confirming that you agree to our
                Privacy Policy
              </div>
              <a
                id={"waLink"}
                href="https://api.whatsapp.com/send/?phone=18106769485&text=Hi%2C+I+want+to+know+more+about+Dubai+Hills&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={whatsappChat}
                  width={261}
                  height={54}
                  alt="whatapp bot"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="p2 w-[80%] text-white text-center mx-auto pt-8 pb-10">
        Don’t miss out on the opportunities – register to get your free Q3
        market reports.
      </p>
      <div className="flex items-center justify-center gap-4 text-white">
        <a
          id={"waLink"}
          href="https://api.whatsapp.com/send/?phone=18106769485&text=Hi%2C+I+want+to+know+more+about+Dubai+Hills&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          {whatsapp}
        </a>{" "}
        Click to whatsapp
      </div>
    </section>
  );
}

export default Register;
