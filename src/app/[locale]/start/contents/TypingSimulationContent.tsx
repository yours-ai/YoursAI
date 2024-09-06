"use client";

import React, { useState } from "react";
import SettingTitle from "@/components/SettingTitle";
import SegmentedControlBar from "@/components/SegmentedControlBar";
import SegmentBoard from "@/components/SegmentBoard";
import { useTranslations } from "next-intl";

function TypingSimulationContent() {
  const t = useTranslations("start/content/typingSimulationContent");
  const richText = (key: string) => {
    return t.rich(key, {
      p: (chunk) => <p>{chunk}</p>,
      br: () => <br></br>,
    });
  };
  const [index, setIndex] = useState<number>(0);

  const typingSimulationChoices = [
    {
      title: t("choices.yes.label"),
      content: <SegmentBoard />,
      description: richText("choices.yes.description"),
    },
    {
      title: t("choices.no.label"),
      content: <SegmentBoard />,
      description: richText("choices.no.description"),
    },
  ];

  return (
    <>
      <SettingTitle title={t("title")} />
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
  );
}

export default TypingSimulationContent;
