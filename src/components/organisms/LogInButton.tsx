import { useAuth0 } from "@auth0/auth0-react";
import Button from "../bits/Button";

export default function LogInButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      primary={true}
      onClick={() =>
        loginWithRedirect({
          appState: { returnTo: window.location.pathname }
        })
      }
      className="m-1"
    >
      LOG IN
    </Button>
  );
}
