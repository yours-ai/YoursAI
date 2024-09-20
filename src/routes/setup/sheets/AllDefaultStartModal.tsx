import { Trans, useTranslation } from "react-i18next";
import AlertButton from "@/components/macos/AlertButton.tsx";

export interface Props {
  onYes: () => void;
  onClose: () => void;
}

export default function AllDefaultStartModal({ onClose, onYes }: Props) {
  const { t } = useTranslation("pages/setup");
  return (
    <div className="absolute inset-0 rounded-[10px] bg-white/50">
      <div className="absolute inset-0 flex items-center justify-center rounded-[10px] bg-gradient-to-t from-black/20 to-black/20">
        <div
          className="rounded-[10px] bg-[#F6F6F6]/60 px-[16px] pb-[16px] pt-[20px] text-center backdrop-blur-2xl"
          style={{
            boxShadow:
              "0px 0px 1px 0px rgba(0, 0, 0, 0.60), 0px 0px 2px 0px rgba(0, 0, 0, 0.05), 0px 38px 90px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="flex flex-col items-center gap-[10px]">
            <div className="text-13p font-bold">
              {t("allDefaultStart.title")}
            </div>
            <div className="text-11p">
              <Trans i18nKey="allDefaultStart.description" t={t}>
                이 기능은 익숙한 사용자에게만 권장됩니다.<br></br>
                계속하시겠어요?
              </Trans>
            </div>
          </div>
          <div className="mt-[16px] flex gap-[8px]">
            <AlertButton
              isBlank
              label={t("allDefaultStart.alertButton.left")}
              onClick={onClose}
            />
            <AlertButton
              label={t("allDefaultStart.alertButton.right")}
              onClick={onYes}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
