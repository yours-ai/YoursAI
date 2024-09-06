"use client";

import React, { SetStateAction, useEffect, useState } from "react";
import SettingTitle from "@/components/SettingTitle";
import SegmentedControlBar from "@/components/SegmentedControlBar";
import SegmentBoard from "@/components/SegmentBoard";
import SetupControlButton from "@/components/SetupControlButton";
import { useTranslations } from "next-intl";

export interface SetupContentProps {
  setBtnDisabled: React.Dispatch<SetStateAction<boolean>>;
}

function ThemeContent({ setBtnDisabled }: SetupContentProps) {
  const t = useTranslations("start/content/themeContent");
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
      title: t("themes.fruit.name"),
      content: <SegmentBoard />,
      description: t("themes.fruit.description"),
    },
    {
      title: t("themes.chocolate.name"),
      content: <SegmentBoard />,
      description: t("themes.chocolate.description"),
    },
    {
      title: t("themes.navy.name"),
      content: <SegmentBoard />,
      description: t("themes.navy.description"),
    },
    {
      title: t("themes.custom.name"),
      content: (
        <div className="flex h-[223px] w-[421px] items-center justify-center">
          <SetupControlButton custom={t("themes.custom.upload")} upload />
        </div>
      ),
    },
  ];

  return (
    <>
      <SettingTitle title={t("title")} />
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
