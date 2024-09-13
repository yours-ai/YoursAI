import React from "react";
import { use100vh } from "react-div-100vh";

function SetupLayout({ children }: { children: React.ReactNode }) {
  const vh = use100vh();
  return (
    <div className="relative w-full " style={{ height: vh ?? undefined }}>
      <img
        src="/start-wallpaper.png"
        alt="bg-wallpaper"
        className="absolute inset-0 z-0 size-full object-cover object-center"
      />
      <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-[15px]" />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default SetupLayout;
