import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";
import SettingItemDivider from "@/components/themes/chocolate/settings/SettingItemDivider.tsx";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDynamicTranslation } from "@/locales/hooks.ts";
import { useDb } from "@/contexts/DbContext.ts";
import { useLiveQuery } from "dexie-react-hooks";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";

export function SettingChatCustomize() {
  const navigate = useNavigate();
  const { t } = useTranslation("pages/settings");
  const { t: dynamicT } = useDynamicTranslation();
  const db = useDb();
  const config = useLiveQuery(
    () => makeGlobalConfigRepository(db).getGlobalConfig(),
    [],
  );
  const conversationStyle = useLiveQuery(() => {
    if (!config) return undefined;
    return db.promptTemplates.get(config.conversationConfig.promptTemplateId);
  }, []);
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      <TopBar title={t("conversation.title")} bgColor={"bg-white"} />
      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col items-stretch py-5">
          <div className={`px-5 text-12p font-light`}>
            {t("conversation.description")}
          </div>
          <SettingItem
            title={t("conversation.options.style.label")}
            action={
              <div className={`font-normal text-[#B9BCBF]`}>
                {conversationStyle && dynamicT(conversationStyle.metadata.name)}
              </div>
            }
            onClick={() => navigate("./conversation-style")}
          />
          <SettingItem
            title={t("conversation.options.translation.label")}
            action={
              <div className={`font-normal text-[#B9BCBF]`}>
                {" "}
                {config?.conversationConfig.doTranslation
                  ? t("conversation.options.translation.choices.on")
                  : t("conversation.options.translation.choices.off")}
              </div>
            }
            onClick={() => navigate("./translation")}
          />
          <SettingItem
            title={t("conversation.options.typing.label")}
            action={
              <div className={`font-normal text-[#B9BCBF]`}>
                {" "}
                {config?.conversationConfig.doTypingSimulation
                  ? t("conversation.options.typing.choices.on")
                  : t("conversation.options.typing.choices.off")}
              </div>
            }
            onClick={() => navigate("./typing-simulation")}
          />
          <SettingItem
            title={t("conversation.options.self-intro")}
            isLastItem={true}
            onClick={() => navigate("./persona")}
          />
          <SettingItemDivider />
          <SettingItem title={t("conversation.options.default")} isLastItem />
        </div>
      </div>
    </div>
  );
}
