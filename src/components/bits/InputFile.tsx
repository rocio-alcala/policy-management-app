import { ComponentPropsWithoutRef, forwardRef } from "react";
import { MdFileUpload } from "react-icons/md";

import { cn } from "../../lib/utils";

import Errors from "./Errors";

interface InputFileSpecificProps {
  id: string | number;
  description?: string;
  errors?: string;
  label?: string;
}

const InputFile = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input"> & InputFileSpecificProps
>(
  (
    { label, errors, required, description, className, children, ...props },
    ref,
  ) => {
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
            className=" opacity-0 hidden"
            ref={ref}
            type="file"
            aria-label={label}
            {...props}
          />
          <div className="w-full text-axa-blue text-center relative gap-2 flex items-center justify-center rounded disabled:opacity-50 p-3 border-dashed border-2 text-sm font-semibold leading-4 bg-grey1">
            <MdFileUpload size={20} className="fill-axa-blue" />
            {children}
          </div>
        </label>
        <Errors message={errors} />
        {description && (
          <div className="text-xs text-gray-400 tracking-wide leading-6">
            {description}
          </div>
        )}
      </div>
    );
  },
);

export default InputFile;
