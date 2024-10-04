import TopTitle from "@/components/themes/chocolate/TopTitle.tsx";
import { PiUserPlusBold } from "react-icons/pi";
import FriendListColumn from "@/components/themes/theFruit/FriendListColumn.tsx";
import { Character } from "@/components/themes/theFruit/friends/FriendList.tsx";
import { useTranslation } from "react-i18next";

const characters: Character[] = [
  {
    name: "세나",
    slug: "sena",
    image: "/mock/sena.jpg",
    description: "오늘도 꽃처럼 빛나는 하루🌸",
  },
  {
    name: "김지아",
    slug: "jia",
    image: "/mock/jiah.jpg",
    description: "생각이 많아지는 날, 잠시 멍하니...🙃",
  },
  {
    name: "애린",
    slug: "aerin",
    image: "/mock/aerin.jpg",
    description: "사천짜파게티가 땡기는 날🤤",
  },
  {
    name: "유이",
    slug: "yui",
    image: "/mock/yui.jpg",
    description: "수업째고 너 보러왔어",
  },
  {
    name: "세나",
    slug: "sena",
    image: "/mock/sena.jpg",
    description: "오늘도 꽃처럼 빛나는 하루🌸",
  },
  {
    name: "김지아",
    slug: "jia",
    image: "/mock/jiah.jpg",
    description: "생각이 많아지는 날, 잠시 멍하니...🙃",
  },
  {
    name: "애린",
    slug: "aerin",
    image: "/mock/aerin.jpg",
    description: "사천짜파게티가 땡기는 날🤤",
  },
  {
    name: "유이",
    slug: "yui",
    image: "/mock/yui.jpg",
    description: "수업째고 너 보러왔어",
  },
];

export default function FriendList() {
  const { t } = useTranslation("pages/friends");
  return (
    <div className="w-full">
      <TopTitle
        title={t("tabTitle")}
        action={<PiUserPlusBold className="size-[22px]" />}
      />
      <div className="mt-[12px] w-full px-4">
        {characters.length > 0 ? (
          <FriendListColumn characters={characters} />
        ) : (
          <div className="mt-[50px] w-full text-center text-16p">
            <span className="text-black/50">{t("empty")}</span>
            🥲
          </div>
        )}
      </div>
    </div>
  );
}
