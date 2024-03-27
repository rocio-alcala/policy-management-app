import PolicyCard from "../organisms/PolicyCard";

const policies = [
  {
    product: "Travel insurance",
    policy_number: "AXA4926246",
    start_date: "30/02/2024",
    end_date: "11/04/2024",
    policy_type: "Single trip",
    beneficiary: [
      { name: "John", last_name: "Doe" },
      { name: "Kely", last_name: "Doe" },
      { name: "Matt", last_name: "Doe" },
      { name: "Olivia", last_name: "Doe" }
    ],
    status: "active"
  },
  {
    product: "Student insurance",
    policy_number: "AXA4926247",
    start_date: "30/11/2023",
    end_date: "30/11/2024",
    policy_type: "Annual",
    beneficiary: [{ name: "John", last_name: "Doe" }],
    status: "active"
  },
  {
    product: "Travel insurance",
    policy_number: "AXA49262",
    start_date: "30/11/2023",
    end_date: "11/12/2023",
    policy_type: "Single trip",
    beneficiary: [{ name: "John", last_name: "Doe" }],
    status: "active"
  }
];


export default function ActivePolicies() {
  return <div>{policies.map((policy)=> <PolicyCard key={policy.policy_number} policy={policy}/>)}</div>;
  }
  