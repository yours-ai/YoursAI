import { useTranslation } from "react-i18next";
import SettingTopBar from "@/components/common/SettingTopBar.tsx";
import ListContainer from "@/components/common/ListContainer.tsx";
import ListLinkItem from "@/components/common/ListLinkItem.tsx";
import { ListItem } from "konsta/react";

export function SettingChatCustomize() {
  const { t } = useTranslation("pages/settings");
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title={t("conversation.title")} enableHome />
      <div className="flex w-full flex-col items-center gap-[20px] px-[15px] tablet:px-[80px] desktop:px-[190px]">
        <div className="mt-[20px] w-full max-w-[900px] pl-[15px] text-16p leading-[22px] text-black/50">
          {t("conversation.description")}
        </div>
        <div className="flex w-full flex-col items-center gap-[38px]">
          <ListContainer>
            <ListLinkItem
              title={t("conversation.options.style.label")}
              link="conversation-style"
              after={t("conversation.options.style.choices")}
            />
            <ListLinkItem title="이중 번역" link="translation" after="사용" />
            <ListLinkItem
              title={t("conversation.options.typing.label")}
              link="typing-simulation"
              after={t("conversation.options.typing.choices")}
            />
            <ListLinkItem
              title={t("conversation.options.self-intro")}
              link="persona"
              isLast
            />
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
