import { ComponentPropsWithoutRef, forwardRef } from "react";
import Errors from "./Errors";
import { cn } from "../../utils/utils";

interface InputCounterSpecificProps {
  id: string | number;
  description?: string;
  errors?: string;
  label?: string;
}

const InputCounter = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input"> & InputCounterSpecificProps
>(({ label, errors, required, description, className, ...restProps }, ref) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <label className="mb-5 block text-base font-semibold text-gray-600">
        {label && (
          <legend className="font-semibold leading-6 py-1 text-grey8-dark-text">
            {label}
            {required && <span className="text-red-500">*</span>}
          </legend>
        )}
        <input
          ref={ref}
          type="number"
          className="cursor-pointer w-full border-border-default placeholder:text-placeholder mt-1 p-3 border rounded-md focus:outline-none focus:border-blue-500"
          aria-label={label}
          {...restProps}
        ></input>
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

export default InputCounter;
