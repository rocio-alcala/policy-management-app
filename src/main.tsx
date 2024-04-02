import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import AllPolicies from "./components/views/AllPolicies.tsx";
import ActivePolicies from "./components/views/ActivePolicies.tsx";
import Callback from "./components/views/Callback.tsx";
import ProvidersWrappers from "./components/organisms/ProvidersWrappers.tsx";
import ProtectedRoot from "./components/organisms/ProtectedRoot.tsx";
import ConfirmEmail from "./components/views/ConfirmEmail.tsx";
import Policy from "./components/views/Policy.tsx";
import PolicyDetails from "./components/views/PolicyDetails.tsx";
import PersonalDetails from "./components/views/PersonalDetails.tsx";
import PaymentMethod from "./components/views/PaymentMethod.tsx";
import PolicyHolder from "./components/views/PolicyHolder.tsx";
import Login from "./components/views/Login.tsx";
import RootLayout from "./components/organisms/RootLayout.tsx";
import PolicesLayout from "./components/organisms/PolicesLayout.tsx";

const router = createBrowserRouter([
  {
    path: "",
    element: <ProvidersWrappers />, //defined to wrap with de Auth0 provider the app
    //keeping this last one inside the router provider
    children: [
      {
        path: "",
        element: (
          <ProtectedRoot>
            <RootLayout />
          </ProtectedRoot>
        ),
        children: [
          //protected routes
          {
            path: "policies",
            children: [
              {
                element: <PolicesLayout />,
                children: [
                  {
                    path: "active",
                    element: <ActivePolicies />
                  },
                  {
                    path: "all",
                    element: <AllPolicies />
                  }
                ]
              },
              {
                path: ":policyId",
                element: <Policy />,
                children: [
                  {
                    path: "policy-details",
                    element: <PolicyDetails />
                  },
                  {
                    path: "personal-details",
                    element: <PersonalDetails />
                  }

                ]
              }
            ]
          },
          {
            path: "payment-method",
            element: <PaymentMethod />
          },
          {
            path: "policy-holder",
            element: <PolicyHolder />
          },
          {
            path: "confirm-email",
            element: <ConfirmEmail />
          },
          {
            path: "callback",
            element: <Callback />
          }
        ]
      },
      { path: "login", element: <Login /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
