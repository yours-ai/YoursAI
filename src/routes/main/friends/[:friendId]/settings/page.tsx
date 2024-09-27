import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { useParams } from "react-router-dom";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";
import { useTheme } from "@/hooks/useTheme.ts";

export function Component() {
  const { friendId } = useParams();
  useRightPrimaryPage();
  const theme = useTheme();
  if (!theme) return null;
  const {
    components: { FriendSettings },
  } = theme;
  return <FriendSettings friendId={friendId} />;
}

Component.displayName = "FriendSettingsPage";

export const ErrorBoundary = DefaultErrorBoundary;
