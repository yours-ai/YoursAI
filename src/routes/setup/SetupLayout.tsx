import React from "react";
import { createPortal } from "react-dom";
import { use100vh } from "react-div-100vh";

export default function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const vh = use100vh();
  return (
    <div className="relative w-full" style={{ minHeight: vh ?? undefined }}>
      {createPortal(
        <>
          <img
            src="/start-wallpaper.png"
            alt="bg-wallpaper"
            className="absolute inset-0 z-0 size-full object-cover object-center"
          />
          <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-[15px]" />
        </>,
        document.body,
      )}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}
