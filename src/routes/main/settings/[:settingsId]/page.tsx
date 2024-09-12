import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { Link, useParams } from "react-router-dom";
import { AvailableLanguage, AvailableLanguages } from "@/locales/models.ts";
import {
  useCurrentLanguage,
  useDynamicTranslation,
  useUpdateLanguage,
} from "@/locales/hooks.ts";
import { useMutation } from "@tanstack/react-query";
import { useDexieQuery } from "@/hooks/useDexieQuery.ts";
import {
  getGlobalConfig,
  updateGlobalConfig,
} from "@/domain/config/services.ts";
import { BundledThemes } from "@/components/themes/models";
import { useDb } from "@/contexts/DbContext.ts";
import { AvailableBundledThemeId } from "@/domain/config/models.ts";

export function Component() {
  const { settingsId } = useParams();
  useRightPrimaryPage();
  const language = useCurrentLanguage();
  const updateLanguage = useUpdateLanguage();
  const updateLangMutation = useMutation({
    mutationFn: updateLanguage,
  });
  const { t } = useDynamicTranslation();
  const globalConfig = useDexieQuery(getGlobalConfig);
  const db = useDb();
  const updateThemeMutation = useMutation({
    mutationFn: (theme: AvailableBundledThemeId) =>
      updateGlobalConfig(db, {
        theme: {
          type: "bundled",
          id: theme,
        },
      }),
  });

  return (
    <div className="size-full">
      <div className="flex size-full flex-col bg-gray-200 text-3xl">
        This is setting detail page for id: {settingsId}
        <Link to="../">Back</Link>
        <div>
          <select
            value={language}
            onChange={(event) =>
              updateLangMutation.mutate(event.target.value as AvailableLanguage)
            }
          >
            {AvailableLanguages.map((language) => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>
        <div>
          {globalConfig?.theme.type === "bundled" && (
            <select
              value={globalConfig.theme.id}
              onChange={(event) =>
                updateThemeMutation.mutate(
                  event.target.value as AvailableBundledThemeId,
                )
              }
            >
              {Object.entries(BundledThemes).map(([id, theme]) => (
                <option key={id} value={id}>
                  {t(theme.name)}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
    </div>
  );
}

Component.displayName = "SettingDetailPage";
