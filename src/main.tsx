import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import PolicesLayout from "./components/organisms/PolicesLayout.tsx";
import PolicyLayout from "./components/organisms/PolicyLayout.tsx";
import ProtectedRoutes from "./components/organisms/ProtectedRoutes.tsx";
import ProvidersWrappers from "./components/organisms/ProvidersWrappers.tsx";
import RootLayout from "./components/organisms/RootLayout.tsx";
import ActivePolicies from "./components/views/ActivePolicies.tsx";
import AllPolicies from "./components/views/AllPolicies.tsx";
import BeneficiaryEdit from "./components/views/BeneficiaryEdit.tsx";
import BeneficiaryRemove from "./components/views/BeneficiaryRemove.tsx";
import Callback from "./components/views/Callback.tsx";
import ErrorRoute from "./components/views/ErrorRoute.tsx";
import Login from "./components/views/Login.tsx";
import PaymentMethod from "./components/views/PaymentMethod.tsx";
import PersonalDetails from "./components/views/PersonalDetails.tsx";
import PolicyDetails from "./components/views/PolicyDetails.tsx";
import PolicyHolderEdit from "./components/views/PolicyHolderEdit.tsx";
import PolicyEdit from "./components/views/PolicyEdit.tsx";

const WRAPPER_PATH = "";

const router = createBrowserRouter([
  {
    path: WRAPPER_PATH,
    errorElement: <ErrorRoute />,
    element: <ProvidersWrappers />, // defined to wrap the app with de Auth0 provider and Redux provider
    // to keep it inside the router provider
    children: [
      {
        path: WRAPPER_PATH,
        element: (
          <ProtectedRoutes>
            <RootLayout />
          </ProtectedRoutes>
        ),
        errorElement: <ErrorRoute />,
        children: [
          // protected routes
          {
            path: "",
            element: <Navigate to="policies/all" replace={true} />,
          },
          {
            element: <PolicesLayout />,
            children: [
              {
                path: "policies/active",
                element: <ActivePolicies />,
              },
              {
                path: "policies/all",
                element: <AllPolicies />,
              },
            ],
          },
          {
            element: <PolicyLayout />,
            children: [
              {
                path: "policies/:policyId/policy-details",
                element: <PolicyDetails />,
              },
              {
                path: "policies/:policyId/personal-details",
                element: <PersonalDetails />,
              },
            ],
          },
          {
            path: "policies/:policyId/payment-method",
            element: <PaymentMethod />,
          },
          {
            path: "policies/:policyId/edit/policy-holder",
            element: <PolicyHolderEdit />,
          },
          {
            path: "policies/:policyId/edit/beneficiaries",
            element: <BeneficiaryEdit />,
          },
          {
            path: "policies/:policyId/edit/beneficiaries/remove/:beneficiaryId",
            element: <BeneficiaryRemove />,
          },
          {
            path: "policies/:policyId/edit/policy-details",
            element: <PolicyEdit />,
          },
        ],
      },
      {
        path: "callback",
        element: <Callback />,
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
