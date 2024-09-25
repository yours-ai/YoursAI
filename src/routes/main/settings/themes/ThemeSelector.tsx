import { useMemo, useState } from "react";
import SettingTopBar from "@/components/SettingTopBar.tsx";
import SegmentedControlBar from "@/components/macos/SegmentedControlBar.tsx";
import {
  AvailableBundledThemeId,
  GlobalConfig,
} from "@/domain/config/models.ts";
import SegmentBoard from "@/components/macos/SegmentBoard.tsx";
import { useTranslation } from "react-i18next";
import { useBundledThemes } from "@/hooks/useTheme.ts";
import { useDynamicTranslation } from "@/locales/hooks.ts";
import { Button } from "konsta/react";

function ThemeSelector({ config }: { config: GlobalConfig }) {
  const { t } = useTranslation("pages/setup");
  const { t: v } = useTranslation("pages/settings");
  const { t: dynamicT } = useDynamicTranslation();

  const [value, setValue] = useState<AvailableBundledThemeId | "custom">(
    config.theme.type === "bundled" ? config.theme.id : "custom",
  );
  const bundledThemes = useBundledThemes();
  const selectedTheme = useMemo(
    () => (bundledThemes && value !== "custom" ? bundledThemes[value] : null),
    [value, bundledThemes],
  );
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title={v("themes.title")} enableBack />
      <div className="flex w-full flex-col items-center gap-[20px] px-[30px] pt-[32px] tablet:px-[80px] desktop:px-[160px]">
        {bundledThemes && (
          <SegmentedControlBar
            flexible
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
          <div className="flex h-[223px] w-full items-center justify-center phone:w-[421px]">
            <Button className="max-w-fit rounded-[12px] px-[18px] py-[21px] text-18p leading-[22px]">
              {t("themeContent.themes.custom.upload")}
            </Button>
          </div>
        ) : (
          selectedTheme && (
            <SegmentBoard
              flexible
              imgBlob={
                selectedTheme.descriptionImg
                  ? dynamicT(selectedTheme.descriptionImg)
                  : undefined
              }
            />
          )
        )}
        {selectedTheme && (
          <>
            <div className="text-16p leading-[18px]">
              {value !== "custom" &&
                selectedTheme.description &&
                dynamicT(selectedTheme.description)}
            </div>
            {config.theme.type === "bundled" && config.theme.id !== value && (
              <Button className="max-w-fit rounded-[12px] px-[18px] py-[21px] text-18p leading-[22px]">
                {v("themes.change")}
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ThemeSelector;
