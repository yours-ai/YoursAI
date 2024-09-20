import React, { ComponentProps, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlacesType, Tooltip as ReactTooltip } from "react-tooltip";
import "./tooltip.css";

export interface Props
  extends Omit<
    ComponentProps<typeof ReactTooltip>,
    "id" | "className" | "content" | "children" | "place"
  > {
  place?: PlacesType;
  children: React.ReactNode;
  content: React.ReactNode;
  size?: "sm" | "lg";
}

export default function Tooltip({
  children,
  content,
  place,
  size = "sm",
  ...props
}: Props) {
  const [uuid] = useState(() => uuidv4());

  return (
    <div className="macos-tooltip-container">
      <a data-tooltip-id={uuid} data-tooltip-place={place}>
        {children}
      </a>
      <ReactTooltip
        id={uuid}
        className={`macos-tooltip ${size}`}
        opacity={0.9}
        {...props}
      >
        {content}
      </ReactTooltip>
    </div>
  );
}
