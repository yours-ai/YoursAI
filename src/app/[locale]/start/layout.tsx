import React from "react";
import Image from "next/image";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-screen w-full ">
      <Image
        src="/start-wallpaper.png"
        alt="bg-wallpaper"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 z-10 bg-black/50 backdrop-blur-[15px]" />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default Layout;
