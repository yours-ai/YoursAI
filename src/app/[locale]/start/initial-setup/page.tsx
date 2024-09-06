"use client";

import React, { useState } from "react";
import Sheet from "@/app/[locale]/start/initial-setup/Sheet";
import LanguageContent from "@/app/[locale]/start/contents/LanguageContent";
import DataContent from "@/app/[locale]/start/contents/DataContent";
import ThemeContent from "@/app/[locale]/start/contents/ThemeContent";
import TalkStyleContent from "@/app/[locale]/start/contents/TalkStyleContent";
import ApiKeyContent from "@/app/[locale]/start/contents/ApiKeyContent";
import TranslateContent from "@/app/[locale]/start/contents/TranslateContent";
import TypingSimulationContent from "@/app/[locale]/start/contents/TypingSimulationContent";
import NameContent from "@/app/[locale]/start/contents/NameContent";

function Page() {
  const [step, setStep] = useState<number>(0);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false);

  const steps = [
    <Sheet
      key={1}
      step={step}
      setStep={setStep}
      content={<LanguageContent />}
    />,
    <Sheet key={2} step={step} setStep={setStep} content={<DataContent />} />,
    <Sheet
      key={3}
      step={step}
      setStep={setStep}
      content={<ThemeContent setBtnDisabled={setBtnDisabled} />}
      btnDisabled={btnDisabled}
    />,
    <Sheet
      key={4}
      step={step}
      setStep={setStep}
      content={<TalkStyleContent setBtnDisabled={setBtnDisabled} />}
      btnDisabled={btnDisabled}
    />,
    <Sheet
      key={5}
      step={step}
      setStep={setStep}
      content={<ApiKeyContent setBtnDisabled={setBtnDisabled} />}
      btnDisabled={btnDisabled}
    />,
    <Sheet
      key={6}
      step={step}
      setStep={setStep}
      content={<TranslateContent />}
    />,
    <Sheet
      key={7}
      step={step}
      setStep={setStep}
      content={<TypingSimulationContent />}
    />,
    <Sheet key={8} step={step} setStep={setStep} content={<NameContent />} />,
  ];

  const userLanguage = navigator.language;
  console.log("언어:", userLanguage, typeof userLanguage);

  return <>{steps[step]}</>;
}

export default Page;
