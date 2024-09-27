import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { useParams } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme.ts";

export function Component() {
  const { chatRoomId } = useParams();
  useRightPrimaryPage();
  const theme = useTheme();
  if (!theme) return null;
  const {
    components: { ChatRoomSettingsCustom },
  } = theme;

  return <ChatRoomSettingsCustom chatRoomId={chatRoomId} />;
}

Component.displayName = "ConversationCustomSettingPage";
