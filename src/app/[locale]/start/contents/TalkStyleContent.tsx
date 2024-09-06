"use client";

import React, { useEffect, useRef, useState } from "react";
import SettingTitle from "@/components/SettingTitle";
import SegmentedControlBar from "@/components/SegmentedControlBar";
import SegmentBoard from "@/components/SegmentBoard";
import SetupControlButton from "@/components/SetupControlButton";
import { PiQuestionBold } from "react-icons/pi";
import {
  arrow,
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import SetupForm from "@/components/SetupForm";
import { SetupContentProps } from "@/app/[locale]/start/contents/ThemeContent";

const CustomStyleFormRows = [
  {
    rowTitle: "대화 스타일 파일",
    rowDescription: "Risu 스타일의 프롬프트 템플릿도 지원합니다.",
    action: <SetupControlButton upload />,
  },
  {
    rowTitle: "(선택) 모듈 파일",
    rowDescription: "Risu 스타일의 모듈 파일도 지원합니다.",
    action: <SetupControlButton upload />,
  },
];

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
      <div className="mt-[14px]">
        <SetupForm setupFormRows={CustomStyleFormRows} />
      </div>
    ),
  },
];

const Tooltip = () => {
  const [isOpen, setIsOpen] = useState(false);
  const arrowRef = useRef(null);
  const { refs, floatingStyles, context, strategy, x, y, middlewareData } =
    useFloating({
      open: isOpen,
      onOpenChange: setIsOpen,
      middleware: [
        offset(15),
        flip(),
        shift(),
        arrow({ element: arrowRef, padding: 10 }),
      ],
      whileElementsMounted: autoUpdate,
      placement: "top-start",
    });
  const hover = useHover(context, { delay: { open: 200, close: 0 } });
  const dismiss = useDismiss(context);
  const role = useRole(context, {
    role: "tooltip",
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    dismiss,
    role,
  ]);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        <PiQuestionBold className="text-black/50" />
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          className={`rounded-[10px] bg-white px-[10px] py-[9px] text-13p leading-[16px]`}
          style={{
            width: "max-content",
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
            zIndex: 10,
            boxShadow:
              "0px 8px 40px 0px rgba(0, 0, 0, 0.25), 0px 0px 3px 0px rgba(0, 0, 0, 0.55), 0px 0px 3px 0px rgba(255, 255, 255, 0.10)",
          }}
          {...getFloatingProps()}
        >
          RisuAi에 익숙하다면,
          <br />
          기존의 프롬프트 템플릿과 같습니다.
          <div
            ref={arrowRef}
            style={{
              position: "absolute",
              width: "12px",
              height: "12px",
              background: "white",
              transform: "rotate(45deg)",
              top: "84%",
              zIndex: 2,
              left: middlewareData.arrow?.x ?? 0,
              marginLeft: "1px",
              borderRadius: "2px",
            }}
          />
        </div>
      )}
    </>
  );
};

function TalkStyleContent({ setBtnDisabled }: SetupContentProps) {
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
      <div className="relative z-40 flex items-center">
        <SettingTitle title="대화 스타일 고르기" />
        <div className="absolute bottom-[8px] right-[-30px]">
          <Tooltip />
        </div>
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
