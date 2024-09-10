export interface SplitViewProps {
  primary: "left" | "right";
  leftPane: React.ReactNode;
  rightPane?: React.ReactNode;
}

export default function SplitView({ leftPane, rightPane }: SplitViewProps) {
  return (
    <div className="relative flex">
      <div className="sticky top-0 h-screen basis-2/6 overflow-auto scroll-auto">
        {leftPane}
      </div>
      <div className="min-h-screen grow">{rightPane}</div>
    </div>
  );
}
