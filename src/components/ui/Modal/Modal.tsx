import { Dialog, DialogPanel } from "@headlessui/react";
import { type ReactNode } from "react";

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
      <div className="inset-0 bg-black/30 ease-out fixed duration-300 data-closed:opacity-0" />
      <div className="inset-0 p-4 fixed flex items-center justify-center">
        <DialogPanel
          transition
          className="max-w-md rounded-xl bg-white p-6 shadow-xl ease-out w-full duration-300 data-closed:scale-95 data-closed:opacity-0"
        >
          {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
};
