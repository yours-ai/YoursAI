import { Toggle } from "konsta/react";
import { useState } from "react";
import { GlobalConfig } from "@/domain/config/models.ts";
import { useTranslation } from "react-i18next";
import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";

export default function TypingSimulationSelector({
  config,
}: {
  config: GlobalConfig;
}) {
  const { t } = useTranslation("pages/friends");
  const [isChecked, setIsChecked] = useState<boolean>(
    config.conversationConfig.doTypingSimulation,
  );
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      <TopBar title={t("settings.options.typing.label")} bgColor={"bg-white"} />
      <SettingItem
        title={t("settings.options.typing.label")}
        action={
          <Toggle
            checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
            className="k-color-yellow"
          />
        }
        isLastItem={true}
        hoverOff={true}
      />
    </div>
  );
}
