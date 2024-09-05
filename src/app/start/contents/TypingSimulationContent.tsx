"use client";

import React, { useState } from "react";
import SettingTitle from "@/components/SettingTitle";
import SegmentedControlBar from "@/components/SegmentedControlBar";
import SegmentBoard from "@/components/SegmentBoard";

const typingSimulationChoices = [
  {
    title: "네 (권장)",
    content: <SegmentBoard />,
    description: (
      <p>
        실제 사람이 작성하는 것처럼 캐릭터의 대화를 보여줍니다.
        <br />
        읽기 편하고 현실감이 있습니다.
      </p>
    ),
  },
  {
    title: "아니요",
    content: <SegmentBoard />,
    description: <p>딱딱하게 띡 옵니다.</p>,
  },
];

function TypingSimulationContent() {
  const [index, setIndex] = useState<number>(0);

  return (
    <>
      <SettingTitle title="타이핑 시뮬레이션을 사용할까요?" />
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
