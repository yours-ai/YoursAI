import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import SettingItem from "@/components/themes/chocolate/SettingItem.tsx";
import SettingItemDivider from "@/components/themes/chocolate/SettingItemDivider.tsx";

export function SettingConversation() {
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      <TopBar title={"대화 설정"} backLink={`../`} bgColor={"bg-white"} />
      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col items-stretch py-5">
          <SettingItem
            title={"대화 스타일"}
            action={<div className={`font-normal text-[#B9BCBF]`}>소설형</div>}
          />
          {/* TODO: 아래의 daisy ui 없애고 커스텀 만들기*/}
          <SettingItem
            title={"이중 번역"}
            action={
              <input
                type="checkbox"
                className="toggle border-none bg-white [--tglbg:#FEE500] "
                defaultChecked
              />
            }
          />
          <SettingItem
            title={"타이핑 시뮬레이션"}
            action={
              <input
                type="checkbox"
                className="toggle border-none bg-white [--tglbg:#FEE500] "
                defaultChecked
              />
            }
          />
          <SettingItem title={"내 소개"} />
          <SettingItemDivider />
          <SettingItem title={"모두 초기값으로 설정하기"} />
        </div>
      </div>
    </div>
  );
}
