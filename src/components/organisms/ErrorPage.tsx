import { Link } from "react-router-dom";

interface ErrorPageProps {
  errorMsg: string;
  status?: string | number;
}

export default function ErrorPage({ errorMsg, status }: ErrorPageProps) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-3">
      <h1 className="text-4xl font-bold mb-6">
        Error {status && <span>{status}</span>}
      </h1>
      <p className="text-lg mb-6">{errorMsg}</p>
      <p className="text-base">
        <Link to="/policies/all">
          <div className="text-blue-500 hover:underline">
            Back to all policies page
          </div>
        </Link>
      </p>
    </div>
  );
}
