import { Outlet, useOutletContext } from "react-router-dom";
import SplitViewPage from "@/routes/main/SplitViewPage.tsx";
import { useLeftPrimaryPage } from "@/routes/main/hooks.ts";
import FriendsList from "@/routes/main/friends/FriendsList.tsx";
import TabTitle from "@/components/common/TabTitle.tsx";
import TabAction from "@/components/common/TabAction.tsx";
import { useTranslation } from "react-i18next";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";
import { useLiveQuery } from "dexie-react-hooks";
import { useDb } from "@/contexts/DbContext.ts";

export function Component() {
  useLeftPrimaryPage("/main/friends");
  const db = useDb();
  const outletContext = useOutletContext();
  const { t } = useTranslation("pages/friends");
  const characters = useLiveQuery(async () => {
    const characters = await db.characters.toArray();
    return characters;
  }, []);

  return (
    <SplitViewPage
      leftPane={
        <div>
          <TabAction action={t("tabAction.title")} addCharacter />
          <TabTitle title={t("tabTitle")} />
          <div className="mt-[12px] w-full px-4">
            {characters && characters.length > 0 ? (
              <FriendsList characters={characters} />
            ) : (
              <div className="mt-[50px] w-full text-center text-16p">
                <span className="text-black/50">{t("empty")}</span>
                🥲
              </div>
            )}
          </div>
        </div>
      }
      rightPane={<Outlet context={outletContext} />}
    />
  );
}

Component.displayName = "FriendsPage";

export const ErrorBoundary = DefaultErrorBoundary;
