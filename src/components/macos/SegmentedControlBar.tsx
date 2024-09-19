import React, { SetStateAction } from "react";
import "./segmentedControlBarButton.css";

export interface Option<T extends React.Key> {
  value: T;
  label: string;
}

export interface SegmentedControlBarProps<T extends React.Key> {
  options: Option<T>[];
  value: T;
  onChange: React.Dispatch<SetStateAction<T>>;
}

export default function SegmentedControlBar<T extends React.Key>({
  options,
  value,
  onChange,
}: SegmentedControlBarProps<T>) {
  return (
    <div
      className="flex h-[22px] w-full max-w-[400px] justify-around rounded-[6px] p-px"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.01)",
        boxShadow:
          "inset 0px 0px 2px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 0px 2px 0px rgba(0, 0, 0, 0.05)",
      }}
    >
      {options.map((option) => (
        <div
          key={option.value}
          onClick={() => {
            onChange(option.value);
          }}
          className={`relative flex size-full items-center justify-center rounded-[5px] text-13p leading-[16px] ${value === option.value ? "selected-button" : "unselected-button"} cursor-pointer select-none duration-200`}
          style={{ zIndex: value === option.value ? 10 : 1 }}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
}
