import React, { SetStateAction, useState } from "react";
import NextSetupArrow from "@/app/start/initial-setup/NextSetupArrow";
import SetupControlButton from "@/components/SetupControlButton";
import AlertButton from "@/components/AlertButton";

interface Props {
  step: number;
  setStep: React.Dispatch<SetStateAction<number>>;
  content: React.ReactNode;
  description?: React.ReactNode;
  btnDisabled?: boolean;
}

const AllDefaultStartModal = ({ onClose }: { onClose: () => void }) => {
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
            <div className="text-13p font-bold">모두 기본값으로 시작</div>
            <div className="text-11p">
              이 기능은 익숙한 사용자에게만 권장됩니다.
              <br />
              계속하시겠어요?
            </div>
          </div>
          <div className="mt-[16px] flex gap-[8px]">
            <AlertButton isBlank label="아니요" onClick={onClose} />
            <AlertButton label="네" />
          </div>
        </div>
      </div>
    </div>
  );
};

function Sheet({ step, setStep, content, description, btnDisabled }: Props) {
  const [allDefaultStartModalOpen, setAllDefaultStartModalOpen] =
    useState<boolean>(false);
  const handleAllDefaultStart = () => {
    setAllDefaultStartModalOpen(true);
  };
  return (
    <div className="relative flex h-[500px] w-[700px] flex-col items-center justify-between rounded-[10px] bg-menuBackground px-[9px] pt-[9px]">
      {allDefaultStartModalOpen && (
        <AllDefaultStartModal
          onClose={() => setAllDefaultStartModalOpen(false)}
        />
      )}
      <div className="flex flex-col items-center">{content}</div>
      <div className="flex h-[49px] w-full items-center justify-between border-t border-black/10">
        {step === 0 ? (
          <NextSetupArrow onClick={() => setStep((prev) => prev + 1)} />
        ) : (
          <>
            {step === 1 ? (
              <div
                className="cursor-pointer px-[7px] text-13p leading-[16px] text-accentBlue"
                onClick={handleAllDefaultStart}
              >
                모두 기본값으로 시작
              </div>
            ) : (
              <div />
            )}
            <div className="flex gap-[10px]">
              <SetupControlButton
                onClick={() => setStep((prev) => prev - 1)}
                goBack
              />
              {step === 7 ? (
                <SetupControlButton start />
              ) : (
                <SetupControlButton
                  onClick={() => setStep((prev) => prev + 1)}
                  disabled={btnDisabled}
                />
              )}
            </div>
          </>
        )}
      </div>
      <div className="absolute top-[520px] text-center text-20p font-bold leading-[25px] text-white">
        {description}
      </div>
    </div>
  );
}

export default Sheet;
