import { useGetPoliciesQuery } from "../../store/api/policiesApi";
import Spinner from "../bits/Spinner";
import PolicyCard from "../organisms/PolicyCard";

const policies = [
  {
    product_name: "Travel insurance",
    policy_number: "AXA4926246",
    purchase_date: "30/02/2024",
    policy_id: "c307827f-c2f8-413a-b35a-febfe8d3b04a",
    policy_type: "Single trip",
    policy_holder: { first_name: "John", last_name: "Doe" },
    status: "active"
  },
  {
    product_name: "Student insurance",
    policy_number: "AXA4926247",
    purchase_date: "30/02/2024",
    policy_id: "1878d0fd-2a41-4304-9d3b-05469cdd3390",
    policy_type: "Annual",
    policy_holder: { first_name: "Ana", last_name: "Parra" },
    status: "expired"
  },
  {
    product_name: "Travel insurance",
    policy_number: "AXA49262",
    purchase_date: "30/02/2024",
    policy_id: "1878d0fd-2a41-4304-9d3b-05469cdd330",
    policy_type: "Single trip",
    policy_holder: { first_name: "John", last_name: "Doe" },
    status: "cancelled"
  }
];

export default function AllPolicies() {
  const { data, isLoading, error } = useGetPoliciesQuery();
  console.log(data);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    console.error("@Error fetching policies ", error);
  }

  return (
    <div>
      {policies.map((policy) => (
        <PolicyCard key={policy.policy_number} policy={policy}></PolicyCard>
      ))}
    </div>
  );
}
