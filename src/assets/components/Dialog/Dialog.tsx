import { useEffect, useRef, useState } from "react";

type Adv_Dialog = {
  children?: JSX.Element | null;
  isOpen?: boolean | (() => boolean);
};
export function Dialog(prop: Adv_Dialog): JSX.Element {
  const [open, setOpen] = useState<boolean>(true);
  let tabIndex = 0;
  document.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
      setOpen(false);
    }
  });
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      tabIndex = 0;
    } else {
      document.body.style.overflow = "auto";
      tabIndex = -1;
    }
  }, [open]);
  return (
    <dialog
      tabIndex={tabIndex}
      className={`fixed top-0 left-0 z-50 grid h-screen w-screen place-items-center bg-gray-700 p-4 ${
        open ? "bg-opacity-30" : "-z-10 select-none bg-opacity-0"
      } transition-[transform_opacity] duration-200`}
    >
      <div
        className={`flex rounded-lg bg-white p-6 transition-[transform_opacity] ${
          !open ? "scale-90 opacity-0" : "scale-100 opacity-100 duration-200"
        } cursor-default`}
      >
        <div>{prop.children}</div>
        <button
          title="close a dialog"
          onClick={() => setOpen(!open)}
          type="button"
          className="ml-2 -mt-1 -mr-1 grid h-9 w-9 place-items-center rounded-lg
                bg-black bg-opacity-30 p-1.5 text-center text-xl text-white
                active:scale-95 active:bg-opacity-40"
        >
          <span
            className="-translate-y-[1.5px] select-none font-medium"
            translate="no"
          >
            􀆄
          </span>
        </button>
      </div>
    </dialog>
  );
}
