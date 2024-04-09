import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import PolicesLayout from "./components/organisms/PolicesLayout.tsx";
import PolicyLayout from "./components/organisms/PolicyLayout.tsx";
import ProtectedRoutes from "./components/organisms/ProtectedRoutes.tsx";
import ProvidersWrappers from "./components/organisms/ProvidersWrappers.tsx";
import Redirect from "./components/organisms/Redirect.tsx";
import RootLayout from "./components/organisms/RootLayout.tsx";
import ActivePolicies from "./components/views/ActivePolicies.tsx";
import AllPolicies from "./components/views/AllPolicies.tsx";
import BeneficiaryEdit from "./components/views/BeneficiaryEdit.tsx";
import Callback from "./components/views/Callback.tsx";
import ErrorRoute from "./components/views/ErrorRoute.tsx";
import Login from "./components/views/Login.tsx";
import PaymentMethod from "./components/views/PaymentMethod.tsx";
import PersonalDetails from "./components/views/PersonalDetails.tsx";
import PolicyDetails from "./components/views/PolicyDetails.tsx";
import PolicyHolderEdit from "./components/views/PolicyHolderEdit.tsx";

const WRAPPER_PATH = "";

const router = createBrowserRouter([
  {
    path: WRAPPER_PATH,
    errorElement: <ErrorRoute />,
    element: <ProvidersWrappers />, // defined to wrap with de Auth0 provider the app
    // to keep it inside the router provider
    children: [
      {
        path: WRAPPER_PATH,
        element: (
          <ProtectedRoutes>
            <RootLayout />
          </ProtectedRoutes>
        ),
        children: [
          // protected routes
          {
            path: "policies",
            errorElement: <ErrorRoute />,
            element: (location.pathname === "/policies" ||
              location.pathname === "/policies/") && (
              // cuando caigo en /policies o /policies/
              // necesito redirigir to policies/all
              // es correcto hacerlo con un navigate aca??
              <>
                <Outlet />
                <Navigate to="/policies/all" replace={true} />
              </>
            ),
            children: [
              {
                element: <PolicesLayout />,
                children: [
                  {
                    path: "active",
                    element: <ActivePolicies />,
                  },
                  {
                    path: "all",
                    element: <AllPolicies />,
                  },
                ],
              },
              {
                path: ":policyId",
                element: <Redirect />, // igual que en /policies si caigo en
                // policies/:id debo redirigir a /policies/:id/policy-details
                // pero aqui lo hago en un componente para poder obtener
                // mediante params el id en el que me encuentro
                // es correcto?
                children: [
                  {
                    element: <PolicyLayout />,
                    children: [
                      {
                        path: "policy-details",
                        element: <PolicyDetails />,
                      },
                      {
                        path: "personal-details",
                        element: <PersonalDetails />,
                      },
                    ],
                  },
                  {
                    path: "payment-method",
                    element: <PaymentMethod />,
                  },
                  {
                    path: "edit/policy-holder",
                    element: <PolicyHolderEdit />,
                  },
                  {
                    path: "edit/beneficiaries",
                    element: <BeneficiaryEdit />,
                  },
                ],
              },
            ],
          },
          {
            path: "callback",
            element: <Callback />,
          },
          {
            path: "/",
            element: <Navigate to="/policies/all" replace={true} />,
          },
        ],
      },
      { path: "login", element: <Login /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
