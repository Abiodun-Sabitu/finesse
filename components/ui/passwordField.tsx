import * as React from "react";

import { FaLock, FaLockOpen } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  placeholder: string;
  type: string;
  // value: string;
  name: string;
  passwordVisibility: boolean;
  handlePasswordToggleState: (state: boolean) => void;
}

const PasswordField = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      passwordVisibility,
      handlePasswordToggleState,
      ...props
    },
    ref
  ) => {
    return (
      <div>
        <p className=" font-semibold text-darkGreen mb-2">{props.label}</p>

        <div className="relative ">
          {passwordVisibility ? (
            <FaLock
              onClick={() => handlePasswordToggleState(false)} // Pass false to close the lock
              fill="#2F4F3E"
              className="mt-4 mr-3 float-end relative z-30 cursor-pointer"
            />
          ) : (
            <FaLockOpen
              onClick={() => handlePasswordToggleState(true)} // Pass true to open the lock
              fill="#2F4F3E"
              className="mt-4 mr-3 float-end relative z-30 cursor-pointer"
            />
          )}
          <input
            autoComplete="off"
            autoSave="off"
            type={passwordVisibility ? type : "text"}
            className={cn(
              `flex h-12 w-full rounded-md 
            px-3 py-1 text-md shadow-sm 
            bg-white/70 absolute ring-1 ring-battleShipGrey/55
             focus-visible:outline-none placeholder:text-silver
            focus-visible:ring-1 focus-visible:ring-dun
            `,
              className
            )}
            ref={ref}
            {...props}
          />{" "}
        </div>
      </div>
    );
  }
);
PasswordField.displayName = "PasswordField";

export default PasswordField;
