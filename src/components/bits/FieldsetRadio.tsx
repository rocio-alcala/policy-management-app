import { ComponentPropsWithoutRef, forwardRef } from "react";

import { cn } from "../../utils/utils";
import Errors from "../bits/Errors";

interface FieldsetRadioPropsType {
  items: {
    value: string;
    label?: string;
    description?: string;
  }[];
  id: string | number;
  label?: string;
  description?: string;
  errors?: string;
  asButton?: boolean;
  valuesAsColumn?: boolean;
}

const FieldsetRadio = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input"> & FieldsetRadioPropsType
>(
  (
    {
      items,
      label,
      id,
      errors,
      valuesAsColumn,
      asButton,
      required,
      description,
      className,
      ...rest
    },
    ref,
  ) => {
    const itemsContainerClassName = cn(
      valuesAsColumn && "flex-col",
      !valuesAsColumn && "flex flex-wrap justify-between",
    );
    const divContainerClassName = cn(
      "h-max",
      asButton && "mr-4 text-center min-w-[fit-content]",
      !asButton && "mr-8 flex items-center",
    );
    const inputClassName = cn(
      "peer",
      asButton && "hidden",
      !asButton && "h-5 w-5 text-red-800",
    );
    const labelClassName = cn(
      "block w-full ",
      asButton &&
        "border-2 rounded-md hover:border-blue-500 hover:ring cursor-pointer peer-checked:border-blue-500 bg-white peer-disabled:bg-[#f5f5f5]",
      !asButton && "cursor-pointer peer-checked:text-blue-900",
    );

    return (
      <fieldset className={cn("flex flex-col", className)}>
        {label && (
          <legend className="font-semibold leading-6 py-1 text-grey8-dark-text">
            {label}
            {required && <span className="text-red-500">*</span>}
          </legend>
        )}
        <div className={itemsContainerClassName}>
          {items.map((item, index) => {
            return (
              <div key={item.value + index} className={divContainerClassName}>
                <input
                  id={item.value + id}
                  ref={ref}
                  className={inputClassName}
                  type="radio"
                  value={item.value}
                  aria-label={item.label}
                  {...rest}
                ></input>
                <label htmlFor={item.value + id} className={labelClassName}>
                  <span className="tracking-wide ml-1 text-text-primary leading-6">
                    {item.label ? item.label : item.value}
                  </span>
                </label>
              </div>
            );
          })}
        </div>
        <Errors message={errors} />
        {description && (
          <div className="text-xs  text-gray-400 tracking-wide leading-6">
            {description}
          </div>
        )}
      </fieldset>
    );
  },
);

export default FieldsetRadio;
