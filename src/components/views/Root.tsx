import { Outlet } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

export default function Root() {
  return (
    <>
      <nav className="p-4 border-b-2 border-blue-950 flex justify-between items-center">
        <div className="bg-blue-950 rounded p-2 px-4 text-white ">Logo</div>
        <div className=" border-2 p-2 border-blue-950 rounded"><AiOutlineMenu className="text-blue-950"/></div>
      </nav>
      <Outlet />
    </>
  );
}
