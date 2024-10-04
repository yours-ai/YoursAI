import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";
import SettingItemDivider from "@/components/themes/chocolate/settings/SettingItemDivider.tsx";
import { useNavigate } from "react-router-dom";

export function SettingChatCustomize() {
  const navigate = useNavigate();
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      <TopBar title={"대화 설정"} bgColor={"bg-white"} />
      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col items-stretch py-5">
          <div className={`px-5 text-12p font-light`}>
            글로벌 기본 설정입니다. 캐릭터나 채팅방에서의 설정에 의해 덮어쓰일
            수 있습니다.
          </div>
          <SettingItem
            title={"대화 스타일"}
            action={<div className={`font-normal text-[#B9BCBF]`}>소설형</div>}
            onClick={() => navigate("./conversation-style")}
          />
          <SettingItem
            title={"이중 번역"}
            action={<div className={`font-normal text-[#B9BCBF]`}>사용</div>}
            onClick={() => navigate("./translation")}
          />
          <SettingItem
            title={"타이핑 시뮬레이션"}
            action={<div className={`font-normal text-[#B9BCBF]`}>사용</div>}
            onClick={() => navigate("./typing-simulation")}
          />
          <SettingItem
            title={"내 소개"}
            isLastItem={true}
            onClick={() => navigate("./persona")}
          />
          <SettingItemDivider />
          <SettingItem title={"모두 초기값으로 설정하기"} />
        </div>
      </div>
    </div>
  );
}
