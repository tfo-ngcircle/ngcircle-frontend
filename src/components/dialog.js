import { Dialog, Transition } from "@headlessui/react";

function MyDialog({
  title,
  description,
  isOpen,
  onClose,
  onPositive,
  onNegative,
}) {
  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Dialog
        open={isOpen}
        onClose={onClose}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="relative bg-white rounded max-w-md mx-auto px-7 py-6 space-y-2">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              {title}
            </Dialog.Title>
            <Dialog.Description as="p" className="text-sm text-gray-500">
              {description}
            </Dialog.Description>

            <div className="!mt-4 space-x-3 justify-end flex">
              {onNegative && (
                <button
                  onClick={onNegative}
                  className="disabled:bg-gray-300 shadow text-base font-medium rounded-md text-white bg-gray-400 hover:bg-gray-500 px-4 py-2 min-w-[6em]"
                >
                  Cancel
                </button>
              )}
              <button
                className="disabled:bg-gray-500 shadow text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark px-4 py-2 min-w-[6em]"
                onClick={onPositive}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default MyDialog;
