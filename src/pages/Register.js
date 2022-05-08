import React from "react";
import SignForm from "../components/SignForm";
import Logo from "../assets/logo.svg";

const Register = () => {
  return (
    <div className="flex flex-col items-center px-6 sm:px-0">
      <img src={Logo} alt="Logo" className="py-12" />
      <SignForm title={"Sign Up"} />
    </div>
  );
};

export default Register;
