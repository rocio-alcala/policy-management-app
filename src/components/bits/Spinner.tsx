import { cn } from "../../utils/utils";
interface SpinnerProps {
  className?: string;
}

export default function Spinner({ className }: SpinnerProps) {
  return (
    <div className="flex h-full justify-center items-center">
      <div
        className={cn(
          "border-4 border-solid border-gray-200 border-t-axa-blue rounded-full w-8 h-8 animate-spin",
          className,
        )}
      ></div>
    </div>
  );
}
