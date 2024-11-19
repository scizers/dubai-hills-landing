import React from "react";

const Restaurants = ({ width = "25", height = "28" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4987 18.3333C16.5258 18.3333 19.7904 14.8076 19.7904 10.4583C19.7904 6.10907 16.5258 2.58331 12.4987 2.58331C8.47162 2.58331 5.20703 6.10907 5.20703 10.4583C5.20703 14.8076 8.47162 18.3333 12.4987 18.3333Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.423 8.20831H10.4126M9.37305 20.5833C10.9355 20.5833 12.498 22.2281 12.498 25.0833C12.498 22.2281 14.0605 20.5833 15.623 20.5833"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Restaurants;
