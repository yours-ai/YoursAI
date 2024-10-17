import { Dispatch, SetStateAction, useState } from "react";
import SettingTitle from "@/routes/setup/sheets/SettingTitle.tsx";
import SegmentBoard from "@/components/macos/SegmentBoard.tsx";
import { Trans, useTranslation } from "react-i18next";
import Sheet from "@/components/macos/Sheet.tsx";
import SetupControlButton from "@/components/macos/SetupControlButton.tsx";
import { GlobalConfig } from "@/domain/config/models.ts";
import SegmentedControlBar from "@/components/macos/SegmentedControlBar.tsx";
import { useMutation } from "@tanstack/react-query";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import { useDb } from "@/contexts/DbContext.ts";

export interface Props {
  config: GlobalConfig;
  setStep: Dispatch<SetStateAction<number>>;
}

export default function TypingSimulationSheet({ setStep, config }: Props) {
  const { t } = useTranslation("pages/setup");
  const [value, setValue] = useState<boolean>(
    config.conversationConfig.doTypingSimulation,
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
          <SettingTitle title={t("typingSimulationContent.title")} />
          <div className="mt-[24px] flex w-full flex-col items-center gap-[17px] px-[20px] phone:px-0">
            <SegmentedControlBar
              value={value}
              onChange={setValue}
              options={[
                {
                  value: true,
                  label: t("typingSimulationContent.choices.yes.label"),
                },
                {
                  value: false,
                  label: t("typingSimulationContent.choices.no.label"),
                },
              ]}
            />
            <SegmentBoard
              imgSrc="/mocks/typing-simulation.png"
              alt="typing simulation image"
            />
            <div className="text-center text-13p leading-[16px]">
              {value ? (
                <Trans
                  i18nKey="typingSimulationContent.choices.yes.description"
                  t={t}
                >
                  실제 사람이 작성하는 것처럼 캐릭터의 대화를 보여줍니다.
                  <br></br>읽기 편하고 현실감이 있습니다.
                </Trans>
              ) : (
                <Trans
                  i18nKey="typingSimulationContent.choices.no.description"
                  t={t}
                >
                  가능한 빠르게 캐릭터의 말을 보여줍니다.<br></br>다소
                  기계적이지만 빠르게 대화를 이어나갈 수 있습니다.
                </Trans>
              )}
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
                doTypingSimulation: value,
              });
            }}
          />
        </>
      }
    />
  );
}
