import { Outlet, useOutletContext } from "react-router-dom";
import SplitViewPage from "@/routes/main/SplitViewPage.tsx";
import { useLeftPrimaryPage } from "@/routes/main/hooks.ts";
import FriendsList from "@/routes/main/friends/FriendsList.tsx";

export interface Character {
  name: string;
  image: string;
  description: string;
}

const characters = [
  {
    name: "세나",
    image: "/sena.png",
    description: "오늘도 꽃처럼 빛나는 하루🌸",
  },
  {
    name: "김지아",
    image: "/jia.png",
    description: "생각이 많아지는 날, 잠시 멍하니...🙃",
  },
  {
    name: "애린",
    image: "/aerin.jpg",
    description: "사천짜파게티가 땡기는 날🤤",
  },
  {
    name: "유이",
    image: "/yui.jpg",
    description: "수업째고 너 보러왔어",
  },
];

export function Component() {
  useLeftPrimaryPage("/main/friends");
  const outletContext = useOutletContext();

  return (
    <SplitViewPage
      leftPane={
        <div>
          <div className="mb-[20px] mt-10 pl-4 text-34p font-bold">친구</div>
          <div className="w-full px-4">
            {characters.length > 0 ? (
              <FriendsList characters={characters} />
            ) : (
              <div className="mt-[50px] w-full text-center text-16p">
                <span className="text-black/50">아직 친구가 없습니다...</span>🥲
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
