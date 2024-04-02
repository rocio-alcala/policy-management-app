import { Navigate } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../bits/Spinner";
import { PropsWithChildren } from "react";

export default function ProtectedRoot({ children }: PropsWithChildren) {
  const { isAuthenticated, isLoading } = useAuth0();

  //check for authentication and redirect to login if is not auth
  //else render the protected routes
  if (isLoading) return <Spinner/>
  if (!isAuthenticated) return <Navigate to={"login"} replace={true} />;

  return <>{children}</>;
}
