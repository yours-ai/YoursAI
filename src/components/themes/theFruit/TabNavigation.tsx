import { Link, useLocation } from "react-router-dom";
import { PiUserFill, PiChatCircleFill, PiGearSixFill } from "react-icons/pi";
import { useTranslation } from "react-i18next";

const tabLinkClass =
  "flex h-full flex-1 items-center justify-center duration-150 bg-white";

export default function TabNavigation() {
  const { pathname } = useLocation();
  const { t } = useTranslation("common");
  return (
    <div className="flex h-[72px] border-t-[0.5px] border-black/30">
      <Link
        className={`${pathname.startsWith("/main/friends") ? "text-accentBlue" : "text-tabUnselected hover:text-tabHovered"} ${tabLinkClass}`}
        to="/main/friends"
      >
        <div className="flex h-full flex-col items-center justify-center gap-[2px]">
          <PiUserFill className="text-24p" />
          <span className="text-sm font-medium">
            {t("tabNavigation.friends")}
          </span>
        </div>
      </Link>
      <Link
        className={`${pathname.startsWith("/main/messages") ? "text-accentBlue" : "text-tabUnselected hover:text-tabHovered"} ${tabLinkClass}`}
        to="/main/messages"
      >
        <div className="flex flex-col items-center gap-[2px]">
          <PiChatCircleFill className="text-24p" />
          <span className="text-sm font-medium">
            {t("tabNavigation.messages")}
          </span>
        </div>
      </Link>
      <Link
        className={`${pathname.startsWith("/main/settings") ? "text-accentBlue" : "text-tabUnselected hover:text-tabHovered"} ${tabLinkClass}`}
        to="/main/settings"
      >
        <div className="flex flex-col items-center gap-[2px]">
          <PiGearSixFill className="text-24p" />
          <span className="text-sm font-medium">
            {t("tabNavigation.settings")}
          </span>
        </div>
      </Link>
    </div>
  );
}
