import React from "react";

const Gym = ({ width = "32", height = "32" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.2763 27.6254H14.7201V22.4588H6.80859L11.9753 14.7088H9.43972L15.9988 5.31836L22.5566 14.7088H20.0236L25.1903 22.4588H17.2763V27.6254ZM9.21755 21.1671H14.3842H11.9301H20.0676H17.6134H22.7801H9.21755ZM9.21755 21.1671H22.7801L17.6134 13.4171H20.0676L15.9988 7.60461L11.9301 13.4171H14.3842L9.21755 21.1671Z"
        fill="white"
      />
    </svg>
  );
};

export default Gym;
