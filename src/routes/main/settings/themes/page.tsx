import SettingTopBar from "@/components/SettingTopBar.tsx";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import SegmentedControlBar from "@/components/macos/SegmentedControlBar.tsx";
import { useLiveQuery } from "dexie-react-hooks";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import { useDb } from "@/contexts/DbContext.ts";
import { AvailableBundledThemeId } from "@/domain/config/models.ts";
import { useBundledThemes } from "@/hooks/useTheme.ts";
import { useDynamicTranslation } from "@/locales/hooks.ts";
import SetupControlButton from "@/components/macos/SetupControlButton.tsx";
import SegmentBoard from "@/components/macos/SegmentBoard.tsx";

export function Component() {
  const { t } = useTranslation("pages/setup");
  const { t: v } = useTranslation("pages/settings");
  const db = useDb();
  const config = useLiveQuery(makeGlobalConfigRepository(db).getGlobalConfig);
  const [value, setValue] = useState<AvailableBundledThemeId | "custom">(
    config?.theme.type === "bundled" ? config.theme.id : "custom",
  );
  const { t: dynamicT } = useDynamicTranslation();
  const bundledThemes = useBundledThemes();
  const selectedTheme = useMemo(
    () => (bundledThemes && value !== "custom" ? bundledThemes[value] : null),
    [value, bundledThemes],
  );

  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title={v("themes.title")} />
      <div className="flex w-full flex-col items-center gap-[20px] px-[140px] pt-[32px]">
        {bundledThemes && (
          <SegmentedControlBar
            value={value}
            options={[
              ...Object.values(bundledThemes).map((theme) => ({
                value: theme.id as AvailableBundledThemeId,
                label: dynamicT(theme.name),
              })),
              /* TODO: upload custom theme */
              {
                value: "custom",
                label: t("themeContent.themes.custom.name"),
              },
            ]}
            onChange={setValue}
          />
        )}
        {value === "custom" ? (
          <div className="flex h-[223px] w-[421px] items-center justify-center">
            <SetupControlButton
              custom={t("themeContent.themes.custom.upload")}
              upload
            />
          </div>
        ) : (
          selectedTheme && (
            <SegmentBoard
              imgBlob={
                selectedTheme.descriptionImg
                  ? dynamicT(selectedTheme.descriptionImg)
                  : undefined
              }
            />
          )
        )}
        {selectedTheme && (
          <div className="text-13p leading-[16px]">
            {value !== "custom" &&
              selectedTheme.description &&
              dynamicT(selectedTheme.description)}
          </div>
        )}
      </div>
    </div>
  );
}

Component.displayName = "ThemesSettingPage";
