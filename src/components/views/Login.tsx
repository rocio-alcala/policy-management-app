import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

import Spinner from "../bits/Spinner";
import { Button } from "../ui/button";

export default function Login() {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

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
          <div>
            <Button
              variant={"axa-primary"}
              onClick={() =>
                loginWithRedirect({
                  appState: { returnTo: window.location.pathname },
                })
              }
              className="m-1"
            >
              LOG IN
            </Button>
            <Button
              variant={"axa-secondary"}
              onClick={() =>
                loginWithRedirect({
                  appState: {
                    returnTo: window.location.pathname, // redirect location after signup
                  },
                  authorizationParams: {
                    // authorizationParams object as query parameters of the call to the Auth0 /authorize endpoint
                    screen_hint: "signup", // set screen_hint with a value of 'signup' to send to the sign-up page
                  },
                })
              }
              className="m-1"
            >
              REGISTER
            </Button>
          </div>
        </div>
      ) : (
        <>
          <Navigate to="/policies/all" replace={true} />
        </>
      )}
    </>
  );
}
