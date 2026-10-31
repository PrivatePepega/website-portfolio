"use client";

// Environment
import { useMyContext } from "../MyContext";

// Assets
import HR1 from "./HR1";

const BlockNavBar = () => {
  const { navbarActive, moveToDeveloper, moveToContact } = useMyContext();

  return (
    <div>
      <HR1 />
      <div className="relative isolate mx-auto flex h-24 w-[70%] flex-row items-center justify-center text-lg">
        <div
          aria-hidden
          className={`pointer-events-none absolute top-0 left-0 z-2 flex h-full w-1/2 bg-aliceblue mix-blend-difference transition-transform duration-500 ease-in-out ${
            navbarActive === "contact" ? "translate-x-full" : "translate-x-0"
          }`}
        />
        <button
          type="button"
          onClick={moveToDeveloper}
          aria-pressed={navbarActive === "developer"}
          className="relative flex h-full w-full cursor-pointer items-center justify-center text-center focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
        >
          Developer
        </button>
        <button
          type="button"
          onClick={moveToContact}
          aria-pressed={navbarActive === "contact"}
          className="relative flex h-full w-full cursor-pointer items-center justify-center text-center focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
        >
          Contact
        </button>
      </div>
      <HR1 />
    </div>
  );
};

export default BlockNavBar;
