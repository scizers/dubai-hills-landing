import React, { Suspense } from "react";
import { LinkButtonComp } from "../mobileComponents/ContactForm";
const About = () => {
  return (
    <div className="py-20 bg-primaryGreen ">
      <div className="container flex flex-col items-center justify-center mx-auto ">
        <h2 className="w-full mb-4 text-center text-white ">
          The Future of Urban Living?
        </h2>
        <p className="py-2 text-center p2 text-white w-[75%] ">
          At Dubai Hills Estate, we are redefining modern urban living within
          the renowned Mohammed Bin Rashid City. Our vision is to create an
          integrated lifestyle destination, offering a harmonious blend of
          comfort, luxury, and innovation.
        </p>
        <div className="container flex items-center justify-between m-auto mt-10 text-center text-white">
          <div>
            {" "}
            <h1>22,000</h1>
            <p className="mb-4 font-heading text-[24px] leading-[30px]">
              Premium Apartments
            </p>
          </div>
          <div>
            <h1>4,600</h1>
            <p className="mb-4 font-heading text-[24px] leading-[30px]">
              Sqm. Retail BoulevardExclusive Villas
            </p>
          </div>
          <div>
            <h1>220,000</h1>
            <p className="mb-4 font-heading text-[24px] leading-[30px]">
              Modern Offices
            </p>
          </div>
        </div>
        <div className="mt-16 m-auto w-[352px] space-y-4">
          <Suspense>
            <LinkButtonComp href={`/?showPopup=${true}`}>
              <button
                aria-label="register"
                className="w-[352px]  py-4 px-2 button-text text-white transition rounded-[26.98px] bg-transparent border border-white uppercase"
              >
                register your interest
              </button>
            </LinkButtonComp>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default About;
