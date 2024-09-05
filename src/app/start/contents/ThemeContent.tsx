"use client";

import React, { SetStateAction, useEffect, useState } from "react";
import SettingTitle from "@/components/SettingTitle";
import SegmentedControlBar from "@/components/SegmentedControlBar";
import SegmentBoard from "@/components/SegmentBoard";
import SetupControlButton from "@/components/SetupControlButton";

const themes = [
  {
    title: '"그" 과일 테마',
    content: <SegmentBoard />,
    description: "가장 기본적이고, 깔끔한 느낌",
  },
  {
    title: "초콜릿 테마",
    content: <SegmentBoard />,
    description: "설빙 오레오 초코빙수",
  },
  { title: "Navy 테마", content: <SegmentBoard />, description: "꼰대선배님" },
  {
    title: "커스텀 테마",
    content: (
      <div className="flex h-[223px] w-[421px] items-center justify-center">
        <SetupControlButton custom="커스텀 테마 파일 업로드하기" upload />
      </div>
    ),
  },
];

function ThemeContent({
  setBtnDisabled,
}: {
  setBtnDisabled: React.Dispatch<SetStateAction<boolean>>;
}) {
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    if (index === 3) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  }, [index, setBtnDisabled]);

  return (
    <>
      <SettingTitle title="테마 고르기" />
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
