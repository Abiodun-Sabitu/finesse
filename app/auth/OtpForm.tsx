"use client";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import useCountdownTimer from "@/lib/hooks/useCountDownTimer";

// States
const OtpForm = () => {
  const [value, setOtpValue] = useState("");
  // Handle form submission
  const handleSubmit = (e: any) => {
    console.log("Submitted OTP:", value);
  };

  const timeLeft = useCountdownTimer(60); // Start the countdown from 60 seconds

  return (
    <>
      <div className=" bg-[#f5efe6d7] shadow-2xl rounded-lg py-7">
        <form className=" p-8 rounded-lg" onSubmit={(e) => e.preventDefault()}>
          <h3 className="text-[1.2rem] font-extrabold text-khaki text-center pb-3 ">
            One Time Password
          </h3>
          <p className="text-sm text-darkGreen text-center my-4">
            Enter the OTP sent to your email to continue
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
            <div className="flex flex-row items-center mt- gap-2">
              <Button
                className={`p-0 ${timeLeft ? "text-silver" : "text-seaGreen"} `}
                variant="link"
              >
                {timeLeft ? "Didn't get the OTP ? Resend in" : "Resend OTP "}
              </Button>
              <span className="text-darkGreen">
                {timeLeft > 0 ? `${timeLeft}s` : ""}
              </span>
            </div>
            <Button
              onClick={handleSubmit}
              className="mt-5"
              variant="long"
              disabled={value.length < 6}
            >
              Verify
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default OtpForm;
