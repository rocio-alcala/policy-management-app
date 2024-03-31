import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllPolicies from "./components/views/AllPolicies.tsx";
import ActivePolicies from "./components/views/ActivePolicies.tsx";
import Home from "./components/views/Home.tsx";
import Callback from "./components/views/Callback.tsx";
import ProvidersWrappers from "./components/views/ProvidersWrappers.tsx";
import ProtectedRoot from "./components/views/ProtectedRoot.tsx";
import ConfirmEmail from "./components/views/ConfirmEmail.tsx";
import Policy from "./components/views/Policy.tsx";
import PolicyDetails from "./components/views/PolicyDetails.tsx";
import PersonalDetails from "./components/views/PersonalDetails.tsx";

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
            path: "/:policyId",
            element: <Policy />,
            children: [
              {
                path: "/:policyId/policy-details",
                element: <PolicyDetails />
              },
              {
                path: "/:policyId/personal-details",
                element: <PersonalDetails />
              }
            ]
          },
          {
            path: "/confirm-email",
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
