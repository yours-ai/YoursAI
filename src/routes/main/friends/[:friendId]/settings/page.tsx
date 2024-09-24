import SettingTopBar from "@/components/SettingTopBar.tsx";
import ListContainer from "@/components/ListContainer.tsx";
import { ListItem } from "konsta/react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import ListLinkItem from "@/components/ListLinkItem.tsx";

export function Component() {
  useRightPrimaryPage();
  const { friendId } = useParams();
  const { t } = useTranslation("pages/friends");
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title={`${friendId} ${t("settings.title")}`} enableBack />
      <div className="flex w-full flex-col gap-[20px] px-[30px] tablet:px-[80px] desktop:px-[190px]">
        <div className="mt-[20px] pl-[15px] text-16p leading-[22px] text-black/50">
          {t("settings.description")}
        </div>
        <div className="flex flex-col gap-[38px]">
          <ListContainer>
            <ListLinkItem
              title={t("settings.options.style.label")}
              link="conversation-style"
              after={t("settings.options.style.choices")}
            />
            <ListLinkItem link="translation" title="이중 번역" after="사용" />
            <ListLinkItem
              title={t("settings.options.typing.label")}
              link="typing-simulation"
              after={t("settings.options.typing.choices")}
            />
            <ListItem title={t("settings.options.self-intro")} link />
          </ListContainer>
          <ListContainer>
            <ListItem
              title={
                <p className="text-red">{t("settings.options.default")}</p>
              }
              link
            />
          </ListContainer>
        </div>
      </div>
    </div>
  );
}

Component.displayName = "FriendSettingsPage";
