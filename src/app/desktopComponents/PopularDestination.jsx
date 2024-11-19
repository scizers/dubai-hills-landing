import React from "react";
import Image from "next/image";
import location2 from "../../images/location/location.jpg";

const locations = [
  { time: "15", text: "minutes from", name: "Downtown Dubai" },
  { time: "20", text: "minutes from Dubai", name: "International Airport" },
  { time: "15", text: "minutes from ", name: "DubaiMarina" },
  { time: "30", text: "minutes from Al ", name: "Maktoum Airport" },
];

const PopularDestination = () => {
  return (
    <section className="mx-auto max-w-[1920px]">
      <div className="items-center justify-center gap-4 mx-auto xl:gap-8 2xl:gap-40">
        <div className="mt-auto ">
          <Image
            src={location2}
            alt="Location"
            layout="responsive"
            width={393}
            height={358}
          />
        </div>
        <div className="grid grid-cols-4 py-4 pb-16">
          {locations.map((location, index) => (
            <div
              key={index}
              className="flex flex-col items-center mt-2 2xl:mt-6"
            >
              <h2 className=" text-primaryGreen">{location.time}</h2>

              <p className="text-sm leading-6 tracking-[2px] text-grayText">
                {location.text}
              </p>
              <p className="text-sm leading-6 tracking-[2px] text-grayText">
                {location.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestination;
