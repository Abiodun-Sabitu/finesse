"use client";
import { useContext } from "react";
import LoginForm from "./LoginForm";
import ForgotPassword from "./ForgotPassword";
import Register from "./Register";
import OtpForm from "./OtpForm";
import { AuthContextProvider, AuthContext } from "@/lib/hooks/authContext";

const Page = () => {
  return (
    <AuthContextProvider>
      <PageContent />
    </AuthContextProvider>
  );
};

const PageContent = () => {
  const { currentView } = useContext(AuthContext);
  return (
    <>
      {currentView === "login" && <LoginForm />}
      {currentView === "forgotPassword" && <ForgotPassword />}
      {currentView === "register" && <Register />}
      {currentView === "otpForm" && <OtpForm />}
    </>
  );
};

export default Page;
