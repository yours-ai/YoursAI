import { Toggle } from "konsta/react";
import { GlobalConfig } from "@/domain/config/models.ts";
import { useState } from "react";
import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";
import { useTranslation } from "react-i18next";

export default function TranslationSelector({
  config,
}: {
  config: GlobalConfig;
}) {
  const { t } = useTranslation("pages/friends");
  const doTranslation = config.conversationConfig.doTranslation;
  const [isChecked, setIsChecked] = useState<boolean>(doTranslation);
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
