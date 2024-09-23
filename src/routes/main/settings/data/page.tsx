import SettingTopBar from "@/components/SettingTopBar.tsx";
import ListContainer from "@/components/ListContainer.tsx";
import { Dialog, DialogButton, ListItem } from "konsta/react";
import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useRightPrimaryPage } from "@/routes/main/hooks.ts";

export function Component() {
  useRightPrimaryPage();
  const { t } = useTranslation("pages/settings");
  const [fetchDialogOpened, setFetchDialogOpened] = useState<boolean>(false);
  const [resetDialogOpened, setResetDialogOpened] = useState<boolean>(false);
  return (
    <div className="size-full bg-emptyBackground">
      <SettingTopBar title={t("data.title")} enableBack />
      <div className="flex w-full flex-col gap-[38px] px-[30px] pt-[32px] tablet:px-[80px] desktop:px-[190px] ">
        <ListContainer>
          <ListItem
            title={t("data.import.label")}
            link
            onClick={() => setFetchDialogOpened(true)}
          />
          <ListItem title={t("data.export")} link />
        </ListContainer>
        <ListContainer>
          <ListItem
            title={<p className="text-red">{t("data.reset.label")}</p>}
            link
            onClick={() => setResetDialogOpened(true)}
          />
        </ListContainer>
      </div>
      <Dialog
        opened={fetchDialogOpened}
        onBackdropClick={() => setFetchDialogOpened(false)}
        title={
          <p className="text-16p font-semibold leading-[22px]">
            {t("data.import.title")}
          </p>
        }
        content={
          <p className="text-13p leading-[18x]">
            {t("data.import.description")}
          </p>
        }
        buttons={
          <>
            <DialogButton onClick={() => setFetchDialogOpened(false)}>
              {t("data.import.no")}
            </DialogButton>
            <DialogButton
              onClick={() => setFetchDialogOpened(false)}
              className="font-semibold"
            >
              {t("data.import.yes")}
            </DialogButton>
          </>
        }
      />
      <Dialog
        opened={resetDialogOpened}
        onBackdropClick={() => setResetDialogOpened(false)}
        title={
          <p className="text-16p font-semibold leading-[22px]">
            {t("data.reset.title")}
          </p>
        }
        content={
          <p className="text-13p leading-[18x]">
            <Trans t={t} i18nKey="data.reset.description">
              모든 채팅 데이터와 설정이 삭제되며,
              <br></br>
              되돌릴 수 없습니다.
            </Trans>
          </p>
        }
        buttons={
          <>
            <DialogButton onClick={() => setResetDialogOpened(false)}>
              {t("data.reset.no")}
            </DialogButton>
            <DialogButton
              onClick={() => setResetDialogOpened(false)}
              className="font-semibold text-red"
            >
              {t("data.reset.yes")}
            </DialogButton>
          </>
        }
      />
    </div>
  );
}

Component.displayName = "DataSettingPage";
