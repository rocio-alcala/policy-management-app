import clsx, { ClassValue } from "clsx/lite";
import { twMerge } from "tailwind-merge";

export function getEnvironmentalVariable(constantKey: string) {
  const variable = import.meta.env[constantKey];
  if (!variable) {
    throw new Error(`Environmental variable not defined: ${constantKey}`);
  }

  return variable;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export function mockPromise(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

export function capitalizeString(string: string): string {
  const firstChar = string.charAt(0).toUpperCase();
  const restOfString = string.slice(1).toLowerCase();
  
  return firstChar + restOfString;
}
