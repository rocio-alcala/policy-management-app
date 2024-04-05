import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../bits/Spinner";
import { PropsWithChildren } from "react";

export default function ProtectedRoutes({ children }: PropsWithChildren) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  // check for authentication and redirect to login if is not auth
  // else render the protected routes
  if (isLoading) return <Spinner />;
  if (!isAuthenticated) {
    loginWithRedirect({
      appState: { returnTo: window.location.pathname },
    });
    return <Spinner />;
  }

  return <>{children}</>;
}
