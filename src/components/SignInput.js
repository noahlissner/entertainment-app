import React from "react";

const SignInput = ({ placeholder }) => {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border-grey-blue bg-transparent border-b-[1px] px-4 pb-4 
        focus:border-white focus:outline-none text-body-m font-light caret-red"
      />
    </>
  );
};

export default SignInput;
