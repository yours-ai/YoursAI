import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { useTheme } from "@/hooks/useTheme.ts";
import { useParams } from "react-router-dom";

export function Component() {
  const { chatRoomId } = useParams();
  useRightPrimaryPage();
  const theme = useTheme();
  if (!theme) return null;
  const {
    components: { ChatRoomSettings },
  } = theme;

  return <ChatRoomSettings chatRoomId={chatRoomId} />;
}

Component.displayName = "ChatRoomSettingsPage";
