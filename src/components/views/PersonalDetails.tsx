import BeneficiarieCard from "../organisms/BeneficiarieCard";

const policyHolder = {
  title: "Mrs",
  firstName: "John",
  lastName: "Doe",
  idNumber: 19494364,
  isBeneficiary: true,
  birthDate: "15/11/2000",
  language: "SPA",
  address: "141 Silverlake St.",
  email: "john@mail.com"
};

const beneficiaries = [
  {
    title: "Mrs",
    firstName: "John",
    lastName: "Doe",
    idNumber: 19494364,
    isBeneficiary: true,
    birthDate: "15/11/2000",
    language: "SPA",
    address: "141 Silverlake St.",
    email: "john@mail.com",
    status: "pending"
  },
  {
    title: "Mrs",
    firstName: "John",
    lastName: "Doe",
    idNumber: 4457364,
    isBeneficiary: true,
    birthDate: "15/11/2000",
    language: "SPA",
    address: "141 Silverlake St.",
    email: "john@mail.com",
    status: "active"
  },
  {
    title: "Mrs",
    firstName: "John",
    lastName: "Doe",
    idNumber: 1947474,
    isBeneficiary: true,
    birthDate: "15/11/2000",
    language: "SPA",
    address: "141 Silverlake St.",
    email: "john@mail.com",
    status: "remove"
  }
];

export default function PersonalDetails() {
  return (
    <div className="bg-background">
      {/*  policy holder */}
      <div className="flex flex-col rounded-b-md bg-white">
        <div className="flex justify-between content-center items-center border-grey6">
          <h1 className=" p-5 leading-8 font-bold text-xl text-grey8-dark-text">
            Policy holder
          </h1>
          <div className="flex mr-5 items-center">
            <img
              src=".././../../public/Edit.png"
              className="h-4 w-4 mr-2"
            ></img>
            <div className="text-axa-blue leading-5">EDIT</div>
          </div>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Title</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policyHolder.title}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">First name</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policyHolder.firstName}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Last name</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policyHolder.lastName}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">ID number</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policyHolder.idNumber}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Is a beneficiary</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policyHolder.isBeneficiary ? "Yes" : "No"}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Birth date</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policyHolder.birthDate}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Spoken language</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policyHolder.language}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">email</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policyHolder.email}
          </p>
        </div>
        <div className="flex justify-between border-t-[1px] px-5 py-3 border-border-default">
          <p className=" leading-6  text-grey6">Address</p>
          <p className="text-start leading-6 text-grey8-dark-text">
            {policyHolder.address}
          </p>
        </div>
      </div>
      {/*  beneficiaries */}
      <div className="flex flex-col mt-5 rounded-md bg-white">
        <div className="flex justify-between content-center items-center border-grey6">
          <h1 className="p-5 leading-8 font-bold text-xl text-grey8-dark-text">
            Beneficiaries
          </h1>
          <div className="flex mr-5 items-center">
            <img
              src=".././../../public/Edit.png"
              className="h-4 w-4 mr-2"
            ></img>
            <div className="text-axa-blue leading-5">EDIT</div>
          </div>
        </div>
        {beneficiaries.map((beneficiarie) => (
          <BeneficiarieCard
            beneficiarie={beneficiarie}
            key={beneficiarie.idNumber}
          />
        ))}
      </div>
    </div>
  );
}
