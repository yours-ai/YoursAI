import { PiCaretLeftBold } from "react-icons/pi";
import { List, ListItem } from "konsta/react";
import { useTranslation } from "react-i18next";

export function Component() {
  const { t } = useTranslation("pages/msg");
  return (
    <div className="size-full bg-emptyBackground">
      <div className="relative flex w-full items-center justify-center border-b border-border py-[18px]">
        <div
          className="absolute left-[9px] cursor-pointer text-24p text-accentBlue"
          onClick={(e) => {
            e.preventDefault();
            window.history.back();
          }}
        >
          <PiCaretLeftBold />
        </div>
        <span className="text-20p font-semibold leading-[22px]">
          {t("settings.custom.title")}
        </span>
      </div>

      <div className="flex w-full flex-col gap-[20px] px-[190px]">
        <div className="mt-[20px] pl-[15px] text-16p leading-[22px] text-black/50">
          {t("settings.custom.description")}
        </div>
        <List strong inset dividers className="!m-0 bg-white">
          <ListItem
            title={t("settings.custom.options.style.label")}
            link
            after={t("settings.custom.options.style.choices")}
          />
          <ListItem title="이중 번역" link after="사용" />
          <ListItem
            title={t("settings.custom.options.typing.label")}
            link
            after={t("settings.custom.options.typing.choices")}
          />
          <ListItem title={t("settings.custom.options.self-intro")} link />
        </List>
        <List strong inset className="!m-0 bg-white">
          <ListItem
            title={
              <p className="text-red">{t("settings.custom.options.default")}</p>
            }
            link
          />
        </List>
      </div>
    </div>
  );
}

Component.displayName = "ConversationCustomSettingPage";
