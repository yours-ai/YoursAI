import { useTranslation } from "react-i18next";
import { SettingsProps } from "@/components/themes/models/Settings.ts";
import TopBar from "@/components/themes/chocolate/TopBar.tsx";

export default function PersonalSettings({ config }: SettingsProps) {
  const { t } = useTranslation("pages/friends");
  console.log(config); // TODO: Remove this line
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      <TopBar title={t("settings.options.self-intro")} bgColor={"bg-white"} />
      <div className="flex w-full flex-col items-center px-[15px] tablet:px-[80px] desktop:px-[190px]">
        뭘 소개함
      </div>
    </div>
  );
}
