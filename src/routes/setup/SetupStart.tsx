import React, { SetStateAction } from "react";
import AreYouThereBubble from "@/routes/setup/AreYouThereBubble.tsx";
import { PiArrowRightBold } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import "./startButton.css";

export interface Props {
  setStep: React.Dispatch<SetStateAction<number>>;
}

export default function SetupStart({ setStep }: Props) {
  const { t } = useTranslation("pages/setup");
  return (
    <div className="flex size-full flex-col items-center tablet:w-[400px]">
      <div className="absolute top-[10vh] flex flex-col items-center tablet:top-[20vh]">
        <img src="/logo.png" alt="heart-logo" width={180} height={180} />
        <AreYouThereBubble>
          <img
            src="/logo-letters.png"
            alt="yours-ai"
            width={192}
            height={70}
            className="relative bottom-5"
          />
        </AreYouThereBubble>
      </div>
      <div
        className="start-button absolute bottom-[88px] flex cursor-pointer flex-col items-center gap-[12px] text-[35px] font-bold text-white/50"
        onClick={() => setStep((prev) => prev + 1)}
      >
        <div className="flex size-[67px] items-center justify-center rounded-full border-4 border-white/50 duration-200">
          <PiArrowRightBold className="duration-200" />
        </div>
        <span className="text-20p leading-[20px] duration-200">
          {t("setupStart.text")}
        </span>
      </div>
    </div>
  );
}
