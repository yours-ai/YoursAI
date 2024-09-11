import { Link, useLocation } from "react-router-dom";
import { PiUserFill, PiChatCircleFill, PiGearSixFill } from "react-icons/pi";

const tabLinkClass = "flex flex-1 items-center justify-center duration-150";

export default function TabNavigation() {
  const { pathname } = useLocation();
  console.log("location:", pathname);
  return (
    <div className="flex h-[58px] border-t-[0.5px] border-black/30">
      <Link
        className={`${pathname === "/main/friends" ? "text-accentBlue" : "text-tabUnselected hover:text-tabHovered"} ${tabLinkClass}`}
        to="/main/friends"
      >
        <div className="flex flex-col items-center ">
          <PiUserFill className="text-[24px]" />
          <span className="text-10p font-medium">친구</span>
        </div>
      </Link>
      <Link
        className={`${pathname === "/main/messages" ? "text-accentBlue" : "text-tabUnselected hover:text-tabHovered"} ${tabLinkClass}`}
        to="/main/messages"
      >
        <div className="flex flex-col items-center">
          <PiChatCircleFill className="text-[24px]" />
          <span className="text-10p font-medium">메시지</span>
        </div>
      </Link>
      <Link
        className={`${pathname === "/main/settings" ? "text-accentBlue" : "text-tabUnselected hover:text-tabHovered"} ${tabLinkClass}`}
        to="/main/settings"
      >
        <div className="flex flex-col items-center ">
          <PiGearSixFill className="text-[24px]" />
          <span className="text-10p font-medium">설정</span>
        </div>
      </Link>
    </div>
  );
}
