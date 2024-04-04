import { ComponentPropsWithoutRef, forwardRef } from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import Errors from "./Errors";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { cn } from "../../utils/utils";

interface InputDateSpecificProps {
  id: string | number;
  description?: string;
  label?: string;
  selectedValue?: Date | null | undefined;
  errors?: string;
}

const InputDate = forwardRef<
  ReactDatePicker,
  ComponentPropsWithoutRef<"input"> &
    InputDateSpecificProps &
    ReactDatePickerProps
>(
  (
    {
      selectedValue,
      showIcon,
      errors,
      label,
      id,
      required,
      description,
      className,
      ...restProps
    },
    ref
  ) => {
    return (
      <div className={cn("flex flex-col", className)}>
        <label htmlFor={id}>
          {label && (
            <legend className="font-semibold leading-6 py-1 text-grey8-dark-text">
              {label}
              {required && <span className="text-red-500">*</span>}
            </legend>
          )}
        </label>
        <div className="mt-2">
          <DatePicker
            className="cursor-pointer w-full p-10 border rounded-md focus:outline-none border-border-default focus:border-blue-500 disabled:bg-slate-100"
            dateFormat="yyyy/MM/dd"
            customInput={<input className="h-11 text-center px-12" />}
            showIcon={showIcon}
            wrapperClassName="w-full"
            calendarIconClassname="mt-[4px] ml-[10px] text-xl"
            ref={ref}
            selected={selectedValue}
            id={id}
            {...restProps}
          />
        </div>
        <Errors message={errors} />
        {description && (
          <div className="text-xs  text-gray-400 tracking-wide leading-6">
            {description}
          </div>
        )}
      </div>
    );
  }
);

export default InputDate;
