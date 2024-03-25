import { Outlet } from "react-router-dom";
import { Auth0ProviderWithNavigate } from "../../Auth0ProviderWithNavigate";

export default function Provider() {
  return (
    <Auth0ProviderWithNavigate>
      <Outlet />
    </Auth0ProviderWithNavigate>
  );
}
