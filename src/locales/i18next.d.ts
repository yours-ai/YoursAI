import "i18next";
import setup from "@/../public/locales/ko/pages/setup.json";
import friends from "@/../public/locales/ko/pages/friends.json";
import messages from "@/../public/locales/ko/pages/msg.json";
import settings from "@/../public/locales/ko/pages/settings.json";
import common from "@/../public/locales/ko/common.json";
import waitlist from "@/../public/locales/ko/pages/waitlist.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      "pages/setup": typeof setup;
      "pages/friends": typeof friends;
      "pages/msg": typeof messages;
      "pages/settings": typeof settings;
      "pages/waitlist": typeof waitlist;
      common: typeof common;
    };
  }
}
