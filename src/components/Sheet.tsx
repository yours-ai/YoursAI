import React, { SetStateAction, startTransition, useState } from "react";
import SetupControlButton from "@/components/SetupControlButton";
import AlertButton from "@/components/AlertButton";
import { Trans, useTranslation } from "react-i18next";
import NextSetupArrow from "@/routes/setup/NextSetupArrow.tsx";

interface Props {
  step: number;
  setStep: React.Dispatch<SetStateAction<number>>;
  content: React.ReactNode;
  btnDisabled?: boolean;
  last?: boolean;
}

const AllDefaultStartModal = ({ onClose }: { onClose: () => void }) => {
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
            <AlertButton label={t("allDefaultStart.alertButton.right")} />
          </div>
        </div>
      </div>
    </div>
  );
};

function Sheet({ step, setStep, content, btnDisabled, last }: Props) {
  const { t } = useTranslation("common");
  const [allDefaultStartModalOpen, setAllDefaultStartModalOpen] =
    useState<boolean>(false);
  const handleAllDefaultStart = () => {
    startTransition(() => setAllDefaultStartModalOpen(true));
  };
  return (
    <div
      className="size-full bg-menuBackground tablet:h-[500px] tablet:w-[700px] tablet:rounded-[10px]"
      style={{
        padding:
          "env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)",
      }}
    >
      <div className="relative flex size-full flex-col items-center justify-between px-[9px] pt-[9px]">
        {allDefaultStartModalOpen && (
          <AllDefaultStartModal
            onClose={() => setAllDefaultStartModalOpen(false)}
          />
        )}
        <div className="flex w-full flex-col items-center">{content}</div>
        <div className="flex w-full items-center justify-between border-t border-black/10 py-3">
          {step === 0 ? (
            <NextSetupArrow onClick={() => setStep((prev) => prev + 1)} />
          ) : (
            <>
              {step === 2 ? (
                <div
                  className="cursor-pointer px-[7px] text-13p leading-[16px] text-accentBlue"
                  onClick={handleAllDefaultStart}
                >
                  {t("sheet.startWithDefault")}
                </div>
              ) : (
                <div />
              )}
              <div className="flex gap-[10px]">
                <SetupControlButton
                  onClick={() => setStep((prev) => prev - 1)}
                  goBack
                />
                {last ? (
                  <SetupControlButton start />
                ) : (
                  <SetupControlButton
                    onClick={() => {
                      setStep((prev) => prev + 1);
                    }}
                    disabled={btnDisabled}
                  />
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sheet;
