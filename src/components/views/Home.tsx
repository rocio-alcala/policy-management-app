import { useAuth0 } from "@auth0/auth0-react";
import { NavLink, Outlet } from "react-router-dom";
import LogInButton from "../organisms/LogInButton";
import RegisterButton from "../organisms/RegisterButton";
import Spinner from "../bits/Spinner";

export default function Home() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) return <Spinner/>
  return (
    <>
      {!isAuthenticated ? (
        <div className="flex-1 flex flex-col items-center justify-start p-8 pt-20">
          <div className="m-5">
            <h1 className="font-bold inline font-publico-headline text-2xl leading-7">
              Welcome
            </h1>
            <p>Login to access your personal space</p>
          </div>
          {/* label */}
          <div>
            <LogInButton/>
            <RegisterButton />
          </div>
        </div>
      ) : (
        <>
          <div className="p-3 py-5 bg-background">
            <h1 className="font-semibold leading-8 text-xl">Hello!</h1>
            <p className="leading-6 text-base font-normal">
              Welcome to your personal space
            </p>
          </div>
          <div className="flex bg-slate-200">
            <NavLink
              to={`/home/allpolicies`}
              className={({ isActive }) =>
                isActive
                  ? "border-b-[3.5px] border-tertiary-default p-4 flex-auto  rounded-t-md leading-4 bg-white text-center text-base font-semibold text-tertiary-default"
                  : "p-4 flex-auto rounded-t-md bg-white shadow-inner-lg font-semibold text-base leading-4  text-placeholder text-center shadow-inner-l-r-b"
              }
            >
              ALL POLICIES
            </NavLink>
            <NavLink
              to={`/home/activepolicies`}
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
        </>
      )}
    </>
  );
}
