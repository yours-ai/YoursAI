import { ListItem, Toggle } from "konsta/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ListContainer from "@/components/ListContainer.tsx";
import { useTranslation } from "react-i18next";
import SettingTopBar from "@/components/SettingTopBar.tsx";

export function Component() {
  const [checked, setChecked] = useState(false);
  const { t } = useTranslation("pages/msg");
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title={t("settings.title")} enableBack />
      <div className="flex w-full flex-col gap-[20px] px-[190px] pt-[32px]">
        <ListContainer>
          <Link to="custom">
            <ListItem title={t("settings.custom.label")} link />
          </Link>
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