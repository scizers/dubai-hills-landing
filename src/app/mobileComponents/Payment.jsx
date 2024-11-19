import { Suspense } from "react";
import { LinkButtonComp } from "./ContactForm";
import { payment1, payment2, payment3 } from "../utils/svgs/icons";

const Payment = () => {
  return (
    <div className="relative w-full px-2 py-16 bg-lightBlue">
      <div className="relative z-10 text-center">
        <h2 className="px-6 mb-4 text-darkBlue">Why Invest in Dubai?</h2>
        <p className="px-6 mb-6 text-darkBlue p2">
          Dubai Hills Estate is Dubai’s premier residential community, offering
          luxury living, green landscapes, and top-tier facilities—making it an
          ideal investment destination.
        </p>

        <div className="w-[80%] m-auto space-y-10 text-darkBlue py-4">
          <div className="flex flex-col items-center justify-center">
            {payment1}
            <h3 className="uppercase">Higher Rental Yields </h3>
            <p className=" p2">
              Investors can achieve rental yields <br /> of 5-9%.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            {payment2}
            <h3 className="uppercase"> No Annual Property Taxes </h3>
            <p className=" p2">
              No extra taxes after <br /> purchase.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            {payment3}
            <h3 className="uppercase">UAE Golden Visa </h3>
            <p className=" p2">
              Eligible with minimum AED 2 million <br /> investment for 5-10
              year residency.  
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center m-auto w-[301px] mt-8 space-y-4">
          <Suspense>
            <LinkButtonComp href={`/?showPopup=${true}`}>
              <button
                aria-label="register"
                className="w-[301px] py-4 px-2 button-text text-primaryGreen transition rounded-[26.98px] bg-secondary uppercase"
              >
                REGISTER YOUR INTEREST
              </button>
            </LinkButtonComp>
          </Suspense>
          <Suspense>
            <LinkButtonComp href={`/?showPopup=${true}`}>
              <button
                aria-label="download brochure"
                className="w-[301px] py-4 px-2 button-text text-white transition rounded-[26.98px] bg-darkBlue uppercase"
              >
                DOWNLOAD BROCHURE
              </button>
            </LinkButtonComp>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Payment;
