import { useState } from "react";
import { NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
import ConfirmModal from "../organisms/ConfirmModal";
import SuccessfulModal from "../organisms/SuccessfulModal";

const policy = {
  product: "Travel insurance",
  policy_number: "AXA49262",
  start_date: "30/11/2023",
  end_date: "11/12/2023",
  policy_type: "Single trip",
  beneficiary: [{ name: "John", last_name: "Doe" }],
  status: "cancelled"
};

export default function Policy() {
  const { policyId } = useParams();
  const navigate = useNavigate();
  const [isConfirmCancelModalOpen, setConfirmCancelModalOpen] = useState(false);
  const [isSuccessfulCancelModalOpen, setSuccessfulCancelModalOpen] =
    useState(false);
  return (
    <div className="bg-background p-5 flex flex-col flex-1">
      <div
        className="flex mb-7 justify-start items-center hover:cursor-pointer"
        onClick={() => navigate("/home/allpolicies")}
      >
        <img
          src=".././../../public/ArrowBack.png"
          className="h-4 w-4 mr-3"
        ></img>
        <div className="text-axa-blue leading-5">BACK</div>
      </div>
      <div className="rounded-md p-3 bg-white text-axa-blue">
        <div className="leading-6">{policy.policy_number}</div>
        <div className="font-bold text-2xl font-publico-headline ">
          {policy.product}
        </div>
        <div className="flex justify-around my-4">
          <div className="flex flex-col items-center hover:cursor-pointer">
            <img
              src="../../../public/MailIcon.png"
              className="h-8 w-8 mb-3"
            ></img>
            <p className="text-axa-blue text-xs leading-[14px] font-bold text-center">
              POLICY/ CERTIFICATE
            </p>
          </div>
          <div className="flex flex-col items-center hover:cursor-pointer">
            <img
              src="../../../public/PlusIcon.png"
              className="h-8 w-8 mb-3"
            ></img>
            <p className="text-axa-blue text-xs leading-[14px] font-bold text-center">
              ADD TO WALLET
            </p>
          </div>
          <div
            className="flex flex-col items-center hover:cursor-pointer"
            onClick={() => setConfirmCancelModalOpen(true)}
          >
            <img
              src="../../../public/TrashIcon.png"
              className="h-8 w-8 mb-3"
            ></img>
            <p className="text-axa-blue text-xs leading-[14px] font-bold text-center">
              CANCEL POLICY
            </p>
          </div>
          <div className="flex flex-col items-center hover:cursor-pointer">
            <img
              src="../../../public/PaymentMethod.png"
              className="h-8 w-8 mb-3"
            ></img>
            <p className="text-axa-blue text-xs leading-[14px] font-bold text-center">
              PAYMENT METHOD
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-5 bg-slate-200">
        <NavLink
          to={`/${policyId}/personal-details`}
          className={({ isActive }) =>
            isActive
              ? "border-b-[3.5px] border-tertiary-default p-4 flex-auto  rounded-t-md leading-4 bg-white text-center text-base font-semibold text-tertiary-default"
              : "p-4 flex-auto rounded-t-md bg-white shadow-inner-lg font-semibold text-base leading-4  text-placeholder text-center shadow-inner-l-r-b"
          }
        >
          PERSONAL DETAILS
        </NavLink>
        <NavLink
          to={`/${policyId}/policy-details`}
          className={({ isActive }) =>
            isActive
              ? "border-b-[3.5px] border-tertiary-default p-4 flex-auto  rounded-t-md leading-4 bg-white text-center text-base font-semibold text-tertiary-default"
              : "p-4 flex-auto rounded-t-md bg-white shadow-inner-lg font-semibold text-base leading-4  text-placeholder text-center shadow-inner-l-r-b"
          }
        >
          POLICY DETAILS
        </NavLink>
      </div>
      <Outlet></Outlet>
      {/* MODALS */}
      {isConfirmCancelModalOpen && (
        <ConfirmModal
          onClose={() => setConfirmCancelModalOpen(false)}
        ></ConfirmModal>
      )}
      {isSuccessfulCancelModalOpen && (
        <SuccessfulModal
          message="Your policy has been successfully canceled"
          onClose={() => setSuccessfulCancelModalOpen(false)}
        />
      )}
    </div>
  );
}
