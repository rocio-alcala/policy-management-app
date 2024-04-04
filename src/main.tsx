import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import AllPolicies from "./components/views/AllPolicies.tsx";
import ActivePolicies from "./components/views/ActivePolicies.tsx";
import Callback from "./components/views/Callback.tsx";
import ProvidersWrappers from "./components/organisms/ProvidersWrappers.tsx";
import ConfirmEmail from "./components/organisms/ConfirmEmail.tsx";
import PolicyDetails from "./components/views/PolicyDetails.tsx";
import PersonalDetails from "./components/views/PersonalDetails.tsx";
import PaymentMethod from "./components/views/PaymentMethod.tsx";
import Login from "./components/views/Login.tsx";
import RootLayout from "./components/organisms/RootLayout.tsx";
import PolicesLayout from "./components/organisms/PolicesLayout.tsx";
import ProtectedRoutes from "./components/organisms/ProtectedRoutes.tsx";
import BeneficiaryEdit from "./components/views/BeneficiaryEdit.tsx";
import PolicyHolderEdit from "./components/views/PolicyHolderEdit.tsx";
import PolicyLayout from "./components/organisms/PolicyLayout.tsx";
import Redirect from "./components/organisms/Redirect.tsx";

const WRAPPER_PATH = "";

const router = createBrowserRouter([
  {
    path: WRAPPER_PATH,
    element: <ProvidersWrappers />, //defined to wrap with de Auth0 provider the app
    //to keep it inside the router provider
    children: [
      {
        path: WRAPPER_PATH,
        element: (
          <ProtectedRoutes>
            <RootLayout />
          </ProtectedRoutes>
        ),
        children: [
          //protected routes
          {
            path: "policies",
            element: (location.pathname === "/policies" ||
              location.pathname === "/policies/") && (
              <>
                <Outlet/>
                <Navigate to="/policies/all" replace={true} />{" "}
              </>   //redirect to policies/all  TO-DO?? esta bien??
            ),
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
                element: <Redirect/>,
                children: [
                  {
                    element: <PolicyLayout />,
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
                  },
                  {
                    path: "payment-method",
                    element: <PaymentMethod />
                  },
                  {
                    path: "edit/policy-holder",
                    element: <PolicyHolderEdit />
                  },
                  {
                    path: "edit/beneficiaries",
                    element: <BeneficiaryEdit />
                  },
                  {
                    path: "confirm-email", //to-d: que sea un modal on top of the policies view
                    element: <ConfirmEmail />
                  }
                ]
              }
            ]
          },
          {
            path: "callback",
            element: <Callback />
          },
          { path: "/", element: <Navigate to="/policies/all" replace={true} /> }
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
