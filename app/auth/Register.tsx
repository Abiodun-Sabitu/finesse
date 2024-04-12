"use client";

import TextField from "@/components/ui/input";
import PasswordField from "@/components/ui/passwordField";
import { Button } from "@/components/ui/button";
import { useState, useContext } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import useCountdownTimer from "@/lib/hooks/useCountDownTimer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Checkbox } from "@/components/ui/checkbox";
import { AuthContext } from "@/lib/hooks/authContext";

const Register = () => {
  // States
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [value, setOtpValue] = useState("");
  const [hasVerifiedOtp, setHasVerifiedOtp] = useState(false);

  // Handle otp verification
  const handleSubmit = (e: any) => {
    e.preventDefault(); // Prevent form submission
    console.log("Submitted OTP:", value);
    setHasVerifiedOtp(true);
  };

  const timeLeft = useCountdownTimer(60);
  const { setCurrentView } = useContext(AuthContext);

  return (
    <>
      <div className="bg-[#f5efe6d7] shadow-2xl rounded-lg">
        <form className="p-8 rounded-lg" onSubmit={(e) => e.preventDefault()}>
          <h3 className="text-[1.2rem] font-extrabold text-khaki text-center pb-3">
            New User Sign Up
          </h3>
          {value.length < 6 ? (
            <>
              {/* <div className="mt-2">
                <p className=" font-semibold text-darkGreen mb-2">
                  Merchant Type
                </p>
                <Select>
                  <SelectTrigger className="w-full mb-5">
                    <SelectValue placeholder="Select your merchant type " />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Retailer</SelectItem>
                    <SelectItem value="dark">Wholesaler</SelectItem>
                    <SelectItem value="system">Distributor</SelectItem>
                  </SelectContent>
                </Select>
              </div> */}
              <div className="relative ">
                <Button
                  className="mt-8 h-11 float-end relative z-30 cursor-pointer rounded-s-none"
                  variant="long"
                >
                  {timeLeft > 0 ? "Get OTP" : "Resend"}
                </Button>
                <TextField
                  id="email"
                  name="userEmail"
                  type="email"
                  label="Email"
                  placeholder="Verify your email"
                  className="absolute"
                />
              </div>

              <div className="flex flex-col place-items-center mt-20">
                <p className="text-sm text-darkGreen text-center mt-2 mb-3">
                  Enter the OTP sent to your email to continue
                </p>
                <InputOTP
                  maxLength={6}
                  value={value}
                  onChange={(value) => setOtpValue(value)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
                <div className="flex flex-row items-center mt-4 gap-2">
                  <Button
                    className={`p-0 ${
                      timeLeft > 0 ? "text-silver" : "text-seaGreen"
                    }`}
                    variant="link"
                  >
                    {timeLeft > 0 ? "Didn't get the OTP? Resend in" : ""}
                  </Button>
                  <span className="text-darkGreen">
                    {timeLeft > 0 ? `${timeLeft}s` : ""}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <>
              <PasswordField
                id="create_password"
                type="password"
                name="createPassword"
                label="Create Password"
                placeholder="Enter password"
                passwordVisibility={passwordVisibility}
                handlePasswordToggleState={() =>
                  setPasswordVisibility(!passwordVisibility)
                }
              />
              <div className="mt-20">
                <PasswordField
                  id="confirm_password"
                  type="password"
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Confirm password"
                  passwordVisibility={passwordVisibility}
                  handlePasswordToggleState={() =>
                    setPasswordVisibility(!passwordVisibility)
                  }
                />
              </div>
              {/* <div className="mt-20">
                <TextField
                  id="phone_number"
                  name="phoneNumber"
                  type="select"
                  label="Phone Number"
                  placeholder="Enter Your Phone Number"
                />
              </div> */}

              <div className="flex items-center mt-20 gap-2 place-items-center">
                <Checkbox id="terms" checked />
                <label htmlFor="terms" className="text-battleShipGray text-sm">
                  Yes I agree to the{" "}
                  <span className="underline cursor-pointer">terms of use</span>{" "}
                </label>
              </div>

              <div>
                <Button
                  className="w-full h-12"
                  variant="long"
                  onClick={() => setCurrentView("login")}
                >
                  <span>Sign Up</span>
                </Button>
              </div>
              <div
                className="text-center mt-5 cursor-pointer text-battleShipGrey"
                onClick={() => setCurrentView("login")}
              >
                Already Have an account? Login
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default Register;
