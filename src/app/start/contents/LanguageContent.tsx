"use client";

import React, { useState } from "react";
import { PiGlobe, PiArrowRightBold } from "react-icons/pi";
import SettingTitle from "@/components/SettingTitle";
import useStepsStore from "@/stores/setupStepStore";
import useSetupStepsStore from "@/stores/setupStepStore";

interface Props {
  isSelected: boolean;
  language: string;
  onClick: () => void;
}

type Languages = "한국어" | "English";

const LanguageItem = ({ isSelected, language, onClick }: Props) => {
  return (
    <div
      className={`flex w-full items-center justify-center border-b border-black/5 py-1 text-13p ${isSelected ? "bg-accentBlue text-white" : ""} cursor-pointer duration-100`}
      onClick={onClick}
    >
      {language}
    </div>
  );
};

function LanguageContent() {
  const { increase } = useSetupStepsStore();
  const [selectedLanguage, setSelectedLanguage] = useState<Languages>("한국어");
  const handleLanguageClick = (language: Languages) => {
    setSelectedLanguage(language);
  };
  return (
    <>
      <SettingTitle icon={<PiGlobe />} title="언어 선택" />
      <div className="mt-[26px] h-[177px] w-[170px] bg-white">
        <LanguageItem
          isSelected={selectedLanguage === "한국어"}
          language="한국어"
          onClick={() => handleLanguageClick("한국어")}
        />
        <LanguageItem
          isSelected={selectedLanguage === "English"}
          language="English"
          onClick={() => handleLanguageClick("English")}
        />
      </div>
      <div
        className="absolute bottom-[12px] right-[19px] cursor-pointer text-black/50 hover:text-black/70"
        onClick={increase}
      >
        <PiArrowRightBold className="text-[24px] " />
      </div>
    </>
  );
}

export default LanguageContent;
