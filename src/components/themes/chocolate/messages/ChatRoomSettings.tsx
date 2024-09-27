import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";
import { PiGearSix } from "react-icons/pi";
import SettingItemDivider from "@/components/themes/chocolate/settings/SettingItemDivider.tsx";
import { FaRegTrashAlt } from "react-icons/fa";
import { GrDetach } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { ChatRoomSettingsProps } from "@/components/themes/models/ChatRoomSettings.ts";

export default function ChatRoomSettings({
  chatRoomId,
}: ChatRoomSettingsProps) {
  console.log(chatRoomId); // TODO <- 삭제
  const navigate = useNavigate();
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      {/* TODO: 동적으로 */}
      <TopBar
        title={"세나와 7월 11일 오전 6:48에 시작한 대화"}
        backLink={`../${chatRoomId}`}
        bgColor={"bg-white"}
      />
      <div className="flex-1 overflow-y-scroll ">
        <div className="flex flex-col items-stretch py-5">
          <SettingItem
            icon={<PiGearSix className={`size-5`} />}
            title={"대화 설정 커스텀"}
            onClick={() => navigate("./custom")}
          />
          {/* TODO: 아래의 daisy ui 없애고 커스텀 만들기*/}
          <SettingItem
            icon={<GrDetach className={`size-5`} />}
            title={"탈옥 토글"}
            action={
              <input
                type="checkbox"
                className="toggle border-none bg-white [--tglbg:#FEE500] "
                defaultChecked
              />
            }
            isLastItem={true}
          />
          <SettingItemDivider />
          <SettingItem
            icon={<FaRegTrashAlt className={`size-4`} />}
            title={"이 대화 지우기"}
          />
        </div>
      </div>
    </div>
  );
}
