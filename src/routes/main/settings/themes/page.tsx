import SettingTopBar from "@/components/SettingTopBar.tsx";
import SegmentedControlBar from "@/components/SegmentedControlBar.tsx";
import SegmentBoard from "@/components/SegmentBoard.tsx";
import { useState } from "react";
import { Button } from "konsta/react";

export function Component() {
  const [index, setIndex] = useState(0);
  const themes = [
    {
      title: '"그" 과일 테마',
      content: <SegmentBoard big />,
      description: "가장 기본적이고, 깔끔한 느낌",
    },
    {
      title: "초콜릿 테마",
      content: <SegmentBoard big />,
      description: "설빙 오레오 초코 빙수",
    },
    {
      title: "Navy 테마",
      content: <SegmentBoard big />,
      description: "선배님 멋져용",
    },
    {
      title: "커스텀",
      content: (
        <div>
          <Button className="mt-[60px] rounded-[12px] px-[20px] py-[21px]">
            커스텀 테마 파일 업로드하기
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title="테마" />
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
