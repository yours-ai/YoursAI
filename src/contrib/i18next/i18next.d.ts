import "i18next";
import setup from "@/../public/locales/ko/pages/setup.json";
import common from "@/../public/locales/ko/common.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      "pages/setup": typeof setup;
      common: typeof common;
    };
  }
}
