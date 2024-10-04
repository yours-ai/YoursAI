import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";
import SettingItemDivider from "@/components/themes/chocolate/settings/SettingItemDivider.tsx";
import { ChatRoomProps } from "@/components/themes/models/ChatRoom.ts";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDb } from "@/contexts/DbContext.ts";
import { useLiveQuery } from "dexie-react-hooks";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import { useDynamicTranslation } from "@/locales/hooks.ts";

export default function ChatRoomSettingsCustom({ chatRoomId }: ChatRoomProps) {
  console.log(chatRoomId); // TODO: 삭제
  const navigate = useNavigate();
  const { t } = useTranslation("pages/msg");
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
      {/* TODO: 동적으로 */}
      <TopBar title={t("settings.custom.title")} bgColor={"bg-white"} />
      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col items-stretch py-5">
          <div className={`px-5 text-12p font-light`}>
            {t("settings.custom.description")}
          </div>
          <SettingItem
            title={t("settings.custom.options.style.label")}
            action={
              <div className={`font-normal text-[#B9BCBF]`}>
                {conversationStyle && dynamicT(conversationStyle.metadata.name)}
              </div>
            }
            onClick={() => navigate("./conversation-style")}
          />
          <SettingItem
            title={t("settings.custom.options.translation.label")}
            action={
              <div className={`font-normal text-[#B9BCBF]`}>
                {config?.conversationConfig.doTranslation
                  ? t("settings.custom.options.translation.choices.on")
                  : t("settings.custom.options.translation.choices.off")}
              </div>
            }
            onClick={() => navigate("./translation")}
          />
          <SettingItem
            title={t("settings.custom.options.typing.label")}
            action={
              <div className={`font-normal text-[#B9BCBF]`}>
                {config?.conversationConfig.doTypingSimulation
                  ? t("settings.custom.options.typing.choices.on")
                  : t("settings.custom.options.typing.choices.off")}
              </div>
            }
            onClick={() => navigate("./typing-simulation")}
          />
          <SettingItem
            title={t("settings.custom.options.self-intro")}
            isLastItem={true}
            onClick={() => navigate("./persona")}
          />
          <SettingItemDivider />
          <SettingItem
            title={t("settings.custom.options.default")}
            isLastItem
          />
        </div>
      </div>
    </div>
  );
}
