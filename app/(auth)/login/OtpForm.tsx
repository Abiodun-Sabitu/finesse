"use client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const OtpForm = () => {
  const [value, setOtpValue] = useState("");

  // Handle form submission
  const handleSubmit = (e: any) => {
    console.log("Submitted OTP:", value);
  };

  return (
    <>
      <div className=" bg-[#f5efe6d7] shadow-2xl rounded-lg py-10">
        <form className=" p-8 rounded-lg" onSubmit={(e) => e.preventDefault()}>
          <h3 className="text-[1.2rem] font-extrabold text-khaki text-center pb-3 ">
            Login Authentication
          </h3>
          <p className="text-sm  text-center my-4">
            Enter the One Time Password sent to your email
          </p>
          <div className="flex flex-col place-items-center ">
            <InputOTP
              maxLength={6}
              value={value}
              onChange={(value: any) => setOtpValue(value)}
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
            <Button
              onClick={handleSubmit}
              className="mt-7"
              variant="long"
              disabled={value.length < 6}
            >
              Verify OTP
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default OtpForm;
