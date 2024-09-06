import React, { useEffect, useState } from "react";
import SettingTitle from "@/components/SettingTitle";
import SetupForm from "@/components/SetupForm";
import { SetupContentProps } from "@/app/[locale]/start/contents/ThemeContent";
import { useTranslations } from "next-intl";

function ApiKeyContent({ setBtnDisabled }: SetupContentProps) {
  const t = useTranslations("start/content/apiKeyContent");
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
          placeholder={t("keyInputPlaceholder")}
        ></input>
      ),
    },
  ];

  return (
    <>
      <SettingTitle title={t("title")} />
      <div className="my-[37px] text-13p leading-[16px]">
        {t("leftText")}{" "}
        <span className="font-bold">아주 멋진 프롬프트 템플릿</span>{" "}
        {t("rightText")}
      </div>
      <SetupForm setupFormRows={apiKeyFormRowList} />
    </>
  );
}

export default ApiKeyContent;
