"use client";

import TextField from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PasswordField from "@/components/ui/passwordField";
import { useState } from "react";

// Login form
const LoginForm = () => {
  //State Properties
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const [loginForm, setLoginForm] = useState({});

  return (
    <>
      <div className=" bg-[#f5efe6d7] shadow-2xl rounded-lg">
        <form className=" p-8 rounded-lg" onSubmit={(e) => e.preventDefault()}>
          <h3 className="text-[1.2rem] font-extrabold text-khaki text-center pb-3">
            Sign in to Finesse
          </h3>
          <TextField
            id="email"
            name="userEmail"
            type="email"
            label="Email"
            placeholder="Registered email"
          />

          <PasswordField
            id="password"
            type="password"
            name="userPassword"
            label="Password"
            placeholder="Registered password"
            passwordVisibility={passwordVisibility}
            handlePasswordToggleState={() =>
              setPasswordVisibility(!passwordVisibility)
            }
          />

          <div className="">
            <Button className="w-full h-12 " variant="long">
              <span className=""> Login</span>
            </Button>
          </div>
          <p className="text-center mt-5 cursor-pointer text-battleShipGrey">
            Create New Account
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
