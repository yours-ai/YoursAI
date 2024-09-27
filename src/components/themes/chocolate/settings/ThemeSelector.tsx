import { useState } from "react";
import {
  AvailableBundledThemeId,
  GlobalConfig,
} from "@/domain/config/models.ts";
import { useTranslation } from "react-i18next";
import { useBundledThemes } from "@/hooks/useTheme.ts";
import { useDynamicTranslation } from "@/locales/hooks.ts";
import { useMutation } from "@tanstack/react-query";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import { useDb } from "@/contexts/DbContext.ts";
import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import ThemeItem from "@/components/themes/chocolate/settings/ThemeItem.tsx";
import SettingItem from "@/components/themes/chocolate/settings/SettingItem.tsx";

export default function ThemeSelector({ config }: { config: GlobalConfig }) {
  const { t } = useTranslation("pages/setup");
  const { t: v } = useTranslation("pages/settings");
  const { t: dynamicT } = useDynamicTranslation();

  const [value, setValue] = useState<AvailableBundledThemeId | "custom">(
    config.theme.type === "bundled" ? config.theme.id : "custom",
  );
  const bundledThemes = useBundledThemes();
  const db = useDb();
  const mutation = useMutation({
    mutationFn: makeGlobalConfigRepository(db).updateGlobalConfig,
  });
  const changeTheme = async (id: string) => {
    setValue(id as AvailableBundledThemeId);

    await mutation.mutateAsync({
      theme: {
        type: "bundled",
        id: id as AvailableBundledThemeId,
      },
    });
  };
  return (
    <div
      className={`relative size-full border-l-[0.5px] border-[#C6C6C8] bg-white`}
    >
      <TopBar title={v("themes.title")} backLink={`../`} bgColor={"bg-white"} />

      <div className="flex w-full flex-col items-start gap-[20px] pt-5">
        {bundledThemes &&
          Object.values(bundledThemes).map((theme) => (
            <ThemeItem
              alt={theme.id}
              imgBlob={
                theme.descriptionImg
                  ? dynamicT(theme.descriptionImg)
                  : undefined
              }
              title={dynamicT(theme.name)}
              description={
                theme.description ? dynamicT(theme.description) : undefined
              }
              selected={value === theme.id}
              onClick={() => changeTheme(theme.id)}
            />
          ))}
        <SettingItem
          title={t("themeContent.themes.custom.upload")}
          isLastItem={true}
          onClick={() => alert("upload custom theme")}
        />
      </div>
    </div>
  );
}
