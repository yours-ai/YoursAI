import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";
import CheckButton from "@/components/themes/chocolate/settings/CheckButton.tsx";
import { useDb } from "@/contexts/DbContext.ts";
import { useLiveQuery } from "dexie-react-hooks";
import { useMutation } from "@tanstack/react-query";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import { useTranslation } from "react-i18next";

export function SettingLanguage() {
  const { t } = useTranslation("pages/settings");
  const db = useDb();
  const selectedLanguage = useLiveQuery(
    () => db.globalConfigs.toArray().then((configs) => configs[0].language),
    [],
  );
  const mutation = useMutation({
    mutationFn: makeGlobalConfigRepository(db).updateGlobalConfig,
  });
  const changeLanguage = async (language: string) => {
    await mutation.mutateAsync({
      language: language as "ko" | "en" | null,
    });
  };
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      <TopBar title={t("language.title")} bgColor={"bg-white"} />
      <div className="flex-1 ">
        <div className="flex flex-col items-stretch py-5">
          <SettingItem
            title={"한국어"}
            action={<CheckButton selected={selectedLanguage === "ko"} />}
            onClick={() => changeLanguage("ko")}
          />
          <SettingItem
            title={"English"}
            action={<CheckButton selected={selectedLanguage === "en"} />}
            onClick={() => changeLanguage("en")}
          />
          <SettingItem
            title={"日本語"}
            action={<CheckButton selected={false} />}
            onClick={() => alert("아직 안됨요")} // TODO: 쌈뽕하게 띄우기
            isLastItem
          />
        </div>
      </div>
    </div>
  );
}
