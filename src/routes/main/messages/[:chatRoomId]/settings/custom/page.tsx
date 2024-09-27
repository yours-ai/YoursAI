import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { useParams } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme.ts";

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

Component.displayName = "ConversationCustomSettingPage";
