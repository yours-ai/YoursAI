import SetupLayout from "@/routes/setup/SetupLayout.tsx";
import SetupStart from "@/routes/setup/SetupStart.tsx";
import { Suspense, useEffect, useMemo, useState } from "react";
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
import PersonaSheet from "@/routes/setup/sheets/PersonaSheet.tsx";
import { useLiveQuery } from "dexie-react-hooks";
import { useDb } from "@/contexts/DbContext.ts";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";

export function Component() {
  const currentLanguage = useCurrentLanguage();
  const [step, setStep] = useState<number>(0);
  const db = useDb();
  const config = useLiveQuery(makeGlobalConfigRepository(db).getGlobalConfig);
  const needAPIKeySetup = useLiveQuery(
    makeGlobalConfigRepository(db).needAPIKeySetup,
  );

  useEffect(() => {
    if (config?.language === "en" && config.conversationConfig.doTranslation) {
      void makeGlobalConfigRepository(db).updateGlobalConversationConfig({
        doTranslation: false,
      });
    }
  }, [config, db]);

  const steps = useMemo(
    () =>
      [
        <SetupStart key={0} setStep={setStep} />,
        <LanguageSheet key={1} setStep={setStep} />,
        <DataSheet key={2} setStep={setStep} />,
        config && <ThemeSheet config={config} key={3} setStep={setStep} />,
        config && (
          <ConversationStyleSheet key={4} config={config} setStep={setStep} />
        ),
        needAPIKeySetup && <ApiKeySheet key={5} setStep={setStep} />,
        config && currentLanguage !== DefaultLanguage && (
          <TranslateSheet config={config} key={6} setStep={setStep} />
        ),
        config && (
          <TypingSimulationSheet key={7} setStep={setStep} config={config} />
        ),
        config && <PersonaSheet config={config} key={8} setStep={setStep} />,
      ].filter(Boolean),
    [config, currentLanguage, needAPIKeySetup],
  );

  return (
    <SetupLayout>
      <Suspense fallback={<div />}>{steps[step]}</Suspense>
    </SetupLayout>
  );
}

export const ErrorBoundary = DefaultErrorBoundary;

Component.displayName = "SetupPage";
