import { PropsWithChildren, useCallback, useEffect, useRef } from "react";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  hasCloseBtn?: boolean;
}

export default function BaseModal({
  isOpen,
  title,
  hasCloseBtn,
  onClose,
  children,
}: PropsWithChildren<BaseModalProps>) {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "Escape") onClose();
  }

  const closeMenu = useCallback(
    (event: MouseEvent) => {
      // since the <dialog> element takes the whole screen
      // target inside the dialog will be one of <dialog> children
      // only close when target is dialog (outside <dialog>)
      if (modalRef.current && modalRef.current === event.target) {
        onClose();
      }
    },
    [onClose],
  );

  // add event listener for close on click outside
  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [closeMenu]);

  // used to sync with dialog API
  useEffect(() => {
    const modalElement = modalRef.current;

    if (modalElement) {
      if (isOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [isOpen]);

  return (
    <dialog
      className="rounded-md backdrop:bg-black/50"
      ref={modalRef}
      onKeyDown={handleKeyDown}
    >
      {/*  header */}
      {title && (
        <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-grey6">
          <h3>{title}</h3>
          {/* close button */}
          {hasCloseBtn && (
            <button onClick={onClose}>
              <span>x</span>
            </button>
          )}
        </div>
      )}
      {/* body */}
      <div>{children}</div>
    </dialog>
  );
}
