import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

import { store } from "../../store/store";

import { Auth0ProviderWithNavigate } from "./Auth0ProviderWithNavigate";

export default function ProvidersWrappers() {
  return (
    <Auth0ProviderWithNavigate>
      <Provider store={store}>
        <div className="font-source-sans-pro h-screen flex flex-col">
          <Outlet />
        </div>
      </Provider>
    </Auth0ProviderWithNavigate>
  );
}
