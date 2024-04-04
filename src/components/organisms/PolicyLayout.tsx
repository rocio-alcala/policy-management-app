import { useState } from "react";
import {
  NavLink,
  Outlet,
  useNavigate,
  useParams
} from "react-router-dom";
import ConfirmModal from "./ConfirmModal";
import SuccessfulModal from "./SuccessfulModal";
import ImageButton from "./ImageButton";
import { mockPromise } from "../../utils/utils";
import BaseModal from "./BaseModal";
import ConfirmEmail from "./ConfirmEmail";
import { useGetPoliciesByIdQuery } from "../../store/api/policiesApi";
import Spinner from "../bits/Spinner";

export default function PolicyLayout() {
  const { policyId } = useParams();
  const navigate = useNavigate();
  const {
    data: policy,
    isLoading,
    error
  } = useGetPoliciesByIdQuery(policyId as string); //TO-DO??DUDA! CASTEO
  const [isConfirmCancelModalOpen, setConfirmCancelModalOpen] = useState(false);
  const [isConfirmEmailModalOpen, setConfirmEmailModalOpen] = useState(false);
  const [isSuccessfulCancelModalOpen, setSuccessfulCancelModalOpen] =
    useState(false);
  if (isLoading) {
    return <Spinner />;
  }
  if (typeof policy === "undefined") {
    //TO-DO?? MANEJO DE UNDFINED
    console.error("@Error fetching policies ", error);
    return;
  }

  return (
    <div className="bg-background p-5 flex flex-col flex-1">
      <div
        className="flex mb-7 justify-start items-center hover:cursor-pointer"
        onClick={() => navigate("/policies/all")}
      >
        <img
          src="/ArrowBack.png"
          className="h-4 w-4 mr-3"
        ></img>
        <div className="text-axa-blue leading-5">BACK</div>
      </div>
      <div className="rounded-md p-3 bg-white text-axa-blue">
        <div className="leading-6">{policy.policy_number}</div>
        <div className="font-bold text-2xl font-publico-headline ">
          {policy.product.name}
        </div>
        <div className="flex justify-around my-4">
          <ImageButton
            onClick={() => setConfirmEmailModalOpen(true)}
            srcImage="/MailIcon.png"
            text="POLICY/ CERTIFICATE"
          />
          <ImageButton
            srcImage="/PlusIcon.png"
            text="ADD TO WALLET"
          />
          <ImageButton
            onClick={() => setConfirmCancelModalOpen(true)}
            srcImage="/TrashIcon.png"
            text="CANCEL POLICY"
          />
          <ImageButton
            onClick={() => navigate(`/policies/${policyId}/payment-method`)}
            srcImage="/PaymentMethod.png"
            text="PAYMENT METHOD"
          />
        </div>
      </div>
      <div className="flex mt-5 bg-slate-200">
        <NavLink
          to={`/policies/${policyId}/personal-details`}
          className={({ isActive }) =>
            isActive
              ? "border-b-[3.5px] border-tertiary-default p-4 flex-auto  rounded-t-md leading-4 bg-white text-center text-base font-semibold text-tertiary-default"
              : "p-4 flex-auto rounded-t-md bg-white shadow-inner-lg font-semibold text-base leading-4  text-placeholder text-center shadow-inner-l-r-b"
          }
        >
          PERSONAL DETAILS
        </NavLink>
        <NavLink
          to={`/policies/${policyId}/policy-details`}
          className={({ isActive }) =>
            isActive
              ? "border-b-[3.5px] border-tertiary-default p-4 flex-auto  rounded-t-md leading-4 bg-white text-center text-base font-semibold text-tertiary-default"
              : "p-4 flex-auto rounded-t-md bg-white shadow-inner-lg font-semibold text-base leading-4  text-placeholder text-center shadow-inner-l-r-b"
          }
        >
          POLICY DETAILS
        </NavLink>
      </div>
      <Outlet />

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
        onConfirm={mockPromise}
        message="Are you sure you want to cancel your policy? You will not be ensured."
      ></ConfirmModal>
      <SuccessfulModal
        isOpen={isSuccessfulCancelModalOpen}
        message="Your policy has been successfully canceled"
        onClose={() => setSuccessfulCancelModalOpen(false)}
      />
    </div>
  );
}
