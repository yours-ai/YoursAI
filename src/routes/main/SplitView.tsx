import { use100vh } from "react-div-100vh";

export interface SplitViewProps {
  primary: "left" | "right";
  leftPane?: React.ReactNode;
  leftNav?: React.ReactNode;
  leftNavHeight?: number;
  rightPane?: React.ReactNode;
}

export default function SplitView({
  leftPane,
  leftNav,
  leftNavHeight = 58,
  rightPane,
  primary,
}: SplitViewProps) {
  const height = use100vh();

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
          >
            {leftPane}
          </div>
          <div className="absolute inset-x-0 bottom-0">{leftNav}</div>
        </div>
      </div>
      <div
        className={`min-h-screen grow ${primary === "right" ? "" : "hidden tablet:block"}`}
      >
        {rightPane}
      </div>
    </div>
  );
}
