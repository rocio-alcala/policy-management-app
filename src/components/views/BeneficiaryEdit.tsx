import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { useGetPoliciesByIdQuery } from "../../store/api/policiesApi";
import Button from "../bits/Button";
import Spinner from "../bits/Spinner";
import BeneficiaryEditCard from "../organisms/BeneficiaryEditCard";
import ErrorPage from "../organisms/ErrorPage";

export default function BeneficiaryEdit() {
  const navigate = useNavigate();
  const { policyId } = useParams();
  const {
    data: policy,
    isLoading,
    error,
  } = useGetPoliciesByIdQuery(policyId || "");

  const { register, handleSubmit, control } = useForm<Record<string, string>>();

  if (isLoading) {
    return <Spinner />;
  }
  if (typeof policy === "undefined") {
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
