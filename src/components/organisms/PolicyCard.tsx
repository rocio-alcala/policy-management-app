import { useNavigate } from "react-router-dom";
import ConfirmModal from "./ConfirmModal";
import { useState } from "react";
import SuccessfulModal from "./SuccessfulModal";

interface PolicyCardProps {
  policy: any;
}

export default function PolicyCard({ policy }: PolicyCardProps) {
  const navigate = useNavigate();
  const [isConfirmCancelModalOpen, setConfirmCancelModalOpen] = useState(false);
  const [isSuccessfulCancelModalOpen, setSuccessfulCancelModalOpen] =
    useState(false);

  return (
    <>
      <div className="flex flex-col shadow-card m-3 rounded-lg">
        <div className="flex flex-col p-4">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-xl leading-7 text-text-primary">
              {policy.product}
            </h1>
            {policy.status === "active" ? (
              <div className="text-success leading-5 text-sm">Active</div>
            ) : policy.status === "cancelled" ? (
              <div className="text-axa-sienna leading-5 text-sm">Cancelled</div>
            ) : (
              <div className="text-grey5-text-secundary leading-5 text-sm">
                Expired
              </div>
            )}
          </div>
          <div className="flex flex-col py-4">
            <div className="flex py-1 items-start">
              <img
                src="../../../public/inventory.png"
                className="mr-2 mt-1 h-4 w-4"
              ></img>
              <p className="text-base leading-6 text-text-primary">
                Policy number: {policy.policy_number}
              </p>
            </div>
            <div className="flex py-1">
              <img
                src="../../../public/calendar.png"
                className="mr-2 mt-1 h-4 w-4"
              ></img>
              <p className="text-base leading-6 text-text-primary">
                Effective dates: {policy.start_date} - {policy.end_date}
              </p>
            </div>
            <div className="flex py-1">
              <img
                src="../../../public/Clock.png"
                className="mr-2 mt-1 h-4 w-4"
              ></img>
              <p className="text-base leading-6 text-text-primary">
                Policy type: {policy.policy_type}
              </p>
            </div>
            <div className="flex py-1">
              <img
                src="../../../public/User.png"
                className="mr-2 mt-1 h-4 w-4"
              ></img>
              <p className="text-base leading-6 text-text-primary">
                Beneficiary: {policy.beneficiary[0].name}{" "}
                {policy.beneficiary[0].last_name}
              </p>
            </div>
          </div>
        </div>
        <div className="flex bg-background p-4 justify-around">
          <div
            className="flex flex-col items-center hover:cursor-pointer"
            onClick={() => navigate("/confirm-email")}
          >
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
            className="flex flex-col items-center hover:cursor-pointer "
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
          <div
            className="flex flex-col items-center hover:cursor-pointer"
            onClick={() =>
              navigate(`/policies/${policy.policy_number}/personal-details`)
            }
          >
            <img
              src="../../../public/NextIcon.png"
              className="h-8 w-8 mb-3"
            ></img>
            <p className="text-axa-blue text-xs leading-[14px] font-bold text-center">
              VIEW MY POLICY
            </p>
          </div>
        </div>
      </div>
      {/* MODALS */}

      <ConfirmModal
        isOpen={isConfirmCancelModalOpen}
        onClose={() => setConfirmCancelModalOpen(false)}
      ></ConfirmModal>

      <SuccessfulModal
        isOpen={isSuccessfulCancelModalOpen}
        message="Your policy has been successfully canceled"
        onClose={() => setSuccessfulCancelModalOpen(false)}
      />
    </>
  );
}
