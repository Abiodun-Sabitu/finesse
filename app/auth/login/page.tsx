"use client";

import TextField from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PasswordField from "@/components/ui/passwordField";
import { useState } from "react";

// Login form
const LoginForm = () => {
  //State Properties
  const [passwordVisibility, setPasswordVisibility] = useState(true);

  const [loginForm, setLoginForm] = useState({
    userEmail: "",
    userPassword: "",
  });

  const handleLogin = () => {
    console.log(loginForm);
  };

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
            htmlFor="email"
            value={loginForm.userEmail}
            onChange={(e) =>
              setLoginForm({ ...loginForm, userEmail: e.target.value })
            }
          />

          <PasswordField
            id="password"
            htmlFor="password"
            type="password"
            name="userPassword"
            label="Password"
            placeholder="Registered password"
            passwordVisibility={passwordVisibility}
            handlePasswordToggleState={() =>
              setPasswordVisibility(!passwordVisibility)
            }
            value={loginForm.userPassword}
            onChange={(e) =>
              setLoginForm({ ...loginForm, userPassword: e.target.value })
            }
          />
          <div className=" font-semibold text-battleShipGrey mt-20 cursor-pointer">
            Forgot Password?
          </div>
          <div className="">
            <Button
              className="w-full h-12 mt-8"
              variant="long"
              onClick={(e) => handleLogin()}
            >
              <span className=""> Login</span>
            </Button>
          </div>
          <div className="text-center mt-5 cursor-pointer text-battleShipGrey">
            Create New Account
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
