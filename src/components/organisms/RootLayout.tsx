import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";

export default function RootLayout() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="font-source-sans-pro text-text-primary flex flex-col h-screen">
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
      <Outlet></Outlet>
      {location.pathname === "/" && (
        <Navigate to="/policies/all" replace={true} />
      )}
    </main>
  );
}
