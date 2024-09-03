import React from "react";
import { PiArrowRightBold } from "react-icons/pi";
import useSetupStepsStore from "@/stores/setupStepStore";

function NextSetupArrow() {
  const { increase } = useSetupStepsStore();
  return (
    <>
      <div />
      <div
        className="mr-[10px] cursor-pointer text-black/50 hover:text-black/70"
        onClick={increase}
      >
        <PiArrowRightBold className="text-[24px] " />
      </div>
    </>
  );
}

export default NextSetupArrow;
