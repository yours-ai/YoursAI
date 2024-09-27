import { use100vh } from "react-div-100vh";
import { Outlet } from "react-router-dom";
import { useRef, useState } from "react";
import { useTheme } from "@/hooks/useTheme.ts";

export interface SplitViewProps {
  leftNav?: React.ReactNode;
  leftNavHeight?: number;
}

export interface OutletContext {
  leftPaneDiv: React.RefObject<HTMLDivElement>;
  primary: "left" | "right";
  setPrimary: (primary: "left" | "right") => void;
}

export default function SplitView({
  leftNav,
  leftNavHeight = 58,
}: SplitViewProps) {
  const height = use100vh();
  const leftPaneDiv = useRef<HTMLDivElement>(null);
  const [primary, setPrimary] = useState<"left" | "right">("left");
  const theme = useTheme();

  if (!theme) return null;

  const {
    components: { GlobalModal },
  } = theme;

  return (
    <>
      <div className="relative flex">
        <div
          className={`border-border tablet:basis-2/6 desktop:basis-1/4 sticky top-0 border-r ${primary === "left" ? "tablet:grow-0 grow" : "tablet:block hidden"}`}
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
          className={`min-h-screen grow ${primary === "right" ? "" : "tablet:block hidden"}`}
        >
          <Outlet context={{ leftPaneDiv, primary, setPrimary }} />
        </div>
      </div>

      <GlobalModal />
    </>
  );
}
