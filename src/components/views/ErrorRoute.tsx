import { isRouteErrorResponse, useRouteError } from "react-router-dom";

import ErrorPage from "../organisms/ErrorPage";

export default function ErrorRoute() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return <ErrorPage errorMsg={error.statusText} status={error.status} />;
  }
  return <ErrorPage errorMsg={"Error fetching policy"} />;
}
