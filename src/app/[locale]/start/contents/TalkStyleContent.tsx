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
import { useTranslations } from "next-intl";

const Tooltip = ({ content }: { content: React.ReactNode }) => {
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
  const hover = useHover(context, { delay: { open: 0, close: 0 } });
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
          {content}
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
  const t = useTranslations("start/content/talkStyleContent");
  const richText = (key: string) => {
    return t.rich(key, {
      p: (chunk) => <p>{chunk}</p>,
      br: () => <br></br>,
    });
  };
  console.log(richText("info"));
  const [index, setIndex] = useState<number>(0);
  useEffect(() => {
    if (index === 3) {
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
    }
  }, [index, setBtnDisabled]);

  const CustomStyleFormRows = [
    {
      rowTitle: t("styles.custom.styleFile.name"),
      rowDescription: t("styles.custom.styleFile.description"),
      action: <SetupControlButton upload />,
    },
    {
      rowTitle: t("styles.custom.moduleFile.name"),
      rowDescription: t("styles.custom.moduleFile.description"),
      action: <SetupControlButton upload />,
    },
  ];

  const styles = [
    {
      title: t("styles.balanced.name"),
      content: <SegmentBoard />,
      description: richText("styles.balanced.description"),
    },
    {
      title: t("styles.novel.name"),
      content: <SegmentBoard />,
      description: richText("styles.novel.description"),
    },
    {
      title: t("styles.realistic.name"),
      content: <SegmentBoard />,
      description: richText("styles.realistic.description"),
    },
    {
      title: t("styles.custom.name"),
      content: (
        <div className="mt-[14px]">
          <SetupForm setupFormRows={CustomStyleFormRows} />
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="relative z-40 flex items-center">
        <SettingTitle title={t("title")} />
        <div className="absolute bottom-[8px] right-[-30px]">
          <Tooltip content={richText("info")} />
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
