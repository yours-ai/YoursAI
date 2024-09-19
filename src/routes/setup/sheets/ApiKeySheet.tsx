import { Dispatch, SetStateAction, useState } from "react";
import SettingTitle from "@/routes/setup/sheets/SettingTitle.tsx";
import SetupForm from "@/components/macos/SetupForm.tsx";
import { useTranslation } from "react-i18next";
import Sheet from "@/components/macos/Sheet.tsx";
import SetupControlButton from "@/components/macos/SetupControlButton.tsx";

export interface Props {
  setStep: Dispatch<SetStateAction<number>>;
}

export default function ApiKeySheet({ setStep }: Props) {
  const { t } = useTranslation("pages/setup");
  const [inputValue, setInputValue] = useState<string>("");

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
    <Sheet
      content={
        <>
          <SettingTitle title={t("apiKeyContent.title")} />
          <div className="my-[37px] text-13p leading-[16px]">
            {t("apiKeyContent.leftText")}{" "}
            <span className="font-bold">아주 멋진 프롬프트 템플릿</span>{" "}
            {t("apiKeyContent.rightText")}
          </div>
          <SetupForm setupFormRows={apiKeyFormRowList} />
        </>
      }
      rightActions={
        <>
          <SetupControlButton
            onClick={() => setStep((prev) => prev - 1)}
            goBack
          />
          <SetupControlButton
            onClick={() => {
              setStep((prev) => prev + 1);
            }}
          />
        </>
      }
    />
  );
}
