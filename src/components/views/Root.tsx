import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <h1>NavBar iria aqui</h1>
      <Outlet />
    </>
  );
}
