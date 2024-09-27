import TopBar from "@/components/themes/chocolate/TopBar.tsx";

export function SettingThemes() {
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      <TopBar title={"테마"} backLink={`../`} bgColor={"bg-white"} />
      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col items-stretch py-5">
          {/* TODO: 테마 setup에 있는거 들고 오기 */}
          해야됨
        </div>
      </div>
    </div>
  );
}
