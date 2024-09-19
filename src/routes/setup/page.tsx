import SetupLayout from "@/routes/setup/SetupLayout.tsx";
import SetupStart from "@/routes/setup/SetupStart.tsx";
import { Suspense, useMemo, useState } from "react";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";
import { DefaultLanguage } from "@/locales/models.ts";
import LanguageSheet from "@/routes/setup/sheets/LanguageSheet.tsx";
import DataSheet from "@/routes/setup/sheets/DataSheet.tsx";
import ThemeSheet from "@/routes/setup/sheets/ThemeSheet.tsx";
import ConversationStyleSheet from "@/routes/setup/sheets/ConversationStyleSheet.tsx";
import { useCurrentLanguage } from "@/locales/hooks.ts";
import ApiKeySheet from "@/routes/setup/sheets/ApiKeySheet.tsx";
import TranslateSheet from "@/routes/setup/sheets/TranslateSheet.tsx";
import TypingSimulationSheet from "@/routes/setup/sheets/TypingSimulationSheet.tsx";
import NameSheet from "@/routes/setup/sheets/NameSheet.tsx";

export function Component() {
  const currentLanguage = useCurrentLanguage();
  const [step, setStep] = useState<number>(0);

  const steps = useMemo(
    () => [
      <SetupStart key={0} setStep={setStep} />,
      <LanguageSheet key={1} setStep={setStep} />,
      <DataSheet key={2} setStep={setStep} />,
      <ThemeSheet key={3} setStep={setStep} />,
      <ConversationStyleSheet key={4} setStep={setStep} />,
      <ApiKeySheet key={5} setStep={setStep} />,
      ...(currentLanguage !== DefaultLanguage
        ? [<TranslateSheet key={6} setStep={setStep} />]
        : []),
      <TypingSimulationSheet key={7} setStep={setStep} />,
      <NameSheet key={8} setStep={setStep} />,
    ],
    [currentLanguage],
  );
  return (
    <SetupLayout>
      <Suspense fallback={<div />}>{steps[step]}</Suspense>
    </SetupLayout>
  );
}

export const ErrorBoundary = DefaultErrorBoundary;

Component.displayName = "SetupPage";
