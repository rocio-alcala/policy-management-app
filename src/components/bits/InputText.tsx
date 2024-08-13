import { ComponentPropsWithoutRef, forwardRef } from "react";

import { cn } from "../../lib/utils";

import Errors from "./Errors";

interface InputTextSpecificProps {
  id: string | number;
  description?: string;
  errors?: string;
  label?: string;
}

const InputText = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input"> & InputTextSpecificProps
>(({ label, errors, required, description, className, ...props }, ref) => {
  return (
    <div className={cn("flex-col", className)}>
      <label>
        {label && (
          <legend className="font-semibold leading-6 py-1 text-grey8-dark-text">
            {label}
            {required && <span className="text-red-500">*</span>}
          </legend>
        )}
        <input
          className="mt-1 p-3 h-11 border border-border-default placeholder:text-placeholder rounded-md w-full focus:outline-none focus:border-blue-500 disabled:bg-grey2"
          ref={ref}
          type="text"
          aria-label={label}
          {...props}
        />
      </label>
      <Errors message={errors} />
      {description && (
        <div className="text-xs  text-gray-400 tracking-wide leading-6">
          {description}
        </div>
      )}
    </div>
  );
});

export default InputText;
