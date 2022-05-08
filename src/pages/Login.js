import React from "react";
import Logo from "../assets/logo.svg";
import SignForm from "../components/SignForm";

const Login = () => {
  return (
    <div className="flex flex-col items-center px-6 sm:px-0">
      <img src={Logo} alt="Sign Up" className="py-12" />
      <SignForm title={"Login"} />
    </div>
  );
};

export default Login;
