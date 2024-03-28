import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Policies from "./components/views/AllPolicies.tsx";
import AllPolicies from "./components/views/AllPolicies.tsx";
import ActivePolicies from "./components/views/ActivePolicies.tsx";
import Home from "./components/views/Home.tsx";
import Callback from "./components/views/Callback.tsx";
import ProvidersWrappers from "./components/views/ProvidersWrappers.tsx";
import ProtectedRoot from "./components/views/ProtectedRoot.tsx";
import ConfirmEmail from "./components/views/ConfirmEmail.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <ProvidersWrappers />, //defined to wrap with de Auth0 provider the app
    //keeping this last one inside the router provider
    children: [
      {
        path: "/",
        element: <ProtectedRoot />,
        children: [
          {
            path: "/home",
            element: <Home />,
            children: [
              {
                path: "/home/allpolicies",
                element: <AllPolicies />
              },
              {
                path: "/home/activepolicies",
                element: <ActivePolicies />
              }
            ]
          },
          {
            path: "/policies/:policyId",
            element: <Policies />
          },
          {
            path: "/confirm-email/:policyId",
            element: <ConfirmEmail />
          },
          {
            path: "/callback",
            element: <Callback />
          }
        ]
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
