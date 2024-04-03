import { cn } from "../../utils/utils";

interface ErrorsTypeProps {
  message: undefined | string;
  className?: string
}

export default function Errors({ message, className }: ErrorsTypeProps) {
  return (
    <>
      {message ? (
        <p className={cn("text-red-500 text-sm",className)}>{message}</p>
      ) : null}
    </>
  );
}
