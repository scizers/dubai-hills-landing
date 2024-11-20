"use client";
import React, { useState } from "react";
import ContactForm from "../mobileComponents/ContactForm";
import { email, whatsapp } from "../utils/svgs/icons";
import Image from "next/image";
import emaar from "../../images/emaar.png";
import whatsappChat from "../../images/whatsapp.png";

function Register() {
  const [load, setLoad] = useState(false);

  return (
    <section className="m-auto bg-primaryGreen">
      <div className="container flex items-center justify-center py-12 pt-24 m-auto ">
        <div className="flex flex-col items-start justify-start w-1/2 ">
          <Image
            src={emaar}
            alt="emaar"
            width={104}
            height={22}
            className="object-cover"
          />
          <p className="text-white py-14 p2">
            Don’t miss out on the opportunities – register{" "}
            <br className="hidden xl:block" /> to get your free Q3 market
            reports.
          </p>
          <div className="flex items-center justify-center gap-8 text-white">
            <a
              id={"waLink"}
              href="https://api.whatsapp.com/send/?phone=18106769485&text=Hi%2C+I+want+to+know+more+about+Dubai+Hills&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              {whatsapp}
            </a>
            Click to whatsapp
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-[40%] h-full gap-4 py-8 pb-10 bg-white rounded-[18px] lg:justify-between ">
          <div className="relative top-0 flex flex-col items-center justify-center w-[90%] gap-4 ">
            <h3 className="z-50 py-2 text-center uppercase text-primaryGreen">
              Register your interest
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center w-[90%]">
            <div className="w-full">
              <ContactForm formName={"bottomForm"} setLoad={setLoad} />
            </div>
            <label
              htmlFor="bottomForm-submit"
              tabIndex="0"
              className={`uppercase bg-secondary w-[80%] border-secondary  m-auto text-center text-base text-darkBlue  px-2 py-3 mt-2 rounded-[2.6875rem] ${
                load ? "cursor-not-allowed" : ""
              }`}
            >
              {load ? "SUBMITTING..." : "SUBMIT"}
            </label>

            <div className="text-grayText text-[10px] font-light mt-4">
              By submitting this form, you’re confirming that you agree to our
              Privacy Policy.
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
    </section>
  );
}

export default Register;
