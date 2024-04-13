"use client";

import TextField from "@/components/ui/input";
import PasswordField from "@/components/ui/passwordField";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import useCountdownTimer from "@/lib/hooks/useCountDownTimer";
import { useRouter } from "next/navigation";

const ForgotPassword = () => {
  const router = useRouter();
  // States
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [resetForm, setResetForm] = useState({
    email: "",
    otp: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle otp verification
  const handleSubmit = (e: any) => {
    e.preventDefault(); // Prevent form submission
    console.log(resetForm);

    router.push("/auth/login");
  };

  const timeLeft = useCountdownTimer(60);

  return (
    <>
      <div className="bg-[#f5efe6d7] shadow-2xl rounded-lg">
        <form className="p-8 rounded-lg" onSubmit={handleSubmit}>
          <h3 className="text-[1.2rem] font-extrabold text-khaki text-center pb-3">
            Reset Password
          </h3>
          {resetForm.otp.length < 6 ? (
            <>
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
                  placeholder="Registered email"
                  className="absolute"
                  htmlFor="email"
                  value={resetForm.email}
                  onChange={(e) =>
                    setResetForm({ ...resetForm, email: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col place-items-center mt-20">
                <p className="text-sm text-darkGreen text-center mt-2 mb-3">
                  Enter the OTP sent to your email to continue
                </p>
                <InputOTP
                  maxLength={6}
                  value={resetForm.otp}
                  onChange={(newOtpValue) =>
                    setResetForm({ ...resetForm, otp: newOtpValue })
                  }
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
                id="new_password"
                type="password"
                name="newPassword"
                label="New Password"
                htmlFor="new_password"
                placeholder="Enter new password"
                passwordVisibility={passwordVisibility}
                handlePasswordToggleState={() =>
                  setPasswordVisibility(!passwordVisibility)
                }
                value={resetForm.password}
                onChange={(e) =>
                  setResetForm({ ...resetForm, password: e.target.value })
                }
              />
              <div className="mt-20">
                <PasswordField
                  id="confirm_password"
                  type="password"
                  name="confirmPassword"
                  htmlFor="confirm_password"
                  label="Confirm Password"
                  placeholder="Confirm password"
                  passwordVisibility={passwordVisibility}
                  handlePasswordToggleState={() =>
                    setPasswordVisibility(!passwordVisibility)
                  }
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div>
                <Button className="w-full h-12" variant="long">
                  <span>Reset Password</span>
                </Button>
              </div>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
