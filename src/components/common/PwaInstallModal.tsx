import PWAInstall from "@khmyznikov/pwa-install/react-legacy";
import { useTranslation } from "react-i18next";
import { PWAInstallElement } from "@khmyznikov/pwa-install";
import { forwardRef, SetStateAction, useContext } from "react";
import { PwaInstallContext } from "@/contexts/PwaProvider.tsx";

export interface PwaInstallModalProps {
  setInstallTriggered?: React.Dispatch<SetStateAction<boolean>>;
}

export const PwaInstallModal = forwardRef<
  PWAInstallElement,
  PwaInstallModalProps
>(function PwaInstallModal(props, ref) {
  const { t } = useTranslation("pages/setup");
  const { promptEvent } = useContext(PwaInstallContext);
  return (
    <PWAInstall
      ref={ref}
      name={t("installContent.modal.title")}
      icon="/logo.png"
      description={t("installContent.modal.description")}
      disableDescription={true}
      externalPromptEvent={promptEvent}
      onPwaInstallSuccessEvent={() => {
        if (props.setInstallTriggered) props.setInstallTriggered(true);
      }}
    ></PWAInstall>
  );
});
