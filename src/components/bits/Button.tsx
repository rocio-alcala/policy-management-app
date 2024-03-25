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
    "w-full rounded disabled:bg-slate-400 p-3 text-center tracking-widest border-2 border-[#00008F] text-xs font-medium",
    color && "bg-[#00008F] text-white",
    !color && "bg-transparent text-[#00008F]"
  );

  return (
    <button className={buttonColorClassName} {...rest}>
      {isLoading ? <p>LOADING</p> : children}
    </button>
  );
}
