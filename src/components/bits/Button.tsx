import clsx from "clsx/lite";

interface ButtonSpecificPropsType {
  isLoading?: boolean;
  color?: boolean;
}

export default function Button({
  children,
  isLoading,
  color,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonSpecificPropsType) {
  const buttonColorClassName = clsx(
    "w-full rounded disabled:bg-slate-400 p-3 text-center border-2 border-tertiary-default tracking-widest text-sm font-semibold leading-4",
    color && "bg-button-primary text-text-button-primary shadow-button",
    !color && "bg-transparent text-tertiary-default "
  );

  return (
        <button className={buttonColorClassName} {...rest}>
      {isLoading ? <p>LOADING</p> : children} <div className=""></div>
    </button>
  );
}
