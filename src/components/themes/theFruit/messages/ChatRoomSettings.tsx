import { ChatRoomProps } from "@/components/themes/models/ChatRoom.ts";
import SettingTopBar from "@/components/common/SettingTopBar.tsx";
import ListContainer from "@/components/common/ListContainer.tsx";
import ListLinkItem from "@/components/common/ListLinkItem.tsx";
import { ListItem, Toggle } from "konsta/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ChatRoomSettings({ chatRoomId }: ChatRoomProps) {
  console.log(chatRoomId); // TODO <- 삭제
  const [checked, setChecked] = useState(false);
  const { t } = useTranslation("pages/msg");
  return (
    <div className="bg-emptyBackground size-full">
      <SettingTopBar title={t("settings.title")} enableBack />
      <div className="tablet:px-[80px] desktop:px-[190px] flex w-full flex-col items-center gap-[20px] px-[15px] pt-[32px]">
        <ListContainer>
          <ListLinkItem title={t("settings.custom.label")} link="custom" />
          <ListItem
            title={t("settings.jailbreak")}
            after={
              <Toggle
                className="k-color-green -my-1"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            }
          />
        </ListContainer>
        <ListContainer>
          <ListItem
            title={<p className="text-red">{t("settings.delete")}</p>}
            link
          />
        </ListContainer>
      </div>
    </div>
  );
}
