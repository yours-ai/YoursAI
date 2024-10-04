import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";
import SettingItemDivider from "@/components/themes/chocolate/settings/SettingItemDivider.tsx";
import { useTranslation } from "react-i18next";

export function SettingData() {
  const { t } = useTranslation("pages/settings");
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      <TopBar title={t("data.title")} bgColor={"bg-white"} />
      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col items-stretch py-5">
          <SettingItem title={t("data.import.label")} />
          <SettingItem title={t("data.export")} isLastItem />
          <SettingItemDivider />
          <SettingItem title={t("data.reset.label")} />
        </div>
      </div>
    </div>
  );
}
