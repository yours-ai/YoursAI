import SettingTopBar from "@/components/common/SettingTopBar.tsx";
import { useTranslation } from "react-i18next";
import { SettingsProps } from "@/components/themes/models/Settings.ts";

export default function PersonalSettings({ config }: SettingsProps) {
  const { t } = useTranslation("pages/friends");
  console.log(config); // TODO: Remove this line
  return (
    <div className="bg-emptyBackground size-full">
      <SettingTopBar title={t("settings.options.self-intro")} enableBack />
      <div className="tablet:px-[80px] desktop:px-[190px] flex w-full flex-col items-center px-[15px]"></div>
    </div>
  );
}
