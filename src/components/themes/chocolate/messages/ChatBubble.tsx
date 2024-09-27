import { Message } from "./ChatList.tsx";
import ChatBubbleText from "@/components/themes/chocolate/messages/ChatBubbleText.tsx";

interface Props {
  message: Message;
  needProfile?: boolean;
  needBubbleTail?: boolean;
  isFromUser?: boolean;
}

export default function ChatBubble({
  message,
  needProfile = false,
  needBubbleTail = false,
  isFromUser = false,
}: Props) {
  console.log(needProfile); // TODO <- 삭제
  return (
    <div
      className={`flex w-full ${isFromUser ? "flex-row-reverse" : "flex-row"} justify-start`}
    >
      <img
        className={`${isFromUser ? "hidden" : ""} ml-3 mr-1 size-[40px] rounded-[17px] border border-[#A3A3A3]/30`}
        src={message.profileImage}
        alt="chat list item profile image"
      />
      <div className={`flex flex-col ${isFromUser ? "mx-2" : ""}`}>
        <div
          className={`${isFromUser ? "hidden" : ""} my-1 text-[14px] text-[#535C62]`}
        >
          {message.name}
        </div>
        <div
          className={`${isFromUser ? "ml-2 flex-row-reverse" : "mr-2 flex-row"} flex items-end`}
        >
          <ChatBubbleText
            message={message.message}
            needBubbleTail={needBubbleTail}
            isFromUser={isFromUser}
          />
          <div
            className={`${isFromUser ? "text-end" : "text-start"} min-w-16 text-12p text-[#535C62]`}
          >
            {message.time}
          </div>
        </div>
      </div>
    </div>
  );
}
