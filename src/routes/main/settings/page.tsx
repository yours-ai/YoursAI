import { Outlet, useOutletContext } from "react-router-dom";
import SplitViewPage from "@/routes/main/SplitViewPage.tsx";
import { useLeftPrimaryPage } from "@/routes/main/hooks.ts";
import TabTitle from "@/components/TabTitle.tsx";
import TabAction from "@/components/TabAction.tsx";
import { List, ListItem } from "konsta/react";
import NavLinkListItem from "@/components/NavLinkListItem.tsx";
import { useTranslation } from "react-i18next";

export function Component() {
  const { t } = useTranslation("pages/settings");
  useLeftPrimaryPage("/main/settings");
  const outletContext = useOutletContext();

  return (
    <SplitViewPage
      leftPane={
        <div className="h-full bg-emptyBackground">
          <TabAction action="none" />
          <TabTitle title={t("title")} />
          <div className="mt-[12px] flex flex-col gap-[36px] px-8">
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
                link="conversation"
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
      }
      rightPane={<Outlet context={outletContext} />}
    />
  );
}

Component.displayName = "SettingsPage";
