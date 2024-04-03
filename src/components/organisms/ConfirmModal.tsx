import Button from "../bits/Button";
import BaseModal from "./BaseModal";

interface ConfirmModalProps {
  onClose: () => void;
  isOpen: boolean;
}
//confirmatio dialog
//TO-DO: RECEIVE PROP ONCONFIRM??
export default function ConfirmModal({ onClose, isOpen }: ConfirmModalProps) {
  console.log("@debug isOpen", isOpen);
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col justify-center items-center p-4">
        <p className="px-16 py-3 mb-2 leading-6 text-center">
          Are you sure you want to cancel your policy? You will not be ensured.{" "}
          {/* //TO-DO: message */}
        </p>
        {/* TO-DO: DELETE ON CONFIRM */}
        <Button className="bg-button-secondary text-text-button-primary shadow-button border-button-secondary m-1">
          CONFIRM
        </Button>
        <Button
          onClick={onClose}
          className="text-button-secondary bg-text-button-primary border-button-secondary m-1"
        >
          EXIT
        </Button>
      </div>
    </BaseModal>
  );
}
