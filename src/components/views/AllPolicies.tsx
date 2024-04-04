import { useGetPoliciesQuery } from "../../store/api/policiesApi";
import Spinner from "../bits/Spinner";
import PolicyCard from "../organisms/PolicyCard";


export default function AllPolicies() {
  const { data: policies, isLoading, error } = useGetPoliciesQuery();

  if (isLoading) {
    return <Spinner />;
  }
  if (typeof policies === "undefined") {
    //TO-DO?? MANEJO DE UNDFINED
    console.error("@Error fetching policies ", error);
    return;
  }
  return (
    <div>
      {policies.map((policy) => (
        <PolicyCard key={policy.policy_number} policy={policy}></PolicyCard>
      ))}
    </div>
  );
}
