import { Dispatch, SetStateAction, useState } from "react";
import SettingTitle from "@/routes/setup/sheets/SettingTitle.tsx";
import SegmentedControlBar from "@/components/macos/SegmentedControlBar.tsx";
import SegmentBoard from "@/components/macos/SegmentBoard.tsx";
import SetupControlButton from "@/components/macos/SetupControlButton.tsx";
import { useTranslation } from "react-i18next";
import Sheet from "@/components/macos/Sheet.tsx";

export interface Props {
  setStep: Dispatch<SetStateAction<number>>;
}

function ThemeSheet({ setStep }: Props) {
  const { t } = useTranslation("pages/setup");
  const [index, setIndex] = useState(0);

  const themes = [
    {
      title: t("themeContent.themes.fruit.name"),
      content: <SegmentBoard />,
      description: t("themeContent.themes.fruit.description"),
    },
    {
      title: t("themeContent.themes.chocolate.name"),
      content: <SegmentBoard />,
      description: t("themeContent.themes.chocolate.description"),
    },
    {
      title: t("themeContent.themes.navy.name"),
      content: <SegmentBoard />,
      description: t("themeContent.themes.navy.description"),
    },
    {
      title: t("themeContent.themes.custom.name"),
      content: (
        <div className="flex h-[223px] w-[421px] items-center justify-center">
          <SetupControlButton
            custom={t("themeContent.themes.custom.upload")}
            upload
          />
        </div>
      ),
    },
  ];

  return (
    <Sheet
      content={
        <>
          <SettingTitle title={t("themeContent.title")} />
          <div className="mt-[24px] flex w-full flex-col items-center gap-[17px]">
            <SegmentedControlBar segments={themes} setIndex={setIndex} />
            {themes[index].content}
            <div className="text-13p leading-[16px]">
              {themes[index].description}
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

export default ThemeSheet;
