import { Dispatch, SetStateAction, useState } from "react";
import SettingTitle from "@/routes/setup/sheets/SettingTitle.tsx";
import SegmentedControlBar from "@/components/macos/SegmentedControlBar.tsx";
import SegmentBoard from "@/components/macos/SegmentBoard.tsx";
import { Trans, useTranslation } from "react-i18next";
import Sheet from "@/components/macos/Sheet.tsx";
import SetupControlButton from "@/components/macos/SetupControlButton.tsx";

export interface Props {
  setStep: Dispatch<SetStateAction<number>>;
}

export default function TypingSimulationSheet({ setStep }: Props) {
  const { t } = useTranslation("pages/setup");
  const [index, setIndex] = useState<number>(0);

  const typingSimulationChoices = [
    {
      title: t("typingSimulationContent.choices.yes.label"),
      content: <SegmentBoard />,
      description: (
        <Trans i18nKey="typingSimulationContent.choices.yes.description" t={t}>
          실제 사람이 작성하는 것처럼 캐릭터의 대화를 보여줍니다.<br></br>읽기
          편하고 현실감이 있습니다.
        </Trans>
      ),
    },
    {
      title: t("typingSimulationContent.choices.no.label"),
      content: <SegmentBoard />,
      description: (
        <Trans i18nKey="typingSimulationContent.choices.no.description" t={t}>
          가능한 빠르게 캐릭터의 말을 보여줍니다.<br></br>다소 기계적이지만
          빠르게 대화를 이어나갈 수 있습니다.
        </Trans>
      ),
    },
  ];

  return (
    <Sheet
      content={
        <>
          <SettingTitle title={t("typingSimulationContent.title")} />
          <div className="mt-[24px] flex flex-col gap-[17px]">
            <SegmentedControlBar
              segments={typingSimulationChoices}
              setIndex={setIndex}
            />
            {typingSimulationChoices[index].content}
            <div className="text-center text-13p leading-[16px]">
              {typingSimulationChoices[index].description}
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
              setStep((prev) => prev + 1);
            }}
          />
        </>
      }
    />
  );
}
