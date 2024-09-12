import { PiCaretLeftBold } from "react-icons/pi";
import GroupedList from "@/components/GroupedList.tsx";

export function Component() {
  const rows = [
    {
      label: "대화 스타일",
      link: "./",
      content: "소설형",
      tool: "caret",
    },
    {
      label: "이중 번역",
      link: "./",
      content: "사용",
      tool: "caret",
    },
    {
      label: "타이핑 시뮬레이션",
      link: "./",
      content: "사용",
      tool: "caret",
    },
    {
      label: "내 소개",
      link: "./",
      tool: "caret",
    },
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
          세나와 7월 11일 오전 6:48에 시작한 대화 - 대화 설정 커스텀
        </span>
      </div>

      <div className="flex size-full flex-col gap-[20px] px-[190px]">
        <div className="mt-[20px] pl-[15px] text-16p leading-[22px] text-black/50">
          여기서 수정한 대화 설정은 이 대화에만 적용됩니다.
        </div>
        <GroupedList rows={rows} />
        <GroupedList
          rows={[
            {
              label: (
                <p className="text-red">
                  모두 기본값(캐릭터 설정)으로 설정하기
                </p>
              ),
              link: "./",
              tool: "caret",
            },
          ]}
        />
      </div>
    </div>
  );
}

Component.displayName = "ConversationCustomSettingPage";
