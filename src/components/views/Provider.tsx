import { Outlet } from "react-router-dom";
import { Auth0ProviderWithNavigate } from "../../Auth0ProviderWithNavigate";

export default function Provider() {
  return (
    <Auth0ProviderWithNavigate>
      <div className="font-source-sans-pro h-screen flex flex-col">
        <Outlet />
      </div>
    </Auth0ProviderWithNavigate>
  );
}
