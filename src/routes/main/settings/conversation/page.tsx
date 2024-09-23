import SettingTopBar from "@/components/SettingTopBar.tsx";
import ListContainer from "@/components/ListContainer.tsx";
import { ListItem } from "konsta/react";
import { useTranslation } from "react-i18next";
import { useRightPrimaryPage } from "@/routes/main/hooks.ts";

export function Component() {
  useRightPrimaryPage();
  const { t } = useTranslation("pages/settings");
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title={t("conversation.title")} enableBack />
      <div className="flex w-full flex-col gap-[20px] px-[190px]">
        <div className="mt-[20px] pl-[15px] text-16p leading-[22px] text-black/50">
          {t("conversation.description")}
        </div>
        <div className="flex flex-col gap-[38px] px-[30px] tablet:px-[80px] desktop:px-[190px]">
          <ListContainer>
            <ListItem
              title={t("conversation.options.style.label")}
              link
              after={t("conversation.options.style.choices")}
            />
            <ListItem title="이중 번역" link after="사용" />
            <ListItem
              title={t("conversation.options.typing.label")}
              link
              after={t("conversation.options.typing.choices")}
            />
            <ListItem title={t("conversation.options.self-intro")} link />
          </ListContainer>
          <ListContainer>
            <ListItem
              title={
                <p className="text-red">{t("conversation.options.default")}</p>
              }
              link
            />
          </ListContainer>
        </div>
      </div>
    </div>
  );
}

Component.displayName = "ConversationSettingPage";
