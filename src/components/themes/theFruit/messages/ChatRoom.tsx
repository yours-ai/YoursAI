import { ChatRoomProps } from "@/components/themes/models/ChatRoom.ts";
import { Link } from "react-router-dom";
import { PiCaretLeftBold, PiCaretRight, PiListBold } from "react-icons/pi";

export default function ChatRoom({ chatRoomId }: ChatRoomProps) {
  console.log(chatRoomId); // TODO <- 삭제
  return (
    <div className="size-full">
      <div className="phone:h-[98px] flex h-[59px] w-full items-center justify-between border-b-[0.5px] border-black/30 bg-black/5 pl-[10px] pr-[20px] backdrop-blur-[50px]">
        <Link to="../">
          <div className="text-24p text-accentBlue">
            <PiCaretLeftBold />
          </div>
        </Link>
        <div className="phone:flex-col flex items-center gap-[8px]">
          <img
            src="/sena.png"
            alt="sena-image"
            className="phone:size-[40px] size-[35px] rounded-full"
          />
          <div className="flex items-center gap-[3px]">
            <span className="text-16p phone:text-14p font-semibold">세나</span>
            <PiCaretRight className="text-14p phone:text-12p" />
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
