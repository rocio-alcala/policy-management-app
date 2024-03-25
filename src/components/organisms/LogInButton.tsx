import { useAuth0 } from "@auth0/auth0-react";
import Button from "../bits/Button";

export default function LogInButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      onClick={() =>
        loginWithRedirect({
          appState: { returnTo: window.location.pathname }
        })
      }
    >
      LOG IN
    </Button>
  );
}
