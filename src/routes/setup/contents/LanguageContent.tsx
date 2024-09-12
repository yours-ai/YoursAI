import { PiGlobe } from "react-icons/pi";
import SettingTitle from "@/components/SettingTitle";
import { Trans, useTranslation } from "react-i18next";
import { AvailableLanguages, LanguageDisplays } from "@/locales/models.ts";
import { useDexieMutation } from "@/hooks/useDexie.tsx";
import { updateGlobalConfig } from "@/domain/config/services.ts";
import { useCurrentLanguage } from "@/locales/hooks.ts";

interface Props {
  isSelected: boolean;
  language: string;
  onClick?: () => void;
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
  const { t } = useTranslation("pages/setup");
  const currentLang = useCurrentLanguage();
  const mutation = useDexieMutation(updateGlobalConfig, {
    onError: console.log,
  });
  return (
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
      <div className="absolute top-[521px] text-center text-20p font-semibold leading-[25px] text-white">
        <Trans i18nKey="languageContent.description" t={t}>
          계속한다고 해서 무슨 약관에 동의하는 건 아닙니다.
          <br />
          어차피 모든 데이터는 로컬에만 저장됩니다.
        </Trans>
      </div>
    </>
  );
}

export default LanguageContent;
