import { Outlet } from "react-router-dom";
import { Auth0ProviderWithNavigate } from "./Auth0ProviderWithNavigate";
import { Provider } from "react-redux";
import { store } from "../../store/store";

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
