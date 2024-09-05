"use client";

import React, { SetStateAction, useState } from "react";
import "./segmentedControlBarButton.css";

export interface Segment {
  title: string;
  content: React.ReactNode;
  description?: string | React.ReactNode;
}

export interface SegmentedControlBarProps {
  segments: Segment[];
  setIndex: React.Dispatch<SetStateAction<number>>;
}

function SegmentedControlBar({ segments, setIndex }: SegmentedControlBarProps) {
  const [selected, setSelected] = useState<number>(0);
  return (
    <div
      className="flex h-[22px] w-[400px] justify-around rounded-[6px] p-px"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.01)",
        boxShadow:
          "inset 0px 0px 2px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 2px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      {segments.map((segment, index) => (
        <div
          key={index}
          onClick={() => {
            setSelected(index);
            setIndex(index);
          }}
          className={`relative flex size-full items-center justify-center rounded-[5px] text-13p leading-[16px] ${index === selected ? "selected-button" : index !== 0 ? "unselected-button" : ""} cursor-pointer duration-200`}
          style={{ zIndex: selected === index ? 10 : 1 }}
        >
          {segment.title}
        </div>
      ))}
    </div>
  );
}

export default SegmentedControlBar;
