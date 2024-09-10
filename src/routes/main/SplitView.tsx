import { use100vh } from "react-div-100vh";
import { Outlet } from "react-router-dom";
import { useRef } from "react";

export interface SplitViewProps {
  primary: "left" | "right";
  leftNav?: React.ReactNode;
  leftNavHeight?: number;
}

export default function SplitView({
  leftNav,
  leftNavHeight = 58,
  primary,
}: SplitViewProps) {
  const height = use100vh();
  const leftPaneDiv = useRef<HTMLDivElement>(null);

  return (
    <div className="relative flex">
      <div
        className={`sticky top-0 tablet:basis-2/6 desktop:basis-1/4 ${primary === "left" ? "grow tablet:grow-0" : "hidden tablet:block"}`}
        style={{ height: height ?? undefined }}
      >
        <div className="relative size-full">
          <div
            className="absolute inset-x-0 top-0 overflow-auto"
            style={{ bottom: leftNavHeight }}
            ref={leftPaneDiv}
          />
          <div className="absolute inset-x-0 bottom-0">{leftNav}</div>
        </div>
      </div>
      <div
        className={`min-h-screen grow ${primary === "right" ? "" : "hidden tablet:block"}`}
      >
        <Outlet context={{ leftPaneDiv }} />
      </div>
    </div>
  );
}
