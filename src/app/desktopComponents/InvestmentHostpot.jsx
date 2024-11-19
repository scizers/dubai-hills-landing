import React from "react";
import Image from "next/image";
import location2 from "../../images/location/location3.jpeg";
import Payment from "./Payment";
import {
  feature1,
  gym,
  healthCareCentre,
  internationalSchool,
  playArea,
  restaurants,
  retailOutlets,
  swimmingPool,
} from "../utils/svgs/icons";

const features = [
  {
    icon: feature1,
    area: "2,700 - acre",
    label: "Multi-purpose",
    lable2: " Development",
  },
  {
    icon: playArea,
    area: "282,000 sqm",
    label: "Dubai Hills",
    lable2: " Mall",
  },
  {
    icon: restaurants,
    area: "18-Hole",
    label: "Championship Golf ",
    lable2: "Course",
  },
  {
    icon: healthCareCentre,
    area: "3",
    label: "Schools & ",
    lable2: "Institutes",
  },
  {
    icon: retailOutlets,
    area: "1,450,000 sqm",
    label: "Parks & Open ",
    lable2: "Spaces",
  },
  {
    icon: internationalSchool,
    area: "54 km",
    label: "Bicycle ",
    lable2: "Route",
  },
  {
    icon: swimmingPool,
    area: "185,000 sqm",
    label: "Retail & ",
    lable2: "Dining",
  },
  {
    icon: gym,
    area: "180,000 sqm",
    label: "Dubai Hills ",
    lable2: "Park",
  },
];

const InvestmentHotspot = () => {
  return (
    <div className="relative ">
      <div className="relative top-0">
        <Image
          src={location2}
          alt="Location"
          layout="responsive"
          width={1440}
          height={853}
          className=" max-h-[1040px] "
        />
      </div>
      <div className="absolute w-full">
        <div className="container mx-auto">
          <div className="relative  z-50 top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primaryGreen text-white rounded-[18px] px-8 py-16 ">
            <h2 className="mb-10 text-center">
              Experience a World-Class Lifestyle at <br />
              Dubai Hills Estate
            </h2>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-2">{feature.icon}</div>
                  <h3 className="uppercase">{feature.area}</h3>
                  <p className="font-light p3">
                    {feature.label} {feature.lable2}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <Payment />
      </div>
    </div>
  );
};

export default InvestmentHotspot;
