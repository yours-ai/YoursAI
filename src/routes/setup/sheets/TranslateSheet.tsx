import { Dispatch, SetStateAction, useState } from "react";
import SettingTitle from "@/routes/setup/sheets/SettingTitle.tsx";
import SegmentedControlBar from "@/components/macos/SegmentedControlBar.tsx";
import SegmentBoard from "@/components/macos/SegmentBoard.tsx";
import Sheet from "@/components/macos/Sheet.tsx";
import SetupControlButton from "@/components/macos/SetupControlButton.tsx";

const translationChoices = [
  {
    title: "아니요 (권장)",
    content: <SegmentBoard />,
    description: (
      <p>
        따로 번역 기능을 사용하지 않습니다.
        <br />
        대화 내용이 그대로 LLM에 전달되어, 자연스러운 말투 구현에 도움을 줍니다.
        <br />
        토큰을 조금 더 사용하며, 덜 똑똑할 수 있습니다.
      </p>
    ),
  },
  {
    title: "네",
    content: <SegmentBoard />,
    description: (
      <p>
        번역 기능을 제공합니다.
        <br />
        Google Translate로 번역이 이뤄집니다.
        <br />
        토큰을 덜 사용하지만 번역이 부자연스러울 수 있습니다.
      </p>
    ),
  },
];

export interface Props {
  setStep: Dispatch<SetStateAction<number>>;
}

export default function TranslateSheet({ setStep }: Props) {
  const [index, setIndex] = useState<number>(0);

  return (
    <Sheet
      content={
        <>
          <SettingTitle title="이중 번역 기능을 사용할까요?" />
          <div className="mt-[24px] flex flex-col gap-[17px]">
            <SegmentedControlBar
              segments={translationChoices}
              setIndex={setIndex}
            />
            {translationChoices[index].content}
            <div className="text-center text-13p leading-[16px]">
              {translationChoices[index].description}
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
