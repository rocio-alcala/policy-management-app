import BaseModal from "./BaseModal";

interface SuccessfulModalProps {
  onClose: () => void;
  message: string;
  isOpen: boolean
}

export default function SuccessfulModal({
  isOpen,
  onClose,
  message
}: SuccessfulModalProps) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col justify-center items-center p-5">
        <img className="p-3" src="/Confirm.png"></img>
        <h3 className="px-16 py-3 leading-6 text-center">{message}</h3>
      </div>
    </BaseModal>
  );
}
