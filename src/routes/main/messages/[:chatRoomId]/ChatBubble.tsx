import ChatBubbleWrapper from "@/routes/main/messages/[:chatRoomId]/settings/ChatBubbleWrapper.tsx";

export interface Props {
  content?: string;
  isCharacter?: boolean;
}

export default function ChatBubble({ content, isCharacter = false }: Props) {
  return (
    <ChatBubbleWrapper isCharacter={isCharacter}>
      <div
        className={`relative max-w-[75%] rounded-[16px] ${!isCharacter ? "user-bubble bg-accentBlue text-white" : "character-bubble bg-charMsgBubble text-black"} px-[14px] py-[7px] text-16p leading-[22px]`}
      >
        {content}
      </div>
    </ChatBubbleWrapper>
  );
}
