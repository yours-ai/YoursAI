import { Outlet, useOutletContext } from "react-router-dom";
import SplitViewPage from "@/routes/main/SplitViewPage.tsx";
import { useLeftPrimaryPage } from "@/routes/main/hooks.ts";
import DefaultErrorBoundary from "@/components/DefaultErrorBoundary.tsx";
import { useTheme } from "@/hooks/useTheme.ts";

export function Component() {
  useLeftPrimaryPage("/main/messages");
  const outletContext = useOutletContext();
  const theme = useTheme();
  if (!theme) return null;
  const {
    components: { MessageList },
  } = theme;

  return (
    <SplitViewPage
      leftPane={<MessageList />}
      rightPane={<Outlet context={outletContext} />}
    />
  );
}

Component.displayName = "MessagesPage";

export const ErrorBoundary = DefaultErrorBoundary;
