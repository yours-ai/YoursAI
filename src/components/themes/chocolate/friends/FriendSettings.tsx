import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";
import SettingItemDivider from "@/components/themes/chocolate/settings/SettingItemDivider.tsx";
import { SettingsProps } from "@/components/themes/models/Settings.ts";
import { useNavigate } from "react-router-dom";

export default function FriendSettings({ config }: SettingsProps) {
  console.log(config); // TODO <- 삭제
  const navigate = useNavigate();
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      {/* TODO: 동적으로 */}
      <TopBar title={"세나 대화 설정 커스텀"} bgColor={"bg-white"} />
      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col items-stretch py-5">
          <div className={`px-5 text-12p font-light`}>
            여기서 수정한 대화 설정은 세나와의 모든 대화에 기본으로 적용됩니다.
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
          <SettingItem title={"모두 기본값(글로벌 설정)으로 설정하기"} />
        </div>
      </div>
    </div>
  );
}
