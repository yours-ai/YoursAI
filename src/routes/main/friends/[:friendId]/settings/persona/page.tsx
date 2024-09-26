import SettingTopBar from "@/components/common/SettingTopBar.tsx";
import { useTranslation } from "react-i18next";
import { useRightPrimaryPage } from "@/routes/main/hooks.ts";

export function Component() {
  useRightPrimaryPage();
  const { t } = useTranslation("pages/friends");
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title={t("settings.options.self-intro")} enableBack />
      <div className="flex w-full flex-col items-center px-[15px] tablet:px-[80px] desktop:px-[190px]"></div>
    </div>
  );
}

Component.displayName = "PersonaSettingPage";
