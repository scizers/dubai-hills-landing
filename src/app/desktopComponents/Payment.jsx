import { Suspense } from "react";
import { LinkButtonComp } from "../mobileComponents/ContactForm";
import { payment1, payment2, payment3 } from "../utils/svgs/icons";

const Payment = () => {
  return (
    <div className="relative w-full pt-96 bg-lightBlue">
      <div className="container relative z-10 w-full mx-auto ">
        <h2 className="mb-4 text-center pt-14 text-darkBlue">
          Why Invest in Dubai?
        </h2>
        <p className="my-10 text-center p2 text-darkBlue">
          Dubai Hills Estate is Dubai’s premier residential community, offering
          luxury living, <br className="hidden xl:block" /> green landscapes,
          and top-tier facilities—making it an ideal investment destination.
        </p>

        <div className="grid items-center justify-around grid-cols-3 py-4 text-darkBlue">
          <div className="flex flex-col items-center justify-center border-r border-gray-300">
            {payment1}
            <p className="uppercase text-[22px] leading-[32.38px] font-heading mt-3">
              Higher Rental Yields 
            </p>
            <p className="text-sm leading-[19px] text-center">
              Investors can achieve rental yields <br /> of 5-9%.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center border-r border-gray-300">
            {payment2}
            <p className="uppercase text-[22px] leading-[32.38px] font-heading mt-3">
              No Annual Property Taxes
            </p>
            <p className="text-sm leading-[19px] text-center">
              No extra taxes after <br /> purchase.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            {payment3}
            <p className="uppercase text-[22px] leading-[32.38px] font-heading mt-3">
              UAE Golden Visa 
            </p>
            <p className="text-sm leading-[19px] text-center">
              Eligible with minimum AED 2 million <br /> investment for 5-10
              year residency.  
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-8 pb-16 m-auto mt-10">
          <Suspense>
            <LinkButtonComp href={`/?showPopup=${true}`}>
              <button
                aria-label="register"
                className="w-[352px] py-4 px-2 font-medium button-text text-darkBLue transition rounded-[26.98px] bg-secondary"
              >
                BOOK A PRIVATE MEETING
              </button>
            </LinkButtonComp>
          </Suspense>
          <Suspense>
            <LinkButtonComp href={`/?showPopup=${true}`}>
              <button
                aria-label="download brochure"
                className="w-[352px] py-4 px-2 button-text font-medium text-white transition rounded-[26.98px] bg-darkBlue uppercase"
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
