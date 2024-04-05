import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../bits/Button";
import { useGetPoliciesByIdQuery } from "../../store/api/policiesApi";
import BeneficiaryEditCard from "../organisms/BeneficiaryEditCard";
import Spinner from "../bits/Spinner";


export default function BeneficiaryEdit() {
  const navigate = useNavigate();
  const { policyId } = useParams();
  const {
    data: policy,
    isLoading,
    error
  } = useGetPoliciesByIdQuery(policyId as string); //DUDA! CASTEO
<<<<<<< HEAD
=======

  const { register, handleSubmit, control } = useForm();

  if (isLoading) {
    return <Spinner />;
  }
  if (typeof policy === "undefined") {
    //TO-DO?? MANEJO DE UNDFINED
    console.error("@Error fetching policies ", error);
    return;
  }
>>>>>>> 032733d1a6f21871cb179245c9dfb7b23215b28f

  const { register, handleSubmit, control } = useForm<Record<string,string>>();

  if (isLoading) {
    return <Spinner />;
  }
  if (typeof policy === "undefined") {
    //TO-DO?? MANEJO DE UNDFINED
    console.error("@Error fetching policies ", error);
    return;
  }

  function onSubmit(data: Record<string,string>) {
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
