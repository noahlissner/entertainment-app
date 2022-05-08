import React from "react";

const Button = ({ name }) => {
  return (
    <>
      <button className="w-full h-12 rounded-md font-light text-body-m bg-red text-white hover:bg-white hover:text-semi-dark-blue duration-150">
        {name}
      </button>
    </>
  );
};

export default Button;
