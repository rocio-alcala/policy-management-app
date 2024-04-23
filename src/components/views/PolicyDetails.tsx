import { useParams } from "react-router-dom";

import { useGetPoliciesByIdQuery } from "../../store/api/policiesApi";
import { capitalizeString } from "../../utils/utils";
import Button from "../bits/Button";
import Spinner from "../bits/Spinner";
import DocumentCard from "../organisms/DocumentCard";
import ErrorPage from "../organisms/ErrorPage";

export default function PolicyDetails() {
  const { policyId } = useParams();
  const {
    data: policy,
    isLoading,
    error,
  } = useGetPoliciesByIdQuery(policyId || "");

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
  const contractDetails: Record<string, string> = {};

  policy.quoting_criteria.forEach((criteria) => {
    contractDetails[criteria.name] = criteria.value;
  });

  return (
    <div className="bg-background">
      {/*  contract id */}
      <div className="flex flex-col rounded-b-md bg-white">
        <div className="flex mr-5 mt-5 items-center self-end">
          <img src="/Edit.png" className="h-4 w-4 mr-2"></img>
          <div className="text-axa-blue leading-5">EDIT</div>
        </div>
        <div className="flex justify-between content-center items-center border-grey6">
          <h1 className=" p-5 leading-8 font-bold text-xl text-grey8-dark-text">
            Contract ID
          </h1>
        </div>
        <li className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Policy number</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policy.policy_number}
          </p>
        </li>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Status</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {capitalizeString(policy.status.value)}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Purchase day</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policy.purchase_date}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Policy start date</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policy.effective_period.start_date}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Policy end date</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policy.effective_period.end_date}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Is auto-renewable</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policy.payment.is_renewable ? "Yes" : "No"}
          </p>
        </div>
      </div>
      {/*  Contract details */} {/* policy.quoting_criteria */}
      <div className="flex flex-col rounded-b-md bg-white">
        <div className="flex justify-between content-center items-center border-border-default border-t-[1px]">
          <h1 className=" p-5 leading-8 font-bold text-xl text-grey8-dark-text">
            Contract details
          </h1>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Party composition</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {capitalizeString(contractDetails["Party composition"])}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Number of travelers</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {capitalizeString(
              contractDetails["Number of Travelers as in PROD"],
            )}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Number of adults</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {capitalizeString(contractDetails["Number of adults as in PROD"])}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Number of children</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {capitalizeString(contractDetails["Number of children as in PROD"])}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Age of oldest traveler</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {capitalizeString(contractDetails["Oldest Travellers Age"])}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Trip cost</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {capitalizeString(contractDetails["Trip Cost"])}
          </p>
        </div>
        <div className="flex justify-between border-y-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Destination area</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {capitalizeString(contractDetails["Destination area"])}
          </p>
        </div>
        <div className="p-5">
          <Button primary>UPGRADE MY POLICY</Button>{" "}
        </div>
      </div>
      {/* Documents */}
      {/*  policy.attachments */}
      <div className="flex flex-col mt-5 rounded-md bg-white">
        <h1 className="font-publico-headline py-3 px-5 text-2xl font-bold leading-7 text-grey8-dark-text">
          Documents
        </h1>
        {policy.attachments.map((document, index) => (
          <DocumentCard key={index + document.id} document={document} />
        ))}
        <div className="p-5">
          <Button primary>DOWNLOAD ALL</Button>
        </div>
      </div>
    </div>
  );
}
