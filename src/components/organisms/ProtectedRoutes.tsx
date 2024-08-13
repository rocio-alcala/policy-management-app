import { useAuth0 } from "@auth0/auth0-react";
import { PropsWithChildren } from "react";

import Spinner from "../bits/Spinner";

export default function ProtectedRoutes({ children }: PropsWithChildren) {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  console.log(isAuthenticated, "loading");
  // check for authentication and redirect to login if is not auth
  // else render the protected routes
  if (isLoading)
    return (
      <>
        <Spinner />
        <h1>Is loading</h1>
      </>
    );
  if (!isAuthenticated) {
    loginWithRedirect({
      appState: { returnTo: window.location.pathname },
    });
  }

  return <>{children}</>;
}
