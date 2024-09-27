import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { useParams } from "react-router-dom";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";
import { useTheme } from "@/hooks/useTheme.ts";

export function Component() {
  const { chatRoomId } = useParams();
  useRightPrimaryPage();
  const theme = useTheme();
  if (!theme) return null;
  const {
    components: { ChatRoom },
  } = theme;

  return <ChatRoom chatRoomId={chatRoomId} />;
}

Component.displayName = "ChatroomPage";

export const ErrorBoundary = DefaultErrorBoundary;
