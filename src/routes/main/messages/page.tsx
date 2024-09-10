import { Outlet } from "react-router-dom";
import SplitViewPage from "@/routes/main/SplitViewPage.tsx";

export function Component() {
  return (
    <SplitViewPage
      leftPane={<div className="mt-10 pl-4 text-2xl font-bold">메시지</div>}
      rightPane={<Outlet />}
    />
  );
}

Component.displayName = "MessagesPage";
