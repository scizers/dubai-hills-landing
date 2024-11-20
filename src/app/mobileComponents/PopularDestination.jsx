import Image from "next/image";
import React from "react";
import location from "../../images/location/location.jpg";
const PopularDestination = () => {
  const locations = [
    { time: "15", text: "minutes from", name: "Downtown Dubai" },
    { time: "20", text: "minutes from Dubai", name: "International Airport" },
    { time: "15", text: "minutes from ", name: "DubaiMarina" },
    { time: "30", text: "minutes from Al ", name: "Maktoum Airport" },
  ];

  return (
    <div className="pt-2 mx-auto">
      <Image
        src={location}
        alt="Location"
        layout="responsive"
        width={395}
        height={358}
      />

      <div className="container grid items-center grid-cols-2 gap-3 pt-4 pb-16 mx-auto">
        {locations.map((location, index) => (
          <div key={index} className="mt-2 text-center">
            <p>{location.time}</p>
            <p className="font-light p3 text-grayText">
              {location.text} <br />
              {location.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestination;
