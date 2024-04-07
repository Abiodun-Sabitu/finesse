import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  placeholder: string;
  type: string;
  // value: string;
  name: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="mb-7">
        <p className=" font-semibold text-darkGreen mb-2">{props.label}</p>
        <input
          autoComplete="off"
          type={type}
          className={cn(
            `flex h-12 w-full rounded-md  
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
