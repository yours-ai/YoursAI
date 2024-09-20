import { Link, Outlet, useOutletContext } from "react-router-dom";
import SplitViewPage from "@/routes/main/SplitViewPage.tsx";
import { useLeftPrimaryPage } from "@/routes/main/hooks.ts";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";

export function Component() {
  useLeftPrimaryPage("/main/messages");
  const outletContext = useOutletContext();

  return (
    <SplitViewPage
      leftPane={
        <div>
          <div className="mt-10 pl-4 text-2xl font-bold">메시지</div>
          <Link to="/main/messages/1">메시지 1</Link>
        </div>
      }
      rightPane={<Outlet context={outletContext} />}
    />
  );
}

Component.displayName = "MessagesPage";

export const ErrorBoundary = DefaultErrorBoundary;
