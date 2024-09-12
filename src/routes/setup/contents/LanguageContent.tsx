import { PiGlobe } from "react-icons/pi";
import SettingTitle from "@/components/SettingTitle";
import { Trans, useTranslation } from "react-i18next";
import i18n from "i18next";
import { useMemo, useState } from "react";
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
  const locale = useMemo(() => {
    return i18n.language;
  }, []);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(locale);
  const handleLanguageClick = (language: string) => {
    setSelectedLanguage(language);
  };
  return (
    <>
      <SettingTitle icon={<PiGlobe />} title={t("languageContent.title")} />
      <div className="mt-[26px] h-[177px] w-[170px] bg-white">
        <LanguageItem
          isSelected={selectedLanguage === "ko"}
          language="한국어"
          onClick={() => handleLanguageClick("ko")}
        />
        <LanguageItem
          isSelected={selectedLanguage.startsWith("en")}
          language="English"
          onClick={() => handleLanguageClick("en")}
        />
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
