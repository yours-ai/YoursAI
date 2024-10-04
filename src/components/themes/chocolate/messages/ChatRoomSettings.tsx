import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";
import { PiGearSix } from "react-icons/pi";
import SettingItemDivider from "@/components/themes/chocolate/settings/SettingItemDivider.tsx";
import { FaRegTrashAlt } from "react-icons/fa";
import { GrDetach } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { ChatRoomSettingsProps } from "@/components/themes/models/ChatRoomSettings.ts";
import { Toggle } from "konsta/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ChatRoomSettings({
  chatRoomId,
}: ChatRoomSettingsProps) {
  console.log(chatRoomId); // TODO <- 삭제
  const { t } = useTranslation("pages/msg");
  const navigate = useNavigate();
  const [didJailbreak, setDidJailbreak] = useState<boolean>(false);
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      {/* TODO: 동적으로 jailbreak */}
      <TopBar title={t("settings.title")} bgColor={"bg-white"} />
      <div className="flex-1 overflow-y-scroll ">
        <div className="flex flex-col items-stretch py-5">
          <SettingItem
            icon={<PiGearSix className={`size-5`} />}
            title={t("settings.custom.label")}
            onClick={() => navigate("./custom")}
          />
          {/* TODO: 동적으로 */}
          <SettingItem
            icon={<GrDetach className={`size-5`} />}
            title={t("settings.jailbreak")}
            action={
              <Toggle
                checked={didJailbreak}
                onChange={() => setDidJailbreak((prev) => !prev)}
                className="k-color-yellow"
              />
            }
            isLastItem={true}
          />
          <SettingItemDivider />
          <SettingItem
            icon={<FaRegTrashAlt className={`size-4`} />}
            title={t("settings.delete")}
            isLastItem
          />
        </div>
      </div>
    </div>
  );
}
