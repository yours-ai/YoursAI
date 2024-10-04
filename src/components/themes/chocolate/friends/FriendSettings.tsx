import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";
import SettingItemDivider from "@/components/themes/chocolate/settings/SettingItemDivider.tsx";
import { SettingsProps } from "@/components/themes/models/Settings.ts";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDynamicTranslation } from "@/locales/hooks.ts";
import { useLiveQuery } from "dexie-react-hooks";
import { useDb } from "@/contexts/DbContext.ts";

export default function FriendSettings({ config }: SettingsProps) {
  const navigate = useNavigate();
  const db = useDb();
  const { t } = useTranslation("pages/friends");
  const { t: dynamicT } = useDynamicTranslation();
  const conversationStyle = useLiveQuery(
    () => db.promptTemplates.get(config.conversationConfig.promptTemplateId),
    [],
  );
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      {/* TODO: 동적으로 */}
      <TopBar title={`세나 ${t("settings.title")}`} bgColor={"bg-white"} />
      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col items-stretch py-5">
          <div className={`px-5 text-12p font-light`}>
            {t("settings.description")}
          </div>
          <SettingItem
            title={t("settings.options.style.label")}
            action={
              <div className={`font-normal text-[#B9BCBF]`}>
                {conversationStyle && dynamicT(conversationStyle.metadata.name)}
              </div>
            }
            onClick={() => navigate("./conversation-style")}
          />
          <SettingItem
            title={t("settings.options.translation.label")}
            action={
              <div className={`font-normal text-[#B9BCBF]`}>
                {config.conversationConfig.doTranslation
                  ? t("settings.options.translation.choices.on")
                  : t("settings.options.translation.choices.off")}
              </div>
            }
            onClick={() => navigate("./translation")}
          />
          <SettingItem
            title={t("settings.options.typing.label")}
            action={
              <div className={`font-normal text-[#B9BCBF]`}>
                {config.conversationConfig.doTypingSimulation
                  ? t("settings.options.typing.choices.on")
                  : t("settings.options.typing.choices.off")}
              </div>
            }
            onClick={() => navigate("./typing-simulation")}
          />
          <SettingItem
            title={t("settings.options.self-intro")}
            isLastItem={true}
            onClick={() => navigate("./persona")}
          />
          <SettingItemDivider />
          <SettingItem title={t("settings.options.default")} isLastItem />
        </div>
      </div>
    </div>
  );
}
