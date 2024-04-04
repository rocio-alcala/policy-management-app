import { Navigate, Outlet, useParams } from "react-router-dom";

export default function Redirect() {
  const { policyId } = useParams();
  return (
    <>
      <Outlet />
      {(location.pathname === `/policies/${policyId}` ||
        location.pathname === `/policies/${policyId}/`) && (
        <Navigate to={`/policies/${policyId}/personal-details`} replace={true} />
      )}
    </>
  );
}
