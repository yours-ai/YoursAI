import SettingTopBar from "@/components/SettingTopBar.tsx";
import ListContainer from "@/components/ListContainer.tsx";
import { ListItem } from "konsta/react";
import { useParams } from "react-router-dom";

export function Component() {
  const { friendId } = useParams();
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title={`${friendId} 대화 설정 커스텀`} enableBack />
      <div className="flex w-full flex-col gap-[20px] px-[190px]">
        <div className="mt-[20px] pl-[15px] text-16p leading-[22px] text-black/50">
          여기서 수정한 대화 설정은 세나와의 모든 대화에 기본으로 적용됩니다.
        </div>
        <div className="flex flex-col gap-[38px]">
          <ListContainer>
            <ListItem title="대화 스타일" link after="소설형" />
            <ListItem title="이중 번역" link after="사용" />
            <ListItem title="타이핑 시뮬레이션" link after="사용" />
            <ListItem title="내 소개" link />
          </ListContainer>
          <ListContainer>
            <ListItem
              title={
                <p className="text-red">
                  모두 기본값(글로벌 설정)으로 설정하기
                </p>
              }
              link
            />
          </ListContainer>
        </div>
      </div>
    </div>
  );
}

Component.displayName = "FriendSettingsPage";
