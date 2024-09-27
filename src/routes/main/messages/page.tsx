import { Outlet, useOutletContext } from "react-router-dom";
import SplitViewPage from "@/routes/main/SplitViewPage.tsx";
import { useLeftPrimaryPage } from "@/routes/main/hooks.ts";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";
import { useTheme } from "@/hooks/useTheme.ts";

export function Component() {
  useLeftPrimaryPage("/main/messages");
  const outletContext = useOutletContext();
  const theme = useTheme();
  if (!theme) return null;
  const {
    components: { ChatList },
  } = theme;

  /*
   * TODO: selectedState가 존재하고, 그걸 컨텍스토로 관리해서 messages/[:chatRoomId]/page.tsx <-> messages/page.tsx 과 소통할수있어야됨
   * main/messages/4로 들어갔을때 list에서 캐릭터가 선택되었다는 bg color 변화가 있어야됨. 근데 유저가 messages/4와 같은 방식으로 들어오진 않을거 같은데, 안해도될지도?
   */
  return (
    <SplitViewPage
      leftPane={<ChatList />}
      rightPane={<Outlet context={outletContext} />}
    />
  );
}

Component.displayName = "MessagesPage";

export const ErrorBoundary = DefaultErrorBoundary;
