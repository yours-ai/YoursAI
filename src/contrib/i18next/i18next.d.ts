import "i18next";
import setup from "@/../public/locales/ko/pages/setup.json";
import friends from "@/../public/locales/ko/pages/friends.json";
import messages from "../../../public/locales/ko/pages/msg.json";
import common from "@/../public/locales/ko/common.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      "pages/setup": typeof setup;
      "pages/friends": typeof friends;
      "pages/msg": typeof messages;
      common: typeof common;
    };
  }
}
