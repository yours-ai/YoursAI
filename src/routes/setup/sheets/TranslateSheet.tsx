import { Dispatch, SetStateAction, useState } from "react";
import SettingTitle from "@/routes/setup/sheets/SettingTitle.tsx";
import SegmentBoard from "@/components/macos/SegmentBoard.tsx";
import Sheet from "@/components/macos/Sheet.tsx";
import SetupControlButton from "@/components/macos/SetupControlButton.tsx";
import { useTranslation } from "react-i18next";
import SegmentedControlBar from "@/components/macos/SegmentedControlBar.tsx";
import { useMutation } from "@tanstack/react-query";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import { useDb } from "@/contexts/DbContext.ts";
import { GlobalConfig } from "@/domain/config/models.ts";

export interface Props {
  config: GlobalConfig;
  setStep: Dispatch<SetStateAction<number>>;
}

export default function TranslateSheet({ setStep, config }: Props) {
  const { t } = useTranslation("pages/setup");
  const [value, setValue] = useState<boolean>(
    config.conversationConfig.doTranslation,
  );
  const mutation = useMutation({
    mutationFn:
      makeGlobalConfigRepository(useDb()).updateGlobalConversationConfig,
    onSuccess() {
      setStep((prev) => prev + 1);
    },
  });

  return (
    <Sheet
      content={
        <>
          <SettingTitle title={t("translateContent.title")} />
          <div className="phone:px-0 mt-[24px] flex flex-col items-center gap-[17px] px-[20px]">
            <SegmentedControlBar
              value={value}
              options={[
                {
                  value: false,
                  label: t("translateContent.choices.no.label"),
                },
                {
                  value: true,
                  label: t("translateContent.choices.yes.label"),
                },
              ]}
              onChange={setValue}
            />
            <SegmentBoard imgSrc="/mocks/google-translation.png" />
            <div className="text-13p max-w-[450px] text-center leading-[16px]">
              {value
                ? t("translateContent.choices.yes.description")
                : t("translateContent.choices.no.description")}
            </div>
          </div>
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
              mutation.mutate({
                doTranslation: value,
              });
            }}
          />
        </>
      }
    />
  );
}
