import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Outlet, useNavigate } from "react-router-dom";

import MobileMenu from "./MobileMenu";

export default function RootLayout() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="font-source-sans-pro text-text-primary flex flex-col h-screen">
      <nav className="p-4 border-b-[2.5px] border-blue-950 flex justify-between items-center">
        <img
          src="/Axa.png"
          className="rounded px-4 text-white "
          onClick={() => navigate("/policies/all")}
        />

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
      <div className="flex-1">
        <Outlet />
      </div>
    </main>
  );
}
