import React, { SetStateAction, useEffect, useState } from "react";
import SettingTitle from "@/components/SettingTitle";
import SegmentedControlBar from "@/components/SegmentedControlBar";
import SegmentBoard from "@/components/SegmentBoard";
import SetupControlButton from "@/components/SetupControlButton";
import { useTranslation } from "react-i18next";

export interface SetupContentProps {
  setBtnDisabled: React.Dispatch<SetStateAction<boolean>>;
}

function ThemeContent({ setBtnDisabled }: SetupContentProps) {
  const { t } = useTranslation("pages/setup");
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    if (index === 3) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  }, [index, setBtnDisabled]);

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
    <>
      <SettingTitle title={t("themeContent.title")} />
      <div className="mt-[24px] flex flex-col items-center gap-[17px]">
        <SegmentedControlBar segments={themes} setIndex={setIndex} />
        {themes[index].content}
        <div className="text-13p leading-[16px]">
          {themes[index].description}
        </div>
      </div>
    </>
  );
}

export default ThemeContent;
