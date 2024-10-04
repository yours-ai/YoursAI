import { Toggle } from "konsta/react";
import { GlobalConfig } from "@/domain/config/models.ts";
import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";
import { useTranslation } from "react-i18next";
import { useDb } from "@/contexts/DbContext.ts";
import { useMutation } from "@tanstack/react-query";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";

export default function TranslationSelector({
  config,
}: {
  config: GlobalConfig;
}) {
  const { t } = useTranslation("pages/friends");
  const db = useDb();
  const mutation = useMutation({
    mutationFn: makeGlobalConfigRepository(db).updateGlobalConversationConfig,
  });
  const changeTranslation = async (doTranslation: boolean) => {
    await mutation.mutateAsync({
      doTranslation,
    });
  };
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      <TopBar
        title={t("settings.options.translation.label")}
        bgColor={"bg-white"}
      />
      <SettingItem
        title={t("settings.options.translation.label")}
        action={
          <Toggle
            checked={config.conversationConfig.doTranslation}
            onChange={() =>
              changeTranslation(!config.conversationConfig.doTranslation)
            }
            className="k-color-yellow"
          />
        }
        isLastItem={true}
        hoverOff={true}
      />
    </div>
  );
}
