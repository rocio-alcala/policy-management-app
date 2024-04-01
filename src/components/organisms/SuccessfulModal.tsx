import BaseModal from "./BaseModal";

interface SuccessfulModalProps {
  onClose: () => void;
  message: string;
}

export default function SuccessfulModal({
  onClose,
  message
}: SuccessfulModalProps) {
  return (
    <BaseModal isOpen onClose={onClose}>
      <div className="flex flex-col justify-center items-center p-5">
        <img className="p-3" src="../../../public/Confirm.png"></img>
        <h3 className="px-16 py-3 leading-6 text-center">{message}</h3>
      </div>
    </BaseModal>
  );
}
