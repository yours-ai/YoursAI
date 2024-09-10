import React from "react";
import AreYouThereBubble from "@/components/AreYouThereBubble.tsx";
import { PiArrowRightBold } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import { SetStateAction } from "react";
import "./startButton.css";

interface Props {
  step: number;
  setStep: React.Dispatch<SetStateAction<number>>;
}

function SetupStart({ setStep }: Props) {
  const { t } = useTranslation("setup/setupPage");
  return (
    <div className="flex flex-col gap-[200px]">
      <div className="flex flex-col items-center">
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
        className="start-button relative top-[100px] flex cursor-pointer flex-col items-center gap-[12px] text-[35px] font-bold text-white/50"
        onClick={() => setStep((prev) => prev + 1)}
      >
        <div className="flex size-[67px] items-center justify-center rounded-full border-4 border-white/50 duration-200">
          <PiArrowRightBold className="duration-200" />
        </div>
        <span className="text-20p leading-[20px] duration-200">
          {t("text")}
        </span>
      </div>
    </div>
  );
}

export default SetupStart;
