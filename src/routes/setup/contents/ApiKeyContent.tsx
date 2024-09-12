import { useEffect, useState } from "react";
import SettingTitle from "@/components/SettingTitle";
import SetupForm from "@/components/SetupForm";
import { useTranslation } from "react-i18next";
import { SetupContentProps } from "@/routes/setup/contents/ThemeContent.tsx";

function ApiKeyContent({ setBtnDisabled }: SetupContentProps) {
  const { t } = useTranslation("pages/setup");
  const [inputValue, setInputValue] = useState<string>("");
  useEffect(() => {
    if (inputValue === "") {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  }, [setBtnDisabled, inputValue]);

  const apiKeyFormRowList = [
    {
      rowTitle: "OpenAI API Key",
      action: (
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          className="rounded-[5px] bg-transparent px-[8px] py-[4px] text-13p leading-[16px] text-black outline-0 placeholder:text-black/50"
          style={{ border: "1px solid rgba(0,0,0, 0.1)" }}
          placeholder={t("apiKeyContent.keyInputPlaceholder")}
        ></input>
      ),
    },
  ];

  return (
    <>
      <SettingTitle title={t("apiKeyContent.title")} />
      <div className="my-[37px] text-13p leading-[16px]">
        {t("apiKeyContent.leftText")}{" "}
        <span className="font-bold">아주 멋진 프롬프트 템플릿</span>{" "}
        {t("apiKeyContent.rightText")}
      </div>
      <SetupForm setupFormRows={apiKeyFormRowList} />
    </>
  );
}

export default ApiKeyContent;
