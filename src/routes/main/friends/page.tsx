import SplitView from "../SplitView.tsx";
import { useTheme } from "@/hooks/useTheme.ts";
import { Outlet } from "react-router-dom";

export function Component() {
  const {
    components: { TabNavigation },
  } = useTheme();
  return (
    <SplitView
      primary="left"
      leftNav={<TabNavigation />}
      leftPane={<div className="mt-10 pl-4 text-2xl font-bold">친구</div>}
      rightPane={<Outlet />}
    />
  );
}

Component.displayName = "FriendsPage";
