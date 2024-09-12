import "i18next";
import setupAreYouThere from "@/../public/locales/en/setup/areYouThere.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "setup/AreYouThere";
    resources: {
      "setup/areYouThere": typeof setupAreYouThere;
    };
  }
}
