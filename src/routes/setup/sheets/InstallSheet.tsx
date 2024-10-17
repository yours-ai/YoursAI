import Sheet from "@/components/macos/Sheet.tsx";
import SettingTitle from "@/routes/setup/sheets/SettingTitle.tsx";
import { MdInstallDesktop } from "react-icons/md";
import SegmentBoard from "@/components/macos/SegmentBoard.tsx";
import SetupControlButton from "@/components/macos/SetupControlButton.tsx";
import { SetStateAction, useEffect, useRef, useState } from "react";
import { PWAInstallElement } from "@khmyznikov/pwa-install";
import { Trans, useTranslation } from "react-i18next";
import { PwaInstallModal } from "@/components/common/PwaInstallModal.tsx";

export interface Props {
  setStep: React.Dispatch<SetStateAction<number>>;
}

export default function InstallSheet({ setStep }: Props) {
  const { t } = useTranslation("pages/setup");
  const pwaInstallRef = useRef<PWAInstallElement>(null);
  const [installTriggered, setInstallTriggered] = useState<boolean>(false);

  useEffect(() => {
    if (installTriggered) {
      setStep((prev) => prev + 1);
    }
  }, [setStep, installTriggered]);

  useEffect(() => {
    if (pwaInstallRef.current) {
      pwaInstallRef.current.hideDialog();
    }
  }, []);

  return (
    <Sheet
      content={
        <>
          <SettingTitle
            title={t("installContent.title")}
            icon={<MdInstallDesktop />}
          />
          <div className="mt-[26px] flex w-full flex-col items-center gap-[13px] px-[20px] phone:px-0">
            <SegmentBoard />
            <SetupControlButton
              blue
              custom={t("installContent.install")}
              className="w-[60px]"
              onClick={() => {
                pwaInstallRef.current?.showDialog(true);
              }}
            />
          </div>
          <div className="absolute top-[521px] px-[20px] text-center text-16p font-semibold leading-[25px] phone:text-18p tablet:text-20p tablet:text-white">
            <Trans i18nKey="installContent.description" t={t}>
              홈화면에 YoursAI를 추가하고 더 쾌적하게 즐겨보세요.
              <br></br>
              1초만에 다운로드돼요!
            </Trans>
          </div>
          <PwaInstallModal
            ref={pwaInstallRef}
            setInstallTriggered={setInstallTriggered}
          />
        </>
      }
      rightActions={
        <>
          <SetupControlButton
            onClick={() => setStep((prev) => prev - 1)}
            goBack
          />
          <SetupControlButton
            onClick={() => {
              setStep((prev) => prev + 1);
            }}
            custom={t("installContent.skip")}
            className="w-[60px]"
          />
        </>
      }
    />
  );
}
