import { useCombobox } from "downshift";
import { useState } from "react";

import { cn } from "@/lib/utils";

type SelectValue = string | number;

type SelectProps = {
  value: SelectValue;
  onChange: (selectedItem: SelectValue) => void;
  items: { value: string | number; label: string }[];
  id: string;
  placeHolder: string;
};

export default function Select({
  items,
  onChange,
  value,
  id,
  placeHolder,
}: SelectProps) {
  // filter items based on the input in the select
  const [inputValue, setInputValue] = useState("");
  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(inputValue.toLowerCase()),
  );

  const {
    isOpen,
    getToggleButtonProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    getLabelProps,
    getInputProps,
    selectedItem,
  } = useCombobox({
    items: filteredItems,
    itemToString: (item) => item?.label || "",
    selectedItem: items.find((item) => item.value === value) || null, // to sync the selectedItem show in the input with the value of the form
    onSelectedItemChange: (item) => onChange(item.selectedItem.value), // to sync the new selectedItem with the form
    onInputValueChange: ({ inputValue }) => setInputValue(inputValue),
  });

  return (
    <div className="relative">
      <div className="flex flex-col gap-1">
        <label {...getLabelProps()} htmlFor={id}>
          Language
        </label>
        <div
          {...getToggleButtonProps()}
          className="flex mt-1 p-3 h-11 border border-border-default placeholder:text-placeholder rounded-md w-full focus:outline-none focus:border-blue-500 ex justify-between cursor-pointer items-center"
        >
          <input
            id={id}
            {...getInputProps()}
            placeholder={placeHolder}
            className="w-fit focus:outline-none"
          ></input>
          <span className="px-2">{isOpen ? <>&#8593;</> : <>&#8595;</>}</span>
        </div>
      </div>
      <ul
        className={`absolute w-full bg-white mt-1 shadow-md p-0 z-[2000] ${
          !isOpen && "hidden"
        }`}
        {...getMenuProps()}
      >
        {isOpen &&
          filteredItems.map((item, index) => (
            <li
              className={cn(
                highlightedIndex === index && "bg-blue-300",
                selectedItem === item && "font-bold",
                "py-2 px-3 shadow-sm flex flex-col",
              )}
              key={item.value}
              {...getItemProps({ item, index })}
            >
              <span>{item.label}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
