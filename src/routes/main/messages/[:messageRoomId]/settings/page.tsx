import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";
import { useTheme } from "@/hooks/useTheme.ts";
import { useParams } from "react-router-dom";

export function Component() {
  const { messageRoomId } = useParams();
  useRightPrimaryPage();
  const theme = useTheme();
  if (!theme) return null;
  const {
    components: { MessageRoomSettings },
  } = theme;

  return <MessageRoomSettings messageRoomId={messageRoomId} />;
}

Component.displayName = "MessageRoomSettingsPage";

export const ErrorBoundary = DefaultErrorBoundary;
