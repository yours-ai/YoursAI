import TabAction from "@/components/common/TabAction.tsx";
import TabTitle from "@/components/common/TabTitle.tsx";
import { List, ListItem } from "konsta/react";
import NavLinkListItem from "@/components/common/NavLinkListItem.tsx";
import { useTranslation } from "react-i18next";

export function SettingList() {
  const { t } = useTranslation("pages/settings");

  return (
    <div className="h-full bg-emptyBackground">
      <TabAction action="none" />
      <TabTitle title={t("title")} />
      <div className="mt-[12px] flex flex-col gap-[36px] px-[15px] phone:px-8">
        <List strong inset dividers className="!m-0 bg-white">
          <NavLinkListItem
            link="language"
            title={t("language.title")}
            after="한국어"
          />
          <NavLinkListItem
            link="themes"
            title={t("themes.title")}
            after={t("themes.fruit.name")}
            isLast
          />
        </List>
        <List strong inset dividers className="!m-0 bg-white">
          <NavLinkListItem
            link="chat-customize"
            title={t("conversation.title")}
            after={t("conversation.options.style.choices")}
            isLast
          />
        </List>
        <List strong inset dividers className="!m-0 bg-white">
          <NavLinkListItem link="data" title={t("data.title")} isLast />
        </List>
        <List strong inset dividers className="!m-0 bg-white">
          <ListItem title={t("dev")} link />
          <ListItem title={t("discord")} link />
          <ListItem title={t("email")} link />
          <NavLinkListItem link="sponsor" title={t("sponsor")} isLast />
        </List>
        <List strong inset dividers className="!m-0 bg-white">
          <ListItem title={<p className="text-red">{t("reset")}</p>} link />
        </List>
      </div>
    </div>
  );
}
