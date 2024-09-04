"use client";

import React, { useState } from "react";
import SettingTitle from "@/components/SettingTitle";
import SegmentedControlBar from "@/components/SegmentedControlBar";
import SegmentBoard from "@/components/SegmentBoard";
import SetupControlButton from "@/components/SetupControlButton";
import { PiQuestionBold } from "react-icons/pi";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const styles = [
  {
    title: "밸런스 (권장)",
    content: <SegmentBoard />,
    description: (
      <p>
        캐릭터가 적절히 대화 길이를 조절합니다.
        <br />
        종종 전지적 시점에서 이야기하기도 합니다.
      </p>
    ),
  },
  {
    title: "소설형",
    content: <SegmentBoard />,
    description: (
      <p>
        당신이 짧게 이야기해도 캐릭터는 길게 이야기합니다.
        <br />
        자주 전지적 시점에서 이야기합니다.
      </p>
    ),
  },
  {
    title: "현실형",
    content: <SegmentBoard />,
    description: (
      <p>
        현실의 대화와 비슷합니다.
        <br />
        캐릭터의 속마음을 알기는 어렵습니다.
      </p>
    ),
  },
  {
    title: "커스텀",
    content: (
      <div className="flex h-[223px] w-[421px] items-center justify-center">
        <SetupControlButton custom="커스텀 테마 파일 업로드 하기" />
      </div>
    ),
  },
];

function TalkStyleContent() {
  const [index, setIndex] = useState<number>(0);
  return (
    <>
      <div className="relative z-40 flex items-center">
        <SettingTitle title="대화 스타일 고르기" />
        <Popover>
          <PopoverButton>
            <PiQuestionBold className="absolute bottom-[8px] right-[-24px] text-[15px] text-black/50" />
          </PopoverButton>
          <PopoverPanel anchor="bottom start" className="relative z-40">
            <p>기존의 프롬프트 템플릿과 같습니다</p>
          </PopoverPanel>
        </Popover>
      </div>

      <div className="mt-[24px] flex flex-col items-center gap-[17px]">
        <SegmentedControlBar segments={styles} setIndex={setIndex} />
        {styles[index].content}
        <div className="text-center text-13p leading-[16px]">
          {styles[index].description}
        </div>
      </div>
    </>
  );
}

export default TalkStyleContent;
