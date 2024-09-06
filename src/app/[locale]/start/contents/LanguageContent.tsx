"use client";

import React, { useState } from "react";
import { PiGlobe } from "react-icons/pi";
import SettingTitle from "@/components/SettingTitle";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

interface Props {
  isSelected: boolean;
  language: string;
  onClick: () => void;
}

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
  const { locale }: { locale: string } = useParams();
  const t = useTranslations("start/content/languageContent");
  const description = t.rich("description", {
    p: (chunks) => <p>{chunks}</p>,
    br: () => <br></br>,
  });
  const [selectedLanguage, setSelectedLanguage] = useState<string>(locale);
  const handleLanguageClick = (language: string) => {
    setSelectedLanguage(language);
  };
  return (
    <>
      <SettingTitle icon={<PiGlobe />} title={t("title")} />
      <div className="mt-[26px] h-[177px] w-[170px] bg-white">
        <LanguageItem
          isSelected={selectedLanguage === "kr"}
          language="한국어"
          onClick={() => handleLanguageClick("kr")}
        />
        <LanguageItem
          isSelected={selectedLanguage === "en"}
          language="English"
          onClick={() => handleLanguageClick("en")}
        />
      </div>
      <div className="absolute top-[521px] text-center text-20p font-semibold leading-[25px] text-white">
        {description}
      </div>
    </>
  );
}

export default LanguageContent;
