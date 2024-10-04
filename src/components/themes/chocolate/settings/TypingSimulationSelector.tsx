import { Toggle } from "konsta/react";
import { GlobalConfig } from "@/domain/config/models.ts";
import { useTranslation } from "react-i18next";
import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";
import { useMutation } from "@tanstack/react-query";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import { useDb } from "@/contexts/DbContext.ts";

export default function TypingSimulationSelector({
  config,
}: {
  config: GlobalConfig;
}) {
  const { t } = useTranslation("pages/friends");
  const db = useDb();
  const mutation = useMutation({
    mutationFn: makeGlobalConfigRepository(db).updateGlobalConversationConfig,
  });
  const changeTypingSimulation = async (doTypingSimulation: boolean) => {
    await mutation.mutateAsync({
      doTypingSimulation,
    });
  };
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      <TopBar title={t("settings.options.typing.label")} bgColor={"bg-white"} />
      <SettingItem
        title={t("settings.options.typing.label")}
        action={
          <Toggle
            checked={config.conversationConfig.doTypingSimulation}
            onChange={() =>
              changeTypingSimulation(
                !config.conversationConfig.doTypingSimulation,
              )
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
