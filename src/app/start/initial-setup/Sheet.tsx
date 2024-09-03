import React from "react";
import useSetupStepsStore from "@/stores/setupStepStore";
import NextSetupArrow from "@/app/start/initial-setup/NextSetupArrow";
import SetupControlButton from "@/components/SetupControlButton";

interface Props {
  content: React.ReactNode;
  description?: React.ReactNode;
}

function Sheet({ content, description }: Props) {
  const { step } = useSetupStepsStore();
  return (
    <div className="relative flex h-[500px] w-[700px] flex-col items-center justify-between rounded-[10px] bg-menuBackground px-[9px] pt-[9px]">
      <div className="flex flex-col items-center">{content}</div>
      <div className="flex h-[49px] w-full items-center justify-between border-t border-black/10">
        {step === 0 ? (
          <NextSetupArrow />
        ) : (
          <>
            {step === 1 ? (
              <div className="cursor-pointer px-[7px] text-13p leading-[16px] text-accentBlue">
                모두 기본 값으로 시작
              </div>
            ) : (
              <div />
            )}
            <div className="flex gap-[10px]">
              <SetupControlButton goBack />
              <SetupControlButton />
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
