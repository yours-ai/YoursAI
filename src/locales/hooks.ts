import { useCallback, useEffect } from "react";
import {
  AvailableLanguage,
  DefaultLanguage,
  Translatable,
} from "@/locales/models.ts";
import { useTranslation } from "react-i18next";
import { makeGlobalConfigRepository } from "@/domain/config/repository.ts";
import { useDb } from "@/contexts/DbContext.ts";
import { useLiveQuery } from "dexie-react-hooks";

export const useDynamicTranslation = () => {
  const language = useCurrentLanguage();
  return {
    t: useCallback(
      <T>(translatable: Translatable<T>) => {
        return (translatable[language] ?? translatable[DefaultLanguage]) as T;
      },
      [language],
    ),
  };
};

export const useCurrentLanguage = (): AvailableLanguage => {
  const { i18n } = useTranslation();
  return i18n.language as AvailableLanguage;
};

export const useUpdateLanguage = () => {
  const db = useDb();
  return useCallback(
    async (language: AvailableLanguage) => {
      await makeGlobalConfigRepository(db).updateGlobalConfig({
        language,
      });
    },
    [db],
  );
};

export const useLanguageSync = () => {
  const service = makeGlobalConfigRepository(useDb());
  const globalConfig = useLiveQuery(service.getGlobalConfig);
  const db = useDb();
  const { i18n } = useTranslation();

  // initial value is from browser if not set at dexie (ex: cloud, saved from before session)
  useEffect(() => {
    if (globalConfig && globalConfig.language === null) {
      service.updateGlobalConfig({
        language: i18n.language as AvailableLanguage,
      });
    }
  }, [service, db, i18n.language, globalConfig, globalConfig?.language]);

  // always update value from dexie first, and sync to i18n
  useEffect(() => {
    if (
      globalConfig &&
      globalConfig.language &&
      globalConfig.language !== i18n.language
    ) {
      i18n.changeLanguage(globalConfig.language);
    }
  }, [globalConfig, i18n]);
};
