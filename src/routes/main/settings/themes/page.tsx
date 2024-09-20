import SettingTopBar from "@/components/SettingTopBar.tsx";
import SegmentedControlBar from "@/components/SegmentedControlBar.tsx";
import SegmentBoard from "@/components/SegmentBoard.tsx";
import { useState } from "react";
import { Button } from "konsta/react";
import { useTranslation } from "react-i18next";

export function Component() {
  const { t } = useTranslation("pages/settings");
  const [index, setIndex] = useState(0);
  const themes = [
    {
      title: t("themes.fruit.name"),
      content: <SegmentBoard big />,
      description: t("themes.fruit.description"),
    },
    {
      title: t("themes.chocolate.name"),
      content: <SegmentBoard big />,
      description: t("themes.chocolate.description"),
    },
    {
      title: t("themes.navy.name"),
      content: <SegmentBoard big />,
      description: t("themes.navy.description"),
    },
    {
      title: t("themes.custom.name"),
      content: (
        <div>
          <Button className="mt-[60px] rounded-[12px] px-[20px] py-[21px]">
            {t("themes.custom.upload")}
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title={t("themes.title")} />
      <div className="flex w-full flex-col items-center gap-[20px] px-[140px] pt-[32px]">
        <SegmentedControlBar segments={themes} setIndex={setIndex} flexible />
        {themes[index].content}
        <div className="text-16p leading-[18px]">
          {themes[index].description}
        </div>
      </div>
    </div>
  );
}

Component.displayName = "ThemesSettingPage";
