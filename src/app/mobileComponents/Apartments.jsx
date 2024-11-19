// components/PropertyList.js

import React from "react";
import Image from "next/image";
import img1 from "../../images/apartments/1.png";
import img2 from "../../images/apartments/2.png";
import img3 from "../../images/apartments/3.png";
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
    <div className="flex flex-wrap justify-center py-6">
      <h2 className="mb-4 text-center text-darkBlue ">
        Premium Apartments, Villas, and Townhouses in Dubai Hills
      </h2>
      {properties.map((property, index) => (
        <div
          key={index}
          className=" my-3 overflow-hidden border border-[#B5B5B5] rounded-[10px] "
        >
          <Image
            src={property.image}
            alt={property.title}
            width={339}
            height={254}
            className="rounded-t-[10px]"
          />

          <div className="p-4 pt-2">
            <p className="mb-1 text-xl leading-[23.74px] font-heading">
              {property.title}
            </p>
            <div className="flex flex-col items-start justify-between gap-2 mt-3">
              <div className="flex items-center gap-1 text-xs text-grayText">
                {bed}
                {property.bedrooms}
              </div>
              <div className="flex items-center gap-1 text-xs text-grayText ">
                {area} {property.size}
              </div>
            </div>

            <p className="mt-4 text-[20px] font-heading text-primaryGreen pt-3 border-t-[0.2px] border-[#B5B5B5]">
              {property.priceAED}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Apartments;
