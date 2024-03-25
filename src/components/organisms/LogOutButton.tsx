import { useAuth0 } from "@auth0/auth0-react";
import Button from "../bits/Button";

export default function LogOutButton() {
  const { logout } = useAuth0();

  return (
    <Button
      onClick={() => {
        logout({
          logoutParams: {
            returnTo: window.location.origin
          }
        });
      }}
    >
      LOG OUT
    </Button>
  );
}
