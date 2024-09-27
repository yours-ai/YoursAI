import { Link, PathMatch, useMatch } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import { IoChatbubble } from "react-icons/io5";
import { FaGear } from "react-icons/fa6";
import { navigationPaths } from "@/constants.ts";

interface NavItemProps {
  isActive: PathMatch<string> | null;
  icon: React.ReactNode;
  label: string;
  path: string;
}

function NavItem({ isActive, icon, label, path }: NavItemProps) {
  return (
    <Link
      className="flex size-[60px] flex-1 items-center justify-center"
      to={path}
    >
      <div className={`flex flex-col items-center justify-center gap-1`}>
        {icon}
        <div
          className={`${isActive !== null ? "text-[#2F363E]" : "text-[#B9BCBF]"} text-10p`}
        >
          {label}
        </div>
      </div>
    </Link>
  );
}

export default function TabNavigation() {
  const matchFriendsTab = useMatch(navigationPaths.friends + "/*");
  const matchMessagesTab = useMatch(navigationPaths.messages + "/*");
  const matchSettingsTab = useMatch(navigationPaths.settings + "/*");
  return (
    <div className="mobile:h-[58px] flex h-[calc(62px+env(safe-area-inset-bottom))] border-t-2 bg-[#F9F9FA]">
      <NavItem
        icon={
          <BsPersonFill
            className={`${matchFriendsTab ? "text-[#2F363E]" : "text-[#B9BCBF]"} size-7`}
          />
        }
        isActive={matchFriendsTab}
        label={"친구"}
        path={navigationPaths.friends}
      />
      <NavItem
        icon={
          <IoChatbubble
            className={`${matchMessagesTab ? "text-[#2F363E]" : "text-[#B9BCBF]"} size-6`}
          />
        }
        isActive={matchMessagesTab}
        label={"메시지"}
        path={navigationPaths.messages}
      />
      <NavItem
        icon={
          <FaGear
            className={`${matchSettingsTab ? "text-[#2F363E]" : "text-[#B9BCBF]"} size-6`}
          />
        }
        isActive={matchSettingsTab}
        label={"설정"}
        path={navigationPaths.settings}
      />
    </div>
  );
}
