import { PiCaretLeftBold } from "react-icons/pi";
import Switch from "react-ios-switch";
import GroupedList from "@/components/GroupedList.tsx";

export function Component() {
  const rows = [
    { label: "대화 설정 커스텀", link: "./", content: "caret" },
    { label: "탈옥 토글", content: <Switch checked={true} /> },
  ];
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
        <GroupedList rows={rows} />
        <GroupedList
          rows={[
            {
              label: <p className="text-red">이 대화 지우기</p>,
              link: "./",
              content: "caret",
            },
          ]}
        />
      </div>
    </div>
  );
}

Component.displayName = "ChatRoomSettingsPage";
