export interface SplitViewProps {
  primary: "left" | "right";
  leftPane: React.ReactNode;
  rightPane?: React.ReactNode;
}

export default function SplitView({
  leftPane,
  rightPane,
  primary,
}: SplitViewProps) {
  return (
    <div className="relative flex">
      <div
        className={`sticky top-0 h-screen overflow-auto scroll-auto tablet:basis-2/6 desktop:basis-1/4 ${primary === "left" ? "grow tablet:grow-0" : "hidden tablet:block"}`}
      >
        {leftPane}
      </div>
      <div
        className={`min-h-screen grow ${primary === "right" ? "" : "hidden tablet:block"}`}
      >
        {rightPane}
      </div>
    </div>
  );
}
