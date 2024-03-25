import { Outlet, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useAuth0 } from "@auth0/auth0-react";
import LogInButton from "../organisms/LogInButton";
import LogOutButton from "../organisms/LogOutButton";
import RegisterButton from "../organisms/RegisterButton";

export default function Root() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  return (
    <>
      <nav className="p-4 border-b-2 border-blue-950 flex justify-between items-center">
        <div
          className="bg-blue-950 rounded p-2 px-4 text-white "
          onClick={() => navigate("/home")}
        >
          Logo
        </div>
        {isAuthenticated ? <LogOutButton /> : <LogInButton />}
        {isAuthenticated || <RegisterButton />}
        <div className=" border-2 p-2 border-blue-950 rounded">
          <AiOutlineMenu
            onClick={() =>
              loginWithRedirect({
                appState: { returnTo: window.location.pathname }
              })
            }
            className="text-blue-950"
          />
        </div>
      </nav>
      <Outlet />
    </>
  );
}
