import { useParams } from "react-router-dom";
import Button from "../bits/Button";
import DocumentCard from "../organisms/DocumentCard";

const policy = {
  policy_number: "AHCBB45636",
  status: "active",
  purchaseDay: "05/11/2023",
  startDate: "26/12/2023",
  endDate: "30/3/2024",
  isAutoRenewable: true,
  cost: 750,
  destination: "Europe"
};

const documents = [
  {
    title: "Nombre_del_archivo.pdf",
    createOn: "28/03/24",
    nature: "Policy certificate",
    sentVia: "Confirmation email"
  },
  {
    title: "Nombre_del_archivo.pdf",
    createOn: "28/03/24",
    nature: "Term and conditions",
    sentVia: "Confirmation email"
  }
];

export default function PolicyDetails() {
  const { policyId } = useParams()
  return (
    <div className="bg-background">
      {/*  contract id */}
      <div className="flex flex-col rounded-b-md bg-white">
        <div className="flex mr-5 mt-5 items-center self-end">
          <img src=".././../../public/Edit.png" className="h-4 w-4 mr-2"></img>
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
            {policy.status}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Purchase day</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policy.purchaseDay}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Policy start date</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policy.startDate}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Policy end date</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policy.endDate}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Is auto-renewable</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policy.isAutoRenewable ? "Yes" : "No"}
          </p>
        </div>
      </div>
      {/*  Contract details */}
      <div className="flex flex-col rounded-b-md bg-white">
        <div className="flex justify-between content-center items-center border-border-default border-t-[1px]">
          <h1 className=" p-5 leading-8 font-bold text-xl text-grey8-dark-text">
            Contract details
          </h1>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Party composition</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policy.policy_number}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Number of travelers</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policy.status}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Number of adults</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policy.purchaseDay}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Number of children</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policy.startDate}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Age of oldest traveler</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policy.endDate}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Trip cost</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policy.cost}
          </p>
        </div>
        <div className="flex justify-between border-y-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Destination area</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policy.destination}
          </p>
        </div>
        <div className="p-5">
          <Button primary>UPGRADE MY POLICY</Button>{" "}
        </div>
      </div>
      {/* Documents */}
      <div className="flex flex-col mt-5 rounded-md bg-white">
        <h1 className="font-publico-headline py-3 px-5 text-2xl font-bold leading-7 text-grey8-dark-text">
          Documents
        </h1>
        {documents.map((document, index) => (
          <DocumentCard key={index + document.title} document={document} />
        ))}
        <div className="p-5">
          <Button primary>DOWNLOAD ALL</Button>
        </div>
      </div>
    </div>
  );
}
