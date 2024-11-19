// components/PropertyList.js

import React from "react";
import Image from "next/image";
import img1 from "../../images/apartments/d1.jpg";
import img2 from "../../images/apartments/d2.jpg";
import img3 from "../../images/apartments/d3.jpg";
import { area, bed } from "../utils/svgs/icons";
const Apartments = () => {
  const properties = [
    {
      image: img1,
      title: "Vida Residences Club Point",
      bedrooms: "1-3",
      size: "32 Units Remaining",
      priceAED: "From AED 1,615,888",
    },
    {
      image: img2,
      title: "Golf Hillside",
      bedrooms: "1-2",
      size: "24 Units Remaining",
      priceAED: "From AED 2,870,888",
    },
    {
      image: img3,
      title: "Parkland",
      bedrooms: "1-3",
      size: "9 Units Remaining",
      priceAED: "From AED 3,196,888",
    },
  ];

  return (
    <div className="container py-20 mx-auto">
      <h2 className="mb-8 text-center text-primaryGreen">
        Premium Apartments, Villas, and Townhouses in{" "}
        <br className="hidden xl:block" /> Dubai Hills
      </h2>

      <div className="flex items-center justify-center gap-4 mx-auto xl:gap-8">
        {properties.map((property, index) => (
          <div
            key={index}
            className=" my-4 overflow-hidden border border-[#B5B5B5] rounded-[10px] "
          >
            <Image
              src={property.image}
              alt={property.title}
              width={364}
              height={269}
              className="rounded-t-[10px]"
              priority
            />

            <div className="p-4">
              <p className="mb-1 text-[20px] leading-[23.74px]">
                {property.title}
              </p>
              <div className="flex flex-col items-start justify-center gap-4 mt-3">
                <div className="flex items-center gap-1 text-sm text-grayText">
                  {bed}
                  {property.bedrooms}
                </div>
                <div className="flex items-center gap-1 text-sm text-grayText">
                  {area} {property.size}
                </div>
              </div>

              <p className="mt-6 mb-2 text-[20px] leading-[23.74px] text-primaryGreen pt-6 border-t-[0.2px] border-[#B5B5B5]">
                {property.priceAED}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apartments;
