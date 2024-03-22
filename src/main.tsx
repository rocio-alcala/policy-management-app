import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/views/Root.tsx";
import Policies from "./components/views/AllPolicies.tsx";
import AllPolicies from "./components/views/AllPolicies.tsx";
import ActivePolicies from "./components/views/ActivePolicies.tsx";
import Home from "./components/views/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
