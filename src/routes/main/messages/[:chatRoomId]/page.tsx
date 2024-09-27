import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { useParams } from "react-router-dom";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";
import { useTheme } from "@/hooks/useTheme.ts";

export function Component() {
  const { messageRoomId } = useParams();
  useRightPrimaryPage();
  const theme = useTheme();
  if (!theme) return null;
  const {
    components: { MessageRoom },
  } = theme;

  return <MessageRoom messageRoomId={messageRoomId} />;
}

Component.displayName = "ChatroomPage";

export const ErrorBoundary = DefaultErrorBoundary;
