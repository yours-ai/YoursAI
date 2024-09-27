import { Outlet, useOutletContext } from "react-router-dom";
import SplitViewPage from "@/routes/main/SplitViewPage.tsx";
import { useLeftPrimaryPage } from "@/routes/main/hooks.ts";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";
import { useTheme } from "@/hooks/useTheme.ts";

export function Component() {
  useLeftPrimaryPage("/main/friends");
  const outletContext = useOutletContext();
  const theme = useTheme();
  if (!theme) return null;
  const {
    components: { FriendList },
  } = theme;

  return (
    <SplitViewPage
      leftPane={<FriendList />}
      rightPane={<Outlet context={outletContext} />}
    />
  );
}

Component.displayName = "FriendsPage";

export const ErrorBoundary = DefaultErrorBoundary;
