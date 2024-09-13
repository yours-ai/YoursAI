import SetupLayout from "@/routes/setup/SetupLayout.tsx";
import SetupStart from "@/routes/setup/SetupStart.tsx";
import { Suspense, useMemo, useState } from "react";
import Sheet from "@/components/Sheet.tsx";
import LanguageContent from "@/routes/setup/contents/LanguageContent.tsx";
import DataContent from "@/routes/setup/contents/DataContent.tsx";
import ThemeContent from "@/routes/setup/contents/ThemeContent.tsx";
import ConversationStyleContent from "@/routes/setup/contents/ConversationStyleContent.tsx";
import ApiKeyContent from "@/routes/setup/contents/ApiKeyContent.tsx";
import TranslateContent from "@/routes/setup/contents/TranslateContent.tsx";
import TypingSimulationContent from "@/routes/setup/contents/TypingSimulationContent.tsx";
import NameContent from "@/routes/setup/contents/NameContent.tsx";
import i18n from "i18next";
import DefaultErrorBoundary from "@/components/DefaultErrorBoundary.tsx";
import { DefaultLanguage } from "@/locales/models.ts";

export function Component() {
  const locale = useMemo(() => {
    return i18n.language;
  }, []);
  const [step, setStep] = useState<number>(0);
  const [btnDisabled, setBtnDisabled] = useState<boolean>(false);

  const steps = [
    <SetupStart key={0} step={step} setStep={setStep} />,
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
      content={<ConversationStyleContent setBtnDisabled={setBtnDisabled} />}
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
    <Sheet
      key={8}
      step={step}
      setStep={setStep}
      content={<NameContent />}
      last
    />,
  ];

  const stepsNoTranslationStep = steps.filter(
    (step) =>
      !(
        step.type === Sheet &&
        step.props.content &&
        step.props.content.type === TranslateContent
      ),
  );
  return (
    <SetupLayout>
      <Suspense fallback={<div />}>
        {locale !== DefaultLanguage
          ? steps[step]
          : stepsNoTranslationStep[step]}
      </Suspense>
    </SetupLayout>
  );
}

export const ErrorBoundary = DefaultErrorBoundary;
Component.displayName = "SetupPage";
