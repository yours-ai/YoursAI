import { useCallback, useEffect } from "react";
import { AvailableLanguage, Translatable } from "@/locales/models.ts";
import { useTranslation } from "react-i18next";
import { useDexieQuery } from "@/hooks/useDexieQuery.ts";
import {
  getGlobalConfig,
  updateGlobalConfig,
} from "@/domain/config/services.ts";
import { useDb } from "@/contexts/DbContext.ts";

export const useDynamicTranslation = () => {
  const { i18n } = useTranslation();
  return {
    t: useCallback(
      <T>(translatable: Translatable<T>) => {
        return translatable[i18n.language as keyof typeof translatable];
      },
      [i18n.language],
    ),
  };
};

export const useCurrentLanguage = (): AvailableLanguage => {
  const { i18n } = useTranslation();
  return i18n.language as AvailableLanguage;
};

export const useUpdateLocale = () => {
  const db = useDb();
  return useCallback(
    async (language: AvailableLanguage) => {
      await updateGlobalConfig(db, { language });
    },
    [db],
  );
};

export const useLanguageSync = () => {
  // hook to sync language between i18n and dexie
  const globalConfig = useDexieQuery(getGlobalConfig);
  const db = useDb();
  const { i18n } = useTranslation();

  // initial value is from browser if not set at dexie (ex: cloud, saved from before session)
  useEffect(() => {
    if (globalConfig && globalConfig.language === null) {
      updateGlobalConfig(db, { language: i18n.language as AvailableLanguage });
    }
  }, [db, i18n.language, globalConfig, globalConfig?.language]);

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
