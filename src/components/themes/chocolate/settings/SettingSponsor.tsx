import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";
import { useTranslation } from "react-i18next";

export function SettingSponsor() {
  const { t } = useTranslation("pages/settings");
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      <TopBar title={t("sponsor")} bgColor={"bg-white"} />
      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col items-stretch py-5">
          {/* TODO: 이 페이지 필요함? 필요없으면 날리셈*/}
          <SettingItem title={"머 채움?"} />
        </div>
      </div>
    </div>
  );
}
