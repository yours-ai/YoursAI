import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";
import SettingItemDivider from "@/components/themes/chocolate/settings/SettingItemDivider.tsx";

export function SettingData() {
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      <TopBar title={"데이터 설정"} backLink={`../`} bgColor={"bg-white"} />
      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col items-stretch py-5">
          <SettingItem title={"데이터 가져오기"} />
          <SettingItem title={"데이터 내보내기"} />
          <SettingItemDivider />
          <SettingItem title={"모든 데이터 삭제 및 초기화"} />
        </div>
      </div>
    </div>
  );
}
