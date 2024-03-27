import clsx from "clsx/lite";

interface ButtonSpecificPropsType {
  isLoading?: boolean;
  primary?: boolean;
}

export default function Button({
  children,
  isLoading,
  primary,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonSpecificPropsType) {
  const buttonColorClassName = clsx(
    "w-full rounded disabled:bg-slate-400 p-3 text-center border-2 border-tertiary-default tracking-widest text-sm font-semibold leading-4",
    primary && "bg-button-primary text-text-button-primary shadow-button",
    !primary && "bg-transparent text-tertiary-default "
  );

  return (
        <button className={buttonColorClassName} {...rest}>
      {isLoading ? <p>LOADING</p> : children} <div className=""></div>
    </button>
  );
}
