import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";

export function SettingLanguage() {
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      <TopBar title={"언어"} bgColor={"bg-white"} />
      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col items-stretch py-5">
          {/* TODO: checkbox customize해서 끝에 달아야함*/}
          <SettingItem title={"한국어"} />
          <SettingItem title={"English"} />
          <SettingItem title={"日本語"} />
        </div>
      </div>
    </div>
  );
}
