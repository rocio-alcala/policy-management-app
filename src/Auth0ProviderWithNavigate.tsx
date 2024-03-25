import { AppState, Auth0Provider, RedirectLoginOptions } from "@auth0/auth0-react";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { getEnvironmentalVariable } from "./utils/utils";

export const Auth0ProviderWithNavigate = ({ children }: { children: ReactNode}) => {
  const navigate = useNavigate();

  const domain = getEnvironmentalVariable('VITE_AUTH0_DOMAIN')
  const clientId = getEnvironmentalVariable('VITE_AUTH0_CLIENT_ID');
  const redirectUri = getEnvironmentalVariable('VITE_AUTH0_CALLBACK_URL'); 


  const onRedirectCallback = ({appState}: RedirectLoginOptions<AppState>) => {
    navigate(appState?.returnTo || window.location.pathname);
  }; //redirect to the url send in the appState

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={(appState)=>onRedirectCallback({appState})} //it is executed when app is redirected to Callback url
    >
      {children}
    </Auth0Provider>
  );
};