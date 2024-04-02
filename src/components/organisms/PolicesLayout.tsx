import { NavLink, Outlet } from "react-router-dom";

export default function PolicesLayout() {
  return (
    <div className="flex-1">
      <div className="p-3 py-5 bg-background">
        <h1 className="font-semibold leading-8 text-xl">Hello!</h1>
        <p className="leading-6 text-base font-normal">
          Welcome to your personal space
        </p>
      </div>
      <div className="flex bg-slate-200">
        <NavLink
          to={`/policies/all`}
          className={({ isActive }) =>
            isActive
              ? "border-b-[3.5px] border-tertiary-default p-4 flex-auto  rounded-t-md leading-4 bg-white text-center text-base font-semibold text-tertiary-default"
              : "p-4 flex-auto rounded-t-md bg-white shadow-inner-lg font-semibold text-base leading-4  text-placeholder text-center shadow-inner-l-r-b"
          }
        >
          ALL POLICIES
        </NavLink>
        <NavLink
          to={`/policies/active`}
          className={({ isActive }) =>
            isActive
              ? "border-b-[3.5px] border-tertiary-default p-4 flex-auto  rounded-t-md leading-4 bg-white text-center text-base font-semibold text-tertiary-default"
              : "p-4 flex-auto rounded-t-md bg-white shadow-inner-lg font-semibold text-base leading-4  text-placeholder text-center shadow-inner-l-r-b"
          }
        >
          ACTIVE POLICIES
        </NavLink>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
