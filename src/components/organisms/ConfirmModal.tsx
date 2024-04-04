import { useState } from "react";
import Button from "../bits/Button";
import BaseModal from "./BaseModal";

interface ConfirmModalProps {
  onClose: () => void;
  isOpen: boolean;
  onConfirm: ()=> Promise<void>;
  message?: string;
}

export default function ConfirmModal({
  onClose,
  isOpen,
  message,
  onConfirm
}: ConfirmModalProps) {
  const [isConfirming, setIsConfirming] = useState(false);
  function handleConfirm() {
    setIsConfirming(true);
    return onConfirm().then(() => setIsConfirming(false));
  }

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col justify-center items-center p-4">
        {message && (
          <p className="px-16 py-3 mb-2 leading-6 text-center">{message}</p>
        )}
        <Button
          disabled={isConfirming}
          onClick={handleConfirm}
          className="bg-button-secondary text-text-button-primary shadow-button border-button-secondary m-1"
        >
          {isConfirming ? "LOADING" : "CONFIRM"}
        </Button>
        <Button
          disabled={isConfirming}
          onClick={onClose}
          className="text-button-secondary bg-text-button-primary border-button-secondary m-1"
        >
          EXIT
        </Button>
      </div>
    </BaseModal>
  );
}
