import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import MobileMenu from "../organisms/MobileMenu";

export default function Root() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
          <div className=" border-2 p-2 border-blue-950 rounded">
            <AiOutlineMenu
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blue-950"
            />
          </div>
        </nav>
        <div className="relative">
          <MobileMenu isMenuOpen={isMenuOpen} />
        </div>
      </div>
      <>{location.pathname === "/" ? <Navigate to="/home" /> : <Outlet />}</>
    </>
  );
}
