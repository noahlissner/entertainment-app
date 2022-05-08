import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import SignInput from "./SignInput";

const SignForm = ({ title }) => {
  return (
    <form className="w-full max-w-[400px] bg-semi-dark-blue p-6 pb-8 rounded-xl">
      <h1 className="text-heading-l font-light mb-10">{title}</h1>
      <div className="flex flex-col gap-6 mb-10">
        <SignInput placeholder={"Email address"} />
        <SignInput placeholder={"Password"} />
        {title !== "Login" && <SignInput placeholder={"Repeat password"} />}
      </div>
      <Button
        name={title === "Login" ? "Login to your account" : "Create an account"}
      />
      <p className="text-center mt-6 font-light text-body-m">
        Don't have an account?
        <Link
          to={title === "Login" ? "/register" : "/login"}
          className="text-red ml-2"
        >
          {title === "Login" ? "Sign Up" : "Login"}
        </Link>
      </p>
    </form>
  );
};

export default SignForm;
