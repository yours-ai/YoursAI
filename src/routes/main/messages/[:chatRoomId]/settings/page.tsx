import { PiCaretLeftBold } from "react-icons/pi";
import { ListItem, Toggle } from "konsta/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ListContainer from "@/components/ListContainer.tsx";

export function Component() {
  const [checked, setChecked] = useState(false);
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
          세나와 7월 11일 오전 6:48에 시작한 대화
        </span>
      </div>
      <div className="flex size-full flex-col gap-[20px] px-[190px] pt-[32px]">
        <ListContainer>
          <Link to="custom">
            <ListItem title="대화 설정 커스텀" link />
          </Link>
          <ListItem
            title="Item 2"
            after={
              <Toggle
                className="-my-1 k-color-green"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            }
          />
        </ListContainer>
        <ListContainer>
          <ListItem title={<p className="text-red">이 대화 지우기</p>} link />
        </ListContainer>
      </div>
    </div>
  );
}

Component.displayName = "ChatRoomSettingsPage";
