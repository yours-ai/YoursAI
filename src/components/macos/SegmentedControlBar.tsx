import React, { SetStateAction } from "react";
import "./segmentedControlBarButton.css";

export interface Option<T> {
  value: T;
  label: React.ReactNode;
}

export interface SegmentedControlBarProps<T> {
  options: Option<T>[];
  value: T;
  onChange: React.Dispatch<SetStateAction<T>>;
  flexible?: boolean;
}

export default function SegmentedControlBar<T>({
  options,
  value,
  onChange,
  flexible,
}: SegmentedControlBarProps<T>) {
  return (
    <div
      className={`flex w-full justify-around rounded-[6px] p-px ${flexible ? "h-[28px] max-w-[900px]" : "h-[22px] max-w-[400px]"}`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.01)",
        boxShadow:
          "inset 0px 0px 2px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 2px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      {options.map((option) => (
        <div
          key={String(option.value)}
          onClick={() => {
            onChange(option.value);
          }}
          className={`${flexible ? "text-14p" : "text-13p"} relative flex size-full items-center justify-center rounded-[5px] leading-[16px] ${value === option.value ? "selected-button" : "unselected-button"} cursor-pointer select-none`}
          style={{ zIndex: value === option.value ? 10 : 1 }}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
}
