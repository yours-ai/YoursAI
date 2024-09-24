import { Outlet, useOutletContext } from "react-router-dom";
import SplitViewPage from "@/routes/main/SplitViewPage.tsx";
import { useLeftPrimaryPage } from "@/routes/main/hooks.ts";
import FriendsList from "@/routes/main/friends/FriendsList.tsx";
import TabTitle from "@/components/TabTitle.tsx";
import TabAction from "@/components/TabAction.tsx";
import { useTranslation } from "react-i18next";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";

export interface Character {
  name: string;
  slug: string;
  image: string;
  description: string;
}

const characters = [
  {
    name: "세나",
    slug: "sena",
    image: "/sena.png",
    description: "오늘도 꽃처럼 빛나는 하루🌸",
  },
  {
    name: "김지아",
    slug: "jia",
    image: "/jia.png",
    description: "생각이 많아지는 날, 잠시 멍하니...🙃",
  },
  {
    name: "애린",
    slug: "aerin",
    image: "/aerin.jpg",
    description: "사천짜파게티가 땡기는 날🤤",
  },
  {
    name: "유이",
    slug: "yui",
    image: "/yui.jpg",
    description: "수업째고 너 보러왔어",
  },
  {
    name: "세나",
    slug: "sena",
    image: "/sena.png",
    description: "오늘도 꽃처럼 빛나는 하루🌸",
  },
  {
    name: "김지아",
    slug: "jia",
    image: "/jia.png",
    description: "생각이 많아지는 날, 잠시 멍하니...🙃",
  },
  {
    name: "애린",
    slug: "aerin",
    image: "/aerin.jpg",
    description: "사천짜파게티가 땡기는 날🤤",
  },
  {
    name: "유이",
    slug: "yui",
    image: "/yui.jpg",
    description: "수업째고 너 보러왔어",
  },
];

export function Component() {
  useLeftPrimaryPage("/main/friends");
  const outletContext = useOutletContext();
  const { t } = useTranslation("pages/friends");

  return (
    <SplitViewPage
      leftPane={
        <div>
          <TabAction action={t("tabAction.title")} />
          <TabTitle title={t("tabTitle")} />
          <div className="mt-[12px] w-full px-4">
            {characters.length > 0 ? (
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
