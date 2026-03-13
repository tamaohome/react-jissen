import { Dialog, DialogPanel } from "@headlessui/react";
import { type ReactNode } from "react";
import { MdClose } from "react-icons/md";

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      transition
      className="relative z-50 focus:outline-none"
    >
      <div className="fixed inset-0 bg-black/30 duration-300 ease-out data-closed:opacity-0" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel
          transition
          className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 transition-colors hover:text-gray-600"
            aria-label="Close modal"
          >
            <MdClose className="h-6 w-6" />
          </button>
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
};
