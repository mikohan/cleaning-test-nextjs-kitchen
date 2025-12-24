import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import VideoIcon from "@/public/images/couch/video-icon.svg";
import { AnimatedButton } from "./SmallComponents/AnimatedButton";
import { VideoComponent } from "./VideoComponent";

export const ModalVideo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

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
      <div onClick={handleOpen}>
        <div className="hidden md:inline-flex items-center gap-4 group hover:scale-105 transition-transform duration-300 cursor-pointer">
          <div className="border-4 border-couchBlue/50 aspect-square h-[75px] w-[75px] rounded-full flex items-ceter justify-center bg-transparent shadow-md">
            <Image
              src={VideoIcon}
              height={24}
              width={24}
              alt="button"
              className="block ml-1"
            />
          </div>
          <div className="block">Watch Video</div>
        </div>
      </div>
      <dialog ref={modal} className="modal font-blauerRegular">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl">
          <h2 className="text-2xl font-blauerMedium text-couchDarkBlue mb-6 text-center">
            Watch Video about my cleanig process
          </h2>

          <div className="space-y-5 h-full w-auto">
            {/* Name Field */}
            <div>
              <VideoComponent source="/videos/process.mp4" />
            </div>
            {/* Action Buttons */}

            <div className="flex gap-3 pt-4">
              <div onClick={handleClose}>
                <AnimatedButton className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition cursor-pointer">
                  Close
                </AnimatedButton>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};
