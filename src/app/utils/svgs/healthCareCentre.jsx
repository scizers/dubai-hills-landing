import React from "react";

const HealthCareCentre = ({ width = "29", height = "25" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 29 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 24.3333L4.74992 18.9499V10.9499L0 8.33333L14.5 0.333328L29 8.33333V18.874H27.375V9.2611L24.2501 10.9499V18.9499L14.5 24.3333ZM14.5 14.4415L25.5988 8.33333L14.5 2.2252L3.40115 8.33333L14.5 14.4415ZM14.5 22.4514L22.6251 17.9941V11.8579L14.5 16.3284L6.37493 11.8579V17.9941L14.5 22.4514Z"
        fill="white"
      />
    </svg>
  );
};

export default HealthCareCentre;
