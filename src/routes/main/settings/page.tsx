import { Outlet, useOutletContext } from "react-router-dom";
import SplitViewPage from "@/routes/main/SplitViewPage.tsx";
import { useLeftPrimaryPage } from "@/routes/main/hooks.ts";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";
import { useTheme } from "@/hooks/useTheme.ts";

export function Component() {
  useLeftPrimaryPage("/main/settings");
  const outletContext = useOutletContext();
  const theme = useTheme();
  if (!theme) return null;
  const {
    components: { SettingList },
  } = theme;

  return (
    <SplitViewPage
      leftPane={<SettingList />}
      rightPane={<Outlet context={outletContext} />}
    />
  );
}

Component.displayName = "SettingsPage";

export const ErrorBoundary = DefaultErrorBoundary;
