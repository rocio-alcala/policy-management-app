import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { useGetPoliciesByIdQuery } from "../../store/api/policiesApi";
import Button from "../bits/Button";
import Spinner from "../bits/Spinner";
import BeneficiaryEditCard from "../organisms/BeneficiaryEditCard";

export default function BeneficiaryEdit() {
  const navigate = useNavigate();
  const { policyId } = useParams();
  const {
    data: policy,
    isLoading,
    error,
  } = useGetPoliciesByIdQuery(policyId as string); // DUDA! CASTEO

  const { register, handleSubmit, control } = useForm<Record<string, string>>();

  if (isLoading) {
    return <Spinner />;
  }
  if (typeof policy === "undefined") {
    // TO-DO?? MANEJO DE UNDFINED
    console.error("@Error fetching policies ", error);
    return;
  }

  function onSubmit(data: Record<string, string>) {
    console.log(data);
  }

  return (
    <div className="bg-background p-5 flex flex-col flex-1">
      <div
        className="flex mb-7 justify-start items-center hover:cursor-pointer"
        onClick={() => navigate(`/policies/${policyId}/personal-details`)}
      >
        <img src="/ArrowBack.png" className="h-4 w-4 mr-3"></img>
        <div className="text-axa-blue leading-5">BACK</div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {policy?.beneficiaries.map((beneficiary, index) => (
          <BeneficiaryEditCard
            key={beneficiary.id}
            beneficiaryNumber={index}
            register={register}
            control={control}
          />
        ))}
        <div className="text-center text-axa-blue tracking-widest text-sm font-semibold leading-4 p-5 hover:cursor-pointer">
          + ADD NEW BENEFICIARY
        </div>
        <Button type="submit" primary className="my-1 mt-5">
          SAVE CHANGES
        </Button>
        <Button className="my-1">DISCARD CHANGES</Button>
      </form>
    </div>
  );
}
