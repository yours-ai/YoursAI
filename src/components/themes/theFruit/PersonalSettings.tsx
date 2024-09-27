import SettingTopBar from "@/components/common/SettingTopBar.tsx";
import { useTranslation } from "react-i18next";
import { SettingsProps } from "@/components/themes/models/Settings.ts";

export default function PersonalSettings({ config }: SettingsProps) {
  const { t } = useTranslation("pages/friends");
  console.log(config); // TODO: Remove this line
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title={t("settings.options.self-intro")} enableBack />
      <div className="flex w-full flex-col items-center px-[15px] tablet:px-[80px] desktop:px-[190px]"></div>
    </div>
  );
}
