import { useGetPoliciesQuery } from "../../store/api/policiesApi";
import Spinner from "../bits/Spinner";
import ErrorPage from "../organisms/ErrorPage";
import PolicyCard from "../organisms/PolicyCard";

export default function AllPolicies() {
  const { data: policies, isLoading, error } = useGetPoliciesQuery();

  if (isLoading) {
    return <Spinner />;
  }
  if (typeof policies === "undefined") {
    if (error) {
      // check for error type
      if ("status" in error) {
        // you can access all properties of `FetchBaseQueryError` here
        const errMsg =
          "error" in error ? error.error : JSON.stringify(error.data);

        return <ErrorPage errorMsg={errMsg} status={error.status} />;
      } else {
        // you can access all properties of `SerializedError` here
        return (
          <ErrorPage
            errorMsg={error.message || "Error fetching policy"}
            status={error.code}
          />
        );
      }
    } else {
      // if policy is undefined, error should be always be populated
      return <ErrorPage errorMsg="Error fetching policy" />;
    }
  }
  return (
    <div>
      {policies.map((policy) => (
        <PolicyCard key={policy.policy_number} policy={policy} />
      ))}
    </div>
  );
}
