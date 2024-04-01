import { useAuth0 } from "@auth0/auth0-react";
import Button from "../bits/Button";

export default function RegisterButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      onClick={() =>
        loginWithRedirect({
          appState: {
            returnTo: window.location.pathname //redirect location after signup
          },
          authorizationParams: {  //authorizationParams object as query parameters of the call to the Auth0 /authorize endpoint
            screen_hint: "signup" //set screen_hint with a value of 'signup' to send to the sign-up page
          }
        })
      }
      className="m-1"
    >
      REGISTER
    </Button>
  );
}
