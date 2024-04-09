import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { SummaryPolicy } from "../../types";
import { capitalizeString, mockPromise } from "../../utils/utils";

import BaseModal from "./BaseModal";
import ConfirmEmail from "./ConfirmEmail";
import ConfirmModal from "./ConfirmModal";
import ImageButton from "./ImageButton";
import SuccessfulModal from "./SuccessfulModal";

interface PolicyCardProps {
  policy: SummaryPolicy;
}

export default function PolicyCard({ policy }: PolicyCardProps) {
  const navigate = useNavigate();
  const [isConfirmCancelModalOpen, setConfirmCancelModalOpen] = useState(false);
  const [isConfirmEmailModalOpen, setConfirmEmailModalOpen] = useState(false);
  const [isSuccessfulCancelModalOpen, setSuccessfulCancelModalOpen] =
    useState(false);

  function confirmModalCallback() {
    setConfirmCancelModalOpen(false);
    setSuccessfulCancelModalOpen(true);
  }

  return (
    <>
      <div className="flex flex-col shadow-card m-3 rounded-lg">
        <div className="flex flex-col p-4">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-xl leading-7 text-text-primary">
              {policy.product_name}
            </h1>
            {policy.status === "ACTIVE" ? (
              <div className="text-success leading-5 text-sm">Active</div>
            ) : policy.status === "CANCELLED" ? (
              <div className="text-axa-sienna leading-5 text-sm">Cancelled</div>
            ) : (
              <div className="text-grey5-text-secundary leading-5 text-sm">
                Expired
              </div>
            )}
          </div>
          <div className="flex flex-col py-4">
            <div className="flex py-1 items-start">
              <img src="/inventory.png" className="mr-2 mt-1 h-4 w-4"></img>
              <p className="text-base leading-6 text-text-primary">
                Policy number: {policy.policy_number}
              </p>
            </div>
            <div className="flex py-1">
              <img src="/calendar.png" className="mr-2 mt-1 h-4 w-4"></img>
              <p className="text-base leading-6 text-text-primary">
                Purchase date: {capitalizeString(policy.purchase_date)}
              </p>
            </div>
            <div className="flex py-1">
              <img src="/Clock.png" className="mr-2 mt-1 h-4 w-4"></img>
              <p className="text-base leading-6 text-text-primary">
                Policy type: {capitalizeString(policy.policy_type)}
              </p>
            </div>
            <div className="flex py-1">
              <img src="/User.png" className="mr-2 mt-1 h-4 w-4"></img>
              <p className="text-base leading-6 text-text-primary">
                Policy holder:{" "}
                {capitalizeString(policy.policy_holder.first_name)}{" "}
                {capitalizeString(policy.policy_holder.last_name)}
              </p>
            </div>
          </div>
        </div>
        <div className="flex bg-background p-4 justify-around">
          <ImageButton
            onClick={() => setConfirmEmailModalOpen(true)}
            srcImage="/MailIcon.png"
            text="POLICY/ CERTIFICATE"
          />
          <ImageButton srcImage="/PlusIcon.png" text="ADD TO WALLET" />
          <ImageButton
            onClick={() => setConfirmCancelModalOpen(true)}
            srcImage="/TrashIcon.png"
            text="CANCEL POLICY"
          />
          <ImageButton
            onClick={() =>
              navigate(`/policies/${policy.policy_id}/personal-details`)
            }
            srcImage="/NextIcon.png"
            text="VIEW MY POLICY"
          />
        </div>
      </div>

      {/* MODALS */}
      <BaseModal
        isOpen={isConfirmEmailModalOpen}
        onClose={() => setConfirmEmailModalOpen(false)}
      >
        <ConfirmEmail email={policy.policy_holder.email} />
      </BaseModal>
      <ConfirmModal
        isOpen={isConfirmCancelModalOpen}
        onClose={() => setConfirmCancelModalOpen(false)}
        onConfirm={() => mockPromise(confirmModalCallback)}
        message="Are you sure you want to cancel your policy? You will not be ensured."
      />
      <SuccessfulModal
        isOpen={isSuccessfulCancelModalOpen}
        message="Your policy has been successfully canceled"
        onClose={() => setSuccessfulCancelModalOpen(false)}
      />
    </>
  );
}
