import { useState, useEffect, useRef, useActionState } from "react";
import Link from "next/link";

import { FormState, sendEmail } from "@/lib/resend";
import { AnimatedButton } from "./SmallComponents/AnimatedButton";

export const ModalDaisy = () => {
  // const [state, action, isLoading] = useActionState<FormState, FormData>(
  //   sendEmail,
  //   { success: false }
  // );
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const [state, action, isLoading] = useActionState<FormState, FormData>(
    async (prevState: FormState, formData: FormData) => {
      // 1. Call the actual server action
      const result = await sendEmail(prevState, formData);

      // 2. Execute your callback logic based on the result
      if (result.success) {
        // console.log("Success callback activated!");
        handleClose();
      }

      // 3. Return the result so 'state' updates
      return result;
    },
    { success: false } // Initial state
  );

  // handling modal
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = modal.current;
    if (!dialog) return;

    // Handle outside clicks
    const handleOutsideClick = (e: MouseEvent) => {
      // If the target of the click IS the <dialog> itself,
      // it means the user clicked the backdrop (outside the content).
      if (e.target === dialog) {
        setIsOpen(false);
      }
    };

    dialog.addEventListener("click", handleOutsideClick);

    // Sync visibility
    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }

    return () => dialog.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  return (
    <>
      <button className="btn" onClick={handleOpen}>
        open modal
      </button>
      <dialog ref={modal} className="modal font-blauerRegular">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl">
          <h2 className="text-2xl font-blauerMedium text-couchDarkBlue mb-6 text-center">
            Steam Cleaning Reservation
          </h2>

          <form action={action} className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
                Full Name
              </label>
              <input
                name="username"
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
                Email
              </label>
              <input
                name="email"
                type="email"
                placeholder="your-email@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
                Phone Number
              </label>
              <input
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Seating Capacity Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 after:content-['*'] after:ml-0.5 after:text-red-500">
                Couch Size (Capacity)
              </label>
              <input
                name="couch"
                type="text"
                placeholder="e.g. 3 person seater"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
              <p className="text-xs text-gray-500 mt-1">
                Specify how many people can sit on the couch.
              </p>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500">
              We care about your data. Read our{" "}
              <Link
                href="/privacy-policy"
                className="text-blue-600 hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition cursor-pointer"
              >
                Cancel
              </button>

              <AnimatedButton
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition font-semibold cursor-pointer"
                type="submit"
              >
                {isLoading ? (
                  <span className="loading loading-bars"></span>
                ) : (
                  "Send"
                )}
              </AnimatedButton>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};
