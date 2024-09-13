import { Link, Outlet, useOutletContext } from "react-router-dom";
import SplitViewPage from "@/routes/main/SplitViewPage.tsx";
import { useLeftPrimaryPage } from "@/routes/main/hooks.ts";
import DefaultErrorBoundary from "@/components/DefaultErrorBoundary.tsx";

export function Component() {
  useLeftPrimaryPage("/main/settings");
  const outletContext = useOutletContext();

  return (
    <SplitViewPage
      leftPane={
        <div>
          <div className="mt-10 pl-4 text-2xl font-bold">설정</div>
          <Link to="/main/settings/1">세팅 1</Link>
        </div>
      }
      rightPane={<Outlet context={outletContext} />}
    />
  );
}

Component.displayName = "SettingsPage";

export const ErrorBoundary = DefaultErrorBoundary;
