import SettingTopBar from "@/components/SettingTopBar.tsx";
import ListContainer from "@/components/ListContainer.tsx";
import { ListItem } from "konsta/react";

export function Component() {
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title="대화 설정" />
      <div className="flex w-full flex-col gap-[20px] px-[190px]">
        <div className="mt-[20px] pl-[15px] text-16p leading-[22px] text-black/50">
          글로벌 기본 설정입니다. 캐릭터나 채팅방에서의 설정에 의해 덮혀쓰일 수
          있습니다.
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
              title={<p className="text-red">모두 초기값으로 설정하기</p>}
              link
            />
          </ListContainer>
        </div>
      </div>
    </div>
  );
}

Component.displayName = "ConversationSettingPage";
