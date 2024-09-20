import SettingTopBar from "@/components/SettingTopBar.tsx";
import ListContainer from "@/components/ListContainer.tsx";
import { Dialog, DialogButton, ListItem } from "konsta/react";
import { useState } from "react";
import { PiCheckBold } from "react-icons/pi";
import { useTranslation } from "react-i18next";

export function Component() {
  const { t } = useTranslation("pages/settings");
  const [selectedLanguage, setSelectedLanguage] = useState<"ko" | "en">("ko"); // 추후 dynamic하게 바꿔야함
  const [koOpened, setKoOpened] = useState<boolean>(false);
  const [enOpened, setEnOpened] = useState<boolean>(false);
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title={t("language.title")} />
      <div className="flex w-full flex-col gap-[20px] px-[190px] pt-[32px]">
        <ListContainer>
          <ListItem
            link
            chevron={false}
            title="한국어"
            after={
              selectedLanguage === "ko" ? (
                <PiCheckBold className="text-24p text-accentBlue" />
              ) : null
            }
            onClick={() => {
              if (selectedLanguage !== "ko") {
                setKoOpened(true);
              }
            }}
          />
          <ListItem
            link
            chevron={false}
            title="English"
            after={
              selectedLanguage === "en" ? (
                <PiCheckBold className="text-24p text-accentBlue" />
              ) : null
            }
            onClick={() => {
              if (selectedLanguage !== "en") {
                setEnOpened(true);
              }
            }}
          />
        </ListContainer>
      </div>
      <Dialog
        opened={koOpened}
        onBackdropClick={() => setKoOpened(false)}
        title={
          <p className="text-16p font-semibold leading-[22px]">
            {t("language.changeToKo")}
          </p>
        }
        content={
          <p className="text-13p leading-[18px]">{t("language.needRestart")}</p>
        }
        buttons={
          <>
            <DialogButton onClick={() => setKoOpened(false)}>
              {t("language.no")}
            </DialogButton>
            <DialogButton
              onClick={() => {
                setSelectedLanguage("ko");
                setKoOpened(false);
              }}
              className="font-semibold"
            >
              {t("language.yes")}
            </DialogButton>
          </>
        }
      />
      <Dialog
        opened={enOpened}
        onBackdropClick={() => setEnOpened(false)}
        title={
          <p className="text-16p font-semibold leading-[22px]">
            {t("language.changeToEn")}
          </p>
        }
        content={
          <p className="text-13p leading-[18x]">{t("language.needRestart")}</p>
        }
        buttons={
          <>
            <DialogButton onClick={() => setEnOpened(false)}>
              {t("language.no")}
            </DialogButton>
            <DialogButton
              onClick={() => {
                setSelectedLanguage("en");
                setEnOpened(false);
              }}
              className="font-semibold"
            >
              {t("language.yes")}
            </DialogButton>
          </>
        }
      />
    </div>
  );
}

Component.displayName = "LanguageSettingPage";
