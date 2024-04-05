import { useNavigate, useParams } from "react-router-dom";
import BeneficiaryCard from "../organisms/BeneficiaryCard";
import { useGetPoliciesByIdQuery } from "../../store/api/policiesApi";
import Spinner from "../bits/Spinner";
import { capitalizeString } from "../../utils/utils";

export default function PersonalDetails() {
  const { policyId } = useParams();
  const navigate = useNavigate();
  const {
    data: policy,
    isLoading,
    error,
  } = useGetPoliciesByIdQuery(policyId as string); // TO-DO??DUDA! CASTEO

  if (isLoading) {
    return <Spinner />;
  }

  if (typeof policy === "undefined") {
    // TO-DO?? MANEJO DE UNDFINED
    console.error("@Error fetching policies ", error);
    return;
  }

  return (
    <div className="bg-background">
      {/*  policy holder */}
      <div className="flex flex-col rounded-b-md bg-white">
        <div className="flex justify-between content-center items-center border-grey6">
          <h1 className=" p-5 leading-8 font-bold text-xl text-grey8-dark-text">
            Policy holder
          </h1>
          <div
            className="flex mr-5 items-center hover:cursor-pointer"
            onClick={() => navigate(`/policies/${policyId}/edit/policy-holder`)}
          >
            <img src="/Edit.png" className="h-4 w-4 mr-2"></img>
            <div className="text-axa-blue leading-5">EDIT</div>
          </div>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Title</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {capitalizeString(policy.policy_holder.title)}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">First name</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {capitalizeString(policy.policy_holder.first_name)}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Last name</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {capitalizeString(policy.policy_holder.last_name)}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">ID number</p>
          <p className="text-start leading-6 text-grey8-dark-text">sin info</p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Is a beneficiary</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policy.policy_holder.is_policy_beneficiary ? "Yes" : "No"}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Birth date</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policy.policy_holder.birth_date}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Spoken language</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {capitalizeString(policy.policy_holder.spoken_language)}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">email</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {capitalizeString(policy.policy_holder.email)}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Address</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policy.policy_holder.address.country}+ FALTA INFO
          </p>
        </div>
      </div>
      {/*  beneficiaries */}
      <div className="flex flex-col mt-5 rounded-md bg-white">
        <div className="flex justify-between content-center items-center border-grey6">
          <h1 className="p-5 leading-8 font-bold text-xl text-grey8-dark-text">
            Beneficiaries
          </h1>
          <div
            className="flex mr-5 items-center hover:cursor-pointer"
            onClick={() => navigate(`/policies/${policyId}/edit/beneficiaries`)}
          >
            <img src="/Edit.png" className="h-4 w-4 mr-2"></img>
            <div className="text-axa-blue leading-5">EDIT</div>
          </div>
        </div>
        {policy.beneficiaries.map((beneficiary) => (
          <BeneficiaryCard beneficiary={beneficiary} key={beneficiary.id} />
        ))}
      </div>
    </div>
  );
}
