import React from "react";

function SetupLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-screen w-full ">
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
