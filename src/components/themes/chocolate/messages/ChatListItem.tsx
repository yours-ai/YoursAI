import { Assignment } from "@/components/themes/chocolate/messages/ChatList.tsx";
import { Link } from "react-router-dom";

interface Props {
  isSelected: boolean;
  assignment: Assignment;
  onClick: () => void;
}

export default function ChatListItem({
  isSelected = false,
  assignment,
  onClick,
}: Props) {
  return (
    <Link
      to={`/main/messages/${assignment.id}`}
      onClick={onClick}
      className={`flex h-[90px] w-full flex-row items-center justify-stretch ${isSelected ? "bg-[#F5F5F5]" : ""} cursor-pointer px-5 transition-colors duration-150 hover:bg-[#F5F5F5]`}
    >
      <img
        className="size-[60px] rounded-[20px] border border-[#A3A3A3]/30"
        src={assignment.profileImage}
        alt="chat list item profile image"
      />
      <div className="flex grow flex-col items-start justify-center pl-3 pr-[22px]">
        <div className="text-[18px]/[16px] font-semibold">
          {assignment.name}
        </div>
        <div className="text-[14px] text-[#A3A3A3]">
          {assignment.lastMessage.message}
        </div>
      </div>
      <div className="h-full pt-6 text-12p font-light text-[#A3A3A3]">
        {assignment.lastMessage.time}
      </div>
    </Link>
  );
}
