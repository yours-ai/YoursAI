import React from "react";
import useSetupStepsStore from "@/stores/setupStepStore";

function SetupControlButton({ goBack }: { goBack?: boolean }) {
  const { increase, decrease } = useSetupStepsStore();
  return (
    <div
      className="flex w-[60px] cursor-pointer items-center justify-center rounded-[5px] bg-white px-[7px] py-[3px]"
      style={{
        boxShadow:
          "0px 0.5px 2.5px 0px rgba(0, 0, 0, 0.30), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.05)",
      }}
      onClick={goBack ? decrease : increase}
    >
      <span className="text-13p leading-[16px]">
        {goBack ? "뒤로" : "계속하기"}
      </span>
    </div>
  );
}

export default SetupControlButton;
