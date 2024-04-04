import { useNavigate } from "react-router-dom";
import ConfirmModal from "./ConfirmModal";
import { useState } from "react";
import SuccessfulModal from "./SuccessfulModal";
import ImageButton from "./ImageButton";
import { mockPromise } from "../../utils/utils";

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
              {policy.product_name}
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
                Purchase date: {policy.purchase_date}
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
                Policy holder: {policy.policy_holder.first_name}{" "}
                {policy.policy_holder.last_name}
              </p>
            </div>
          </div>
        </div>
        <div className="flex bg-background p-4 justify-around">
          <ImageButton
            onClick={() => navigate("/confirm-email")}
            srcImage="../../../public/MailIcon.png"
            text="POLICY/ CERTIFICATE"
          />
          <ImageButton
            srcImage="../../../public/PlusIcon.png"
            text="ADD TO WALLET"
          />
          <ImageButton
            onClick={() => setConfirmCancelModalOpen(true)}
            srcImage="../../../public/TrashIcon.png"
            text="CANCEL POLICY"
          />
          <ImageButton
            onClick={() =>
              navigate(`/policies/${policy.policy_id}/personal-details`)
            }
            srcImage="../../../public/NextIcon.png"
            text="VIEW MY POLICY"
          />
        </div>
      </div>
      {/* MODALS */}

      <ConfirmModal
        isOpen={isConfirmCancelModalOpen}
        onClose={() => setConfirmCancelModalOpen(false)}
        onConfirm={mockPromise}
        message="Are you sure you want to cancel your policy? You will not be ensured."
      ></ConfirmModal>

      <SuccessfulModal
        isOpen={isSuccessfulCancelModalOpen}
        message="Your policy has been successfully canceled"
        onClose={() => setSuccessfulCancelModalOpen(false)}
      />
    </>
  );
}
