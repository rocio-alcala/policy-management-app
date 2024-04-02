interface ErrorsTypeProps {
  message: undefined | string;
}

export default function Errors({ message }: ErrorsTypeProps) {
  return (
    <>
      {message ? (
        <p className="text-red-500 text-sm">{message}</p>
      ) : null}
    </>
  );
}
