import React from "react";

export interface Props {
  content: React.ReactNode;
  leftActions?: React.ReactNode;
  rightActions: React.ReactNode;
  extra?: React.ReactNode;
}

export default function Sheet({
  content,
  leftActions,
  rightActions,
  extra,
}: Props) {
  return (
    <div
      className="size-full h-dvh bg-menuBackground tablet:h-[500px] tablet:w-[700px] tablet:rounded-[10px]"
      // style={{
      //   padding:
      //     "env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)",
      // }}
    >
      <div className="relative flex size-full flex-col items-center justify-between px-[9px] pt-[9px]">
        {extra}
        <div className="flex w-full flex-col items-center">{content}</div>
        <div className="flex w-full items-center justify-between border-t border-black/10 py-3">
          <div className="flex gap-[10px]">{leftActions}</div>
          <div className="flex gap-[10px]">{rightActions}</div>
        </div>
      </div>
    </div>
  );
}
