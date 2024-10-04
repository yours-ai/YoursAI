import { useOutletContext } from "react-router-dom";
import { createPortal } from "react-dom";
import { OutletContext } from "@/routes/main/SplitView.tsx";
import { Suspense } from "react";

export interface Props {
  leftPane?: React.ReactNode;
  rightPane?: React.ReactNode;
}

export default function SplitViewPage({ leftPane, rightPane }: Props) {
  const { leftPaneDiv } = useOutletContext<OutletContext>();
  return (
    <Suspense>
      {leftPaneDiv.current && createPortal(leftPane, leftPaneDiv.current)}
      {rightPane}
    </Suspense>
  );
}
