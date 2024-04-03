import { cn } from "../../utils/utils";

interface ImageButtonProps {
  onClick?: () => void;
  className?: string;
  text?: string;
  srcImage?: string;
}

export default function ImageButton({
  onClick,
  className,
  text,
  srcImage
}: ImageButtonProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center hover:cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {srcImage && <img src={srcImage} className="h-8 w-8 mb-3"></img>}
      {text && (
        <p className="text-axa-blue text-xs leading-[14px] font-bold text-center">
         {text}
        </p>
      )}
    </div>
  );
}
