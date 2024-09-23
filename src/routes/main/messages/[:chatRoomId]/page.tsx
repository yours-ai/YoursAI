import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { Link } from "react-router-dom";
import { PiCaretLeftBold, PiCaretRight, PiListBold } from "react-icons/pi";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";

export function Component() {
  useRightPrimaryPage();

  return (
    <div className="size-full">
      <div className="flex h-[59px] w-full items-center justify-between border-b-[0.5px] border-black/30 bg-black/5 pl-[10px] pr-[20px] backdrop-blur-[50px] phone:h-[98px]">
        <Link to="../">
          <div className="text-24p text-accentBlue">
            <PiCaretLeftBold />
          </div>
        </Link>
        <div className="flex items-center gap-[8px] phone:flex-col">
          <img
            src="/sena.png"
            alt="sena-image"
            className="size-[35px] rounded-full phone:size-[40px]"
          />
          <div className="flex items-center gap-[3px]">
            <span className="text-16p font-semibold phone:text-14p">세나</span>
            <PiCaretRight className="text-14p phone:text-[12px]" />
          </div>
        </div>
        <Link to="settings">
          <div className="text-24p text-accentBlue">
            <PiListBold />
          </div>
        </Link>
      </div>
    </div>
  );
}

Component.displayName = "ChatroomPage";

export const ErrorBoundary = DefaultErrorBoundary;
