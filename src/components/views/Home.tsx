import { NavLink, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="p-3 py-5 bg-slate-200">
        <h1 className="font-semibold">Hello!</h1>
        <p>Welcome to your personal space</p>
      </div>
      <div className="flex bg-slate-200">
        <NavLink
          to={`/home/allpolicies`}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-blue-950 p-2 flex-auto rounded-t-md bg-white text-center text-sm font-semibold text-blue-900"
              : "p-2 flex-auto rounded-t-md bg-white shadow-inner-lg font-semibold text-sm text-gray-700 text-center shadow-inner-l-r-b"
          }
        >
          ALL POLICIES
        </NavLink>
        <NavLink
          to={`/home/activepolicies`}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-blue-950 p-2 flex-auto rounded-t-md bg-white text-center text-sm font-semibold text-blue-900"
              : "p-2 flex-auto rounded-t-md bg-white shadow-inner-lg font-semibold text-sm text-gray-700 text-center shadow-inner-l-r-b"
          }
        >
          ACTIVE POLICIES
        </NavLink>
      </div>
      <Outlet></Outlet>
    </>
  );
}
