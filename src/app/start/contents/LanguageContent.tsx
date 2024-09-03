import React from "react";
import { PiGlobe } from "react-icons/pi";
import SettingTitle from "@/components/SettingTitle";

function LanguageContent() {
  return (
    <>
      <SettingTitle icon={<PiGlobe />} title="언어 선택" />
    </>
  );
}

export default LanguageContent;
