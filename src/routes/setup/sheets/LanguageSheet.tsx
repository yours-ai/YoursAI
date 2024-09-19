import { PiGlobe } from "react-icons/pi";
import SettingTitle from "@/routes/setup/sheets/SettingTitle.tsx";
import { Trans, useTranslation } from "react-i18next";
import { AvailableLanguages, LanguageDisplays } from "@/locales/models.ts";
import { makeGlobalConfigService } from "@/domain/config/services.ts";
import { useCurrentLanguage } from "@/locales/hooks.ts";
import { useMutation } from "@tanstack/react-query";
import { useDb } from "@/contexts/DbContext.ts";
import Sheet from "@/components/macos/Sheet.tsx";
import NextSetupArrow from "@/components/macos/NextSetupArrow.tsx";
import LanguageItem from "@/routes/setup/sheets/LanguageItem.tsx";
import { Dispatch, SetStateAction } from "react";

export interface Props {
  setStep: Dispatch<SetStateAction<number>>;
}

export default function LanguageSheet({ setStep }: Props) {
  const { t } = useTranslation("pages/setup");
  const currentLang = useCurrentLanguage();
  const mutation = useMutation({
    mutationFn: makeGlobalConfigService(useDb()).updateGlobalConfig,
  });
  return (
    <Sheet
      content={
        <>
          <SettingTitle icon={<PiGlobe />} title={t("languageContent.title")} />
          <div className="mt-[26px] h-[177px] w-[170px] bg-white">
            {AvailableLanguages.map((language) => (
              <LanguageItem
                key={language}
                isSelected={currentLang === language}
                language={LanguageDisplays[language]}
                onClick={() => mutation.mutate({ language })}
              />
            ))}
          </div>
          <div className="absolute top-[521px] text-center text-[18px] font-semibold leading-[25px] tablet:text-20p tablet:text-white">
            <Trans i18nKey="languageContent.description" t={t}>
              계속한다고 해서 무슨 약관에 동의하는 건 아닙니다.
              <br />
              어차피 모든 데이터는 로컬에만 저장됩니다.
            </Trans>
          </div>
        </>
      }
      rightActions={
        <NextSetupArrow onClick={() => setStep((prev) => prev + 1)} />
      }
    />
  );
}
