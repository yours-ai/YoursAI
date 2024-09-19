import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { Link, useParams } from "react-router-dom";
import { AvailableLanguage, AvailableLanguages } from "@/locales/models.ts";
import { useCurrentLanguage, useDynamicTranslation } from "@/locales/hooks.ts";
import { makeGlobalConfigService } from "@/domain/config/services.ts";
import { BundledThemes } from "@/components/themes/models";
import { AvailableBundledThemeId } from "@/domain/config/models.ts";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";
import { useLiveQuery } from "dexie-react-hooks";
import { useDb } from "@/contexts/DbContext.ts";
import { useMutation } from "@tanstack/react-query";

export function Component() {
  const { settingsId } = useParams();
  const { getGlobalConfig, updateGlobalConfig } =
    makeGlobalConfigService(useDb());
  useRightPrimaryPage();
  const language = useCurrentLanguage();
  const { t } = useDynamicTranslation();
  const globalConfig = useLiveQuery(getGlobalConfig);
  const mutation = useMutation({
    mutationFn: updateGlobalConfig,
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
              mutation.mutate({
                language: event.target.value as AvailableLanguage,
              })
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
                mutation.mutate({
                  theme: {
                    type: "bundled",
                    id: event.target.value as AvailableBundledThemeId,
                  },
                })
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

export const ErrorBoundary = DefaultErrorBoundary;
