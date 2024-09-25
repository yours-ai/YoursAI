import SettingTopBar from "@/components/common/SettingTopBar.tsx";
import ListContainer from "@/components/common/ListContainer.tsx";
import ListLinkItem from "@/components/common/ListLinkItem.tsx";
import { ListItem } from "konsta/react";
import { useDb } from "@/contexts/DbContext.ts";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDynamicTranslation } from "@/locales/hooks.ts";
import { useLiveQuery } from "dexie-react-hooks";
import { GlobalConfig } from "@/domain/config/models.ts";

export default function SettingsPage({ config }: { config: GlobalConfig }) {
  const db = useDb();
  const { friendId } = useParams();
  const { t } = useTranslation("pages/friends");
  const { t: dynamicT } = useDynamicTranslation();
  const conversationStyle = useLiveQuery(
    () => db.promptTemplates.get(config.conversationConfig.promptTemplateId),
    [],
  );
  return (
    <>
      {conversationStyle && (
        <div className="size-full bg-emptyBackground">
          <SettingTopBar
            title={`${friendId} ${t("settings.title")}`}
            enableBack
          />
          <div className="flex w-full flex-col items-center gap-[20px] px-[15px] tablet:px-[80px] desktop:px-[190px]">
            <div className="mt-[20px] w-full max-w-[900px] pl-[15px] text-16p leading-[22px] text-black/50">
              {t("settings.description")}
            </div>
            <div className="flex w-full flex-col items-center gap-[38px]">
              <ListContainer>
                <ListLinkItem
                  title={t("settings.options.style.label")}
                  link="conversation-style"
                  after={dynamicT(conversationStyle.metadata.name)}
                />
                <ListLinkItem
                  link="translation"
                  title="이중 번역"
                  after={
                    config.conversationConfig.doTranslation ? "사용" : "끔"
                  }
                />
                <ListLinkItem
                  title={t("settings.options.typing.label")}
                  link="typing-simulation"
                  after={
                    config.conversationConfig.doTypingSimulation
                      ? t("settings.options.typing.choices.on")
                      : t("settings.options.typing.choices.off")
                  }
                />
                <ListLinkItem
                  link="persona"
                  title={t("settings.options.self-intro")}
                  isLast
                />
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
      )}
    </>
  );
}
