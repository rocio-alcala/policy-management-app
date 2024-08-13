import { PropsWithChildren, useState } from "react";

import { Button } from "../ui/button";

import BaseModal from "./BaseModal";

interface ConfirmModalProps {
  onClose: () => void;
  isOpen: boolean;
  onConfirm: () => Promise<void>;
  message?: string;
}

export default function ConfirmModal({
  onClose,
  isOpen,
  message,
  onConfirm,
  children,
}: PropsWithChildren<ConfirmModalProps>) {
  const [isConfirming, setIsConfirming] = useState(false);
  function handleConfirm() {
    setIsConfirming(true);
    return onConfirm()
      .then(() => setIsConfirming(false))
      .catch((error) => console.log(error))
      .finally(() => setIsConfirming(false));
  }

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col justify-center items-center p-4">
        {message && (
          <p className="px-16 py-3 mb-2 leading-6 text-center">{message}</p>
        )}
        {children}
        <Button
          disabled={isConfirming}
          onClick={handleConfirm}
          className=" m-1"
          variant={"axa-confirm-primary"}
        >
          {isConfirming ? "LOADING" : "CONFIRM"}
        </Button>
        <Button
          disabled={isConfirming}
          onClick={onClose}
          className="m-1"
          variant="axa-confirm-secondary"
        >
          EXIT
        </Button>
      </div>
    </BaseModal>
  );
}
