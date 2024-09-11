import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { Link } from "react-router-dom";
import { PiCaretLeft, PiCaretRight, PiList } from "react-icons/pi";

export function Component() {
  useRightPrimaryPage();

  return (
    <div className="size-full">
      <div className="flex h-[98px] w-full items-center justify-between border-b-[0.5px] border-black/30 bg-black/5 px-5 backdrop-blur-[50px]">
        <div className="text-[24px] text-accentBlue">
          <PiCaretLeft />
        </div>
        <div className="flex flex-col items-center gap-[8px]">
          <img
            src="/sena.png"
            alt="sena-image"
            className="size-[40px] rounded-full"
          />
          <div className="flex items-center gap-[3px]">
            <span className="text-15p font-semibold">세나</span>
            <PiCaretRight className="text-[12px]" />
          </div>
        </div>
        <div className="text-[24px] text-accentBlue">
          <PiList />
        </div>
      </div>
      <Link to="../">Back</Link>
    </div>
  );
}

Component.displayName = "ChatroomPage";
