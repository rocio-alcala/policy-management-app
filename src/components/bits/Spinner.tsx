import { cn } from "../../utils/utils";
interface SpinnerProps {
  className?: string;
}

export default function Spinner({ className }: SpinnerProps) {
  return (
    <div className={cn("flex justify-center items-center mt-24", className)}>
      <div className="spinner-blue-900 h-12 w-12 border-t-4 border-b-4 border-axa-blue rounded-full animate-spin"></div>
    </div>
  );
}
