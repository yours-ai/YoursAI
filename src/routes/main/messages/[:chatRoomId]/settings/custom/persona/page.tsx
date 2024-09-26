import { useTranslation } from "react-i18next";
import SettingTopBar from "@/components/common/SettingTopBar.tsx";

export function Component() {
  const { t } = useTranslation("pages/friends");
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title={t("settings.options.self-intro")} enableBack />
      <div className="flex w-full flex-col items-center px-[15px] tablet:px-[80px] desktop:px-[190px]"></div>
    </div>
  );
}

Component.displayName = "PersonaSessionSettingPage";
