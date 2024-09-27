import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";
import SettingItemDivider from "@/components/themes/chocolate/settings/SettingItemDivider.tsx";
import { ChatRoomProps } from "@/components/themes/models/ChatRoom.ts";

export default function ChatRoomSettingsCustom({ chatRoomId }: ChatRoomProps) {
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      {/* TODO: 동적으로 */}
      <TopBar
        title={"세나와 7월 11일 오전 6:48에 시작한 대화 - 대화 설정 커스텀"}
        backLink={`../${chatRoomId}/settings`}
        bgColor={"bg-white"}
      />
      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col items-stretch py-5">
          <div className={`px-5 text-12p font-light`}>
            여기서 수정한 대화 설정은 이 대화에만 적용됩니다.
          </div>
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
          <SettingItem title={"내 소개"} isLastItem={true} />
          <SettingItemDivider />
          <SettingItem title={"모두 기본값(캐릭터 설정)으로 설정하기"} />
        </div>
      </div>
    </div>
  );
}
