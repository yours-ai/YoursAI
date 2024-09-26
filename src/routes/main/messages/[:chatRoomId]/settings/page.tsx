import { ListItem, Toggle } from "konsta/react";
import { useState } from "react";
import ListContainer from "@/components/common/ListContainer.tsx";
import { useTranslation } from "react-i18next";
import SettingTopBar from "@/components/common/SettingTopBar.tsx";
import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import ListLinkItem from "@/components/common/ListLinkItem.tsx";

export function Component() {
  useRightPrimaryPage();
  const [checked, setChecked] = useState(false);
  const { t } = useTranslation("pages/msg");
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title={t("settings.title")} enableBack />
      <div className="flex w-full flex-col items-center gap-[20px] px-[15px] pt-[32px] tablet:px-[80px] desktop:px-[190px]">
        <ListContainer>
          <ListLinkItem title={t("settings.custom.label")} link="custom" />
          <ListItem
            title={t("settings.jailbreak")}
            after={
              <Toggle
                className="-my-1 k-color-green"
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

Component.displayName = "ChatRoomSettingsPage";
