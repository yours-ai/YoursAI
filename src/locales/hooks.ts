import { useCallback } from "react";
import { Translatable } from "@/locales/models.ts";
import { useTranslation } from "react-i18next";

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
