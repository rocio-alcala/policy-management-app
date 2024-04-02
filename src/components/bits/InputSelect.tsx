import { ComponentPropsWithoutRef, forwardRef } from "react";
import Errors from "./Errors";
import clsx from "clsx/lite";

interface SelectSpecificProps {
  id: string | number;
  options: { value: string | number; label: string }[];
  placeholder?: string;
  errors?: string;
  label?: string;
}

const InputSelect = forwardRef<
  HTMLSelectElement,
  ComponentPropsWithoutRef<"select"> & SelectSpecificProps
>(({ label, options, errors, required, placeholder, className, ...props }, ref) => {
  return (
    <div className={clsx("flex-col",className)}>
      <label>
        {label && (
          <legend className="font-semibold leading-6 py-1 text-grey8-dark-text">
            {label}
            {required && <span className="text-red-500">*</span>}
          </legend>
        )}
        <select
        defaultValue=""
          className="mt-1 p-3 border border-border-default placeholder:text-placeholder rounded-md w-full focus:outline-none focus:border-blue-500"
          ref={ref}
          aria-label={label}
          {...props}
        >
          {placeholder && (
            <option className="text-placeholder" disabled value="">
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <Errors message={errors} />
    </div>
  );
});

export default InputSelect;
