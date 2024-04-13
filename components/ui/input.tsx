import * as React from "react";

import { cn } from "@/lib/utils";
import { Html } from "next/document";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  placeholder: string;
  type: string;
  value: string;
  name: string;
  htmlFor: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, htmlFor, id, ...props }, ref) => {
    return (
      <div className="mb-7">
        <p className=" font-semibold text-darkGreen mb-2">
          <label htmlFor={htmlFor}>{props.label}</label>
        </p>
        <input
          autoComplete="off"
          id={id}
          type={type}
          className={cn(
            `flex h-11 w-full rounded-md  
             px-3 py-1 text-md shadow-sm 
            bg-white/70 ring-1 ring-battleShipGrey/55
            placeholder:text-silver focus-visible:outline-none 
            focus-visible:ring-1 focus-visible:ring-dun
            `,
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
