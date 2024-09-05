import React from "react";
import Image from "next/image";
import { PiArrowRightBold } from "react-icons/pi";
import AreYouThereBubble from "@/app/start/AreYouThereBubble";
import Link from "next/link";
import "./startButton.css";

function Page() {
  return (
    <div className="flex flex-col gap-[175px]">
      <div className="flex flex-col items-center">
        <Image
          src="/heart-logo.png"
          alt="heart-logo"
          width={180}
          height={180}
        />
        <Image
          src="/logo-letters.png"
          alt="yours-ai"
          width={192}
          height={70}
          className="relative bottom-5"
        />
        <AreYouThereBubble />
      </div>
      <Link href="/start/initial-setup">
        <div className="start-button flex flex-col items-center gap-[12px] text-[35px] font-bold text-white/50">
          <div className="flex size-[67px] items-center justify-center rounded-full border-4 border-white/50 duration-200">
            <PiArrowRightBold className="duration-200" />
          </div>
          <span className="text-20p leading-[20px] duration-200">시작하기</span>
        </div>
      </Link>
    </div>
  );
}

export default Page;
