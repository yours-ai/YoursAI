import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import DefaultErrorBoundary from "@/components/DefaultErrorBoundary.tsx";
import { useTheme } from "@/hooks/useTheme.ts";
import { useParams } from "react-router-dom";

export function Component() {
  const { messageRoomId } = useParams();
  useRightPrimaryPage();
  const theme = useTheme();
  if (!theme) return null;
  const {
    components: { MessageRoomSettingsCustom },
  } = theme;

  return <MessageRoomSettingsCustom messageRoomId={messageRoomId} />;
}

Component.displayName = "MessageRoomSettingsCustomPage";

export const ErrorBoundary = DefaultErrorBoundary;
