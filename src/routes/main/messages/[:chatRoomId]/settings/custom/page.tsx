import { PiCaretLeftBold } from "react-icons/pi";
import { List, ListItem } from "konsta/react";

export function Component() {
  return (
    <div className="size-full bg-emptyBackground">
      <div className="relative flex w-full items-center justify-center border-b border-border py-[18px]">
        <div
          className="absolute left-[9px] cursor-pointer text-24p text-accentBlue"
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
        >
          <PiCaretLeftBold />
        </div>
        <span className="text-20p font-semibold leading-[22px]">
          세나와 7월 11일 오전 6:48에 시작한 대화 - 대화 설정 커스텀
        </span>
      </div>

      <div className="flex size-full flex-col gap-[20px] px-[190px]">
        <div className="mt-[20px] pl-[15px] text-16p leading-[22px] text-black/50">
          여기서 수정한 대화 설정은 이 대화에만 적용됩니다.
        </div>
        <List strong inset dividers className="!m-0 bg-white">
          <ListItem title="대화 스타일" link after="소설형" />
          <ListItem title="이중 번역" link after="사용" />
          <ListItem title="타이핑 시뮬레이션" link after="사용" />
          <ListItem title="내 소개" link />
        </List>
        <List strong inset className="!m-0 bg-white">
          <ListItem
            title={
              <p className="text-red">모두 기본값(캐릭터 설정)으로 설정하기</p>
            }
            link
          />
        </List>
      </div>
    </div>
  );
}

Component.displayName = "ConversationCustomSettingPage";
