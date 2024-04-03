
import { cn } from "../../utils/utils";

interface ButtonSpecificPropsType {
  isLoading?: boolean;
  primary?: boolean;
  className?: string;
}

export default function Button({
  children,
  isLoading,
  primary,
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonSpecificPropsType) {
  const buttonColorClassName = cn(
    "w-full rounded disabled:bg-slate-400 p-3 text-center border-2  tracking-widest text-sm font-semibold leading-4",
    primary &&
      "bg-button-primary text-text-button-primary shadow-button border-tertiary-default",
    !primary && "bg-transparent text-tertiary-default border-tertiary-default",
    className
  );

  return (
    <button className={buttonColorClassName} {...rest}>
      {isLoading ? <p>LOADING</p> : children}
    </button>
  );
}
