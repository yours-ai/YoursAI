import { Dispatch, SetStateAction, useMemo, useState } from "react";
import SettingTitle from "@/routes/setup/sheets/SettingTitle.tsx";
import SegmentedControlBar from "@/components/macos/SegmentedControlBar.tsx";
import SegmentBoard from "@/components/macos/SegmentBoard.tsx";
import SetupControlButton from "@/components/macos/SetupControlButton.tsx";
import { useTranslation } from "react-i18next";
import Sheet from "@/components/macos/Sheet.tsx";
import {
  AvailableBundledThemeId,
  GlobalConfig,
} from "@/domain/config/models.ts";
import { useDynamicTranslation } from "@/locales/hooks.ts";
import { useMutation } from "@tanstack/react-query";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import { useDb } from "@/contexts/DbContext.ts";
import { useBundledThemes } from "@/hooks/useTheme.ts";

export interface Props {
  setStep: Dispatch<SetStateAction<number>>;
  config: GlobalConfig;
}

export default function ThemeSheet({ config, setStep }: Props) {
  const { t } = useTranslation("pages/setup");
  const db = useDb();
  const [value, setValue] = useState<AvailableBundledThemeId | "custom">(
    config.theme.type === "bundled" ? config.theme.id : "custom",
  );
  const { t: dynamicT } = useDynamicTranslation();
  const mutation = useMutation({
    mutationFn: makeGlobalConfigRepository(db).updateGlobalConfig,
    onSuccess() {
      setStep((prev) => prev + 1);
    },
  });
  const bundledThemes = useBundledThemes();

  const selectedTheme = useMemo(
    () => (bundledThemes && value !== "custom" ? bundledThemes[value] : null),
    [value, bundledThemes],
  );

  return (
    <Sheet
      content={
        <>
          <SettingTitle title={t("themeContent.title")} />
          <div className="phone:px-0 mt-[24px] flex w-full flex-col items-center gap-[17px] px-[20px]">
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
        </>
      }
      rightActions={
        <>
          <SetupControlButton
            onClick={() => setStep((prev) => prev - 1)}
            goBack
          />
          <SetupControlButton
            disabled={value === "custom" /* TODO: implement custom theme */}
            onClick={() =>
              value !== "custom" &&
              !mutation.isPending &&
              mutation.mutate({
                theme: {
                  type: "bundled",
                  id: value,
                },
              })
            }
          />
        </>
      }
    />
  );
}
