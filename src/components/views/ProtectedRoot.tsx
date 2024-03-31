import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import MobileMenu from "../organisms/MobileMenu";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from "../bits/Spinner";
import LogInButton from "../organisms/LogInButton";
import RegisterButton from "../organisms/RegisterButton";

export default function ProtectedRoot() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <div className="font-source-sans-pro text-text-primary">
        <nav className="p-4 border-b-[2.5px] border-blue-950 flex justify-between items-center">
          <div
            className="bg-blue-950 rounded p-2 px-4 text-white "
            onClick={() => navigate("/home")}
          >
            Logo
          </div>
          <div
            className=" border-2 p-2 border-blue-950 rounded hover:cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AiOutlineMenu className="text-blue-950" />
          </div>
        </nav>
        <div className="relative">
          <MobileMenu isMenuOpen={isMenuOpen} />
        </div>
      </div>
      {isLoading ? (
        <Spinner />
      ) : //check for authenticated user or else protect routes
      !isAuthenticated ? (
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
        <>
          <Outlet />
          {location.pathname === "/" && <Navigate to="/home" replace={true} />}
        </>
      )}
    </>
  );
}
