import { useAuth0 } from "@auth0/auth0-react";
import LogInButton from "../organisms/LogInButton";
import RegisterButton from "../organisms/RegisterButton";
import Spinner from "../bits/Spinner";
import { Navigate } from "react-router-dom";

export default function Login() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Spinner />;
  return (
    <>
      {!isAuthenticated ? (
        <div className="flex-1 flex flex-col items-center justify-start p-8 pt-20">
          <div className="m-5">
            <h1 className="font-bold inline font-publico-headline text-2xl leading-7">
              Welcome
            </h1>
            <p>Login to access your personal space</p>
          </div>
          {/* label */}
          <div>
            <LogInButton />
            <RegisterButton />
          </div>
        </div>
      ) : (
        <Navigate to="/home" />
      )}
    </>
  );
}
