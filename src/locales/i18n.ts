import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { AvailableLanguages } from "@/locales/models.ts";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: AvailableLanguages,
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["navigator"],
    },

    interpolation: {
      escapeValue: false,
    },
    defaultNS: "common",
  });

export default i18n;
