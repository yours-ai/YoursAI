import { Outlet, useOutletContext } from "react-router-dom";
import SplitViewPage from "@/routes/main/SplitViewPage.tsx";
import { useLeftPrimaryPage } from "@/routes/main/hooks.ts";
import FriendsList from "@/routes/main/friends/FriendsList.tsx";
import TabTitle from "@/components/TabTitle.tsx";
import TabAction from "@/components/TabAction.tsx";
import { useState } from "react";
import { Button } from "konsta/react";

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
  const [fileModalOpened, setFileModalOpened] = useState<boolean>(false);

  const FileAddModal = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <div className="w-[540px] rounded-[13px] bg-white">
          <div className="flex items-center justify-between border-b border-border px-[18px] py-[11px]">
            <span
              className="cursor-pointer text-16p text-accentBlue hover:text-accentBlueHover"
              onClick={() => setFileModalOpened(false)}
            >
              취소
            </span>
            <span className="text-18p font-semibold leading-[22px]">
              캐릭터 파일로 추가
            </span>
            <span className="cursor-pointer text-16p text-accentBlue/30 hover:text-accentBlueHover">
              완료
            </span>
          </div>
          <div className="mt-[28px] flex flex-col gap-[28px] px-[46px] pb-[24px]">
            <span className="text-center text-16p leading-[16px]">
              Risu, Tavern의 Character Card (.png, .json) 포맷을 지원합니다.
            </span>
            <div className="flex justify-center">
              <Button className="h-[50px] w-[86px] rounded-[12px] duration-150 hover:bg-accentBlueHover">
                <span className="text-18p leading-[22px]">업로드</span>
              </Button>
            </div>

            <div className="flex flex-col text-14p">
              <span className="font-bold">
                어디서 캐릭터 파일을 다운 받을 수 있나요?
              </span>
              <span>
                다양한 커뮤니티에서 유저 제작 캐릭터 파일이 공유되고 있습니다.
              </span>
              <div className="flex flex-col text-accentBlue underline duration-150 ">
                <a className="hover:text-accentBlueHover" href="#">
                  아카라이브 AI 채팅 채널
                </a>
                <a className="hover:text-accentBlueHover" href="#">
                  https://aicharactercads.com
                </a>
                <a className="hover:text-accentBlueHover" href="#">
                  https://character-tavern.com/character/catalog
                </a>
                <a className="hover:text-accentBlueHover" href="#">
                  https://realm.risuai.net/
                </a>
              </div>
              <span>다운로드 받고 즐기세요!</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <SplitViewPage
        leftPane={
          <div>
            <TabAction
              action="새 캐릭터 추가"
              setFileModalOpened={setFileModalOpened}
            />
            <TabTitle title="친구" />
            <div className="mt-[12px] w-full px-4">
              {characters.length > 0 ? (
                <FriendsList characters={characters} />
              ) : (
                <div className="mt-[50px] w-full text-center text-16p">
                  <span className="text-black/50">아직 친구가 없습니다...</span>
                  🥲
                </div>
              )}
            </div>
          </div>
        }
        rightPane={<Outlet context={outletContext} />}
      />
      {fileModalOpened ? <FileAddModal /> : null}
    </>
  );
}

Component.displayName = "FriendsPage";
