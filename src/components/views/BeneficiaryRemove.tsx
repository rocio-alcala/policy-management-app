import { useNavigate, useParams } from "react-router-dom";

import Button from "../bits/Button";
import InputFile from "../bits/InputFile";

export default function BeneficiaryRemove() {
  const navigate = useNavigate();
  const { policyId, beneficiaryId } = useParams();

  return (
    <div className="bg-background p-5 flex flex-col h-full">
      <div
        className="flex mb-7 justify-start items-center hover:cursor-pointer"
        onClick={() => navigate(`/policies/${policyId}/edit/beneficiaries`)}
      >
        <img src="/ArrowBack.png" className="h-4 w-4 mr-3"></img>
        <div className="text-axa-blue leading-5">BACK</div>
      </div>
      <div className="bg-white flex flex-col rounded-md p-5 mb-4">
        <p className="py-1 leading-6 text-grey8-dark-text">
          To remove a beneficary you need to provide documents that justify your
          cancellation request.
        </p>
        <div className="flex justify-between content-center items-center border-b-[1px] border-border-default">
          <h1 className="py-3 leading-8 font-bold text-xl text-grey8-dark-text ">
            Beneficiary name {beneficiaryId}
          </h1>
        </div>
        <InputFile
          label="Proof of cancelation (Visa refusal. id)"
          id="documents"
          accept=".doc,.pdf"
          description="Max file size XXKgb. Only XXX files formats supported."
        >
          UPLOAD DOCUMENTS
        </InputFile>

        <Button type="submit" primary className="my-1 mt-5">
          REMOVE
        </Button>
      </div>
    </div>
  );
}
