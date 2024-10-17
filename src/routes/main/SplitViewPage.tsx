import { useOutletContext } from "react-router-dom";
import { createPortal } from "react-dom";
import { OutletContext } from "@/routes/main/SplitView.tsx";

export interface Props {
  leftPane?: React.ReactNode;
  rightPane?: React.ReactNode;
}

export default function SplitViewPage({ leftPane, rightPane }: Props) {
  const { leftPaneDiv } = useOutletContext<OutletContext>();
  return (
    <>
      {leftPaneDiv.current && createPortal(leftPane, leftPaneDiv.current)}
      {rightPane}
    </>
  );
}
