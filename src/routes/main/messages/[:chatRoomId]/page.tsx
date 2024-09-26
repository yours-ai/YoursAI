import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";
import ChatRoomTopBar from "@/routes/main/messages/[:chatRoomId]/ChatRoomTopBar.tsx";
import "./chat-bubble.css";
import ChatBubble from "@/routes/main/messages/[:chatRoomId]/ChatBubble.tsx";
import { Toggle } from "konsta/react";
import { PiArrowUpBold } from "react-icons/pi";
import { useEffect, useRef, useState } from "react";
import SystemPrompt from "@/routes/main/messages/[:chatRoomId]/SystemPrompt.tsx";

export interface ChatProps {
  content?: string;
  isCharacter?: boolean;
  isSystem?: boolean;
  time?: boolean;
}

const chats: ChatProps[] = [
  { content: "안녕 나는 세나라고 해!" },
  { isCharacter: true, content: "만나서 반가워!" },
  {
    isSystem: true,
    content:
      "세나는 약간 비웃는 표정이다. 표정을 정상화 시킬 필요가 있어보인다.",
  },
  { content: "대답 좀 빨리 쳐줄 수 없을까?" },
  { isSystem: true, content: "세나는... 웃고 있었다..." },
  { content: "대답 좀 빨리 쳐줄 수 없을까?" },
  { content: "대답 좀 빨리 쳐줄 수 없을까?" },
  { isCharacter: true, content: "대답 좀 빨리 쳐줄 수 없을까?" },
  { isSystem: true, time: true },
  { content: "안녕 나는 세나라고 해!" },
  { isCharacter: true, content: "만나서 반가워!" },
  {
    isSystem: true,
    content:
      "세나는 약간 비웃는 표정이다. 표정을 정상화 시킬 필요가 있어보인다.",
  },
  { content: "대답 좀 빨리 쳐줄 수 없을까?" },
  { isSystem: true, content: "세나는... 웃고 있었다..." },
  { content: "대답 좀 빨리 쳐줄 수 없을까?" },
  { content: "대답 좀 빨리 쳐줄 수 없을까?" },
  { isCharacter: true, content: "대답 좀 빨리 쳐줄 수 없을까?" },
  { isSystem: true, time: true },
  { content: "대답 좀 빨리 쳐줄 수 없을까?" },
  { content: "대답 좀 빨리 쳐줄 수 없을까?" },
];

export function Component() {
  useRightPrimaryPage();
  const [value, setValue] = useState<string>("");
  const [chatsList, setChatsList] = useState<ChatProps[]>(chats);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      const observer = new ResizeObserver(() => {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      });
      observer.observe(chatContainer);
      return () => observer.disconnect();
    }
  }, [value]);
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.key === "Enter") {
      setChatsList((prev) => [...prev, { content: value }]);
      setValue("");
    }
  };

  return (
    <div
      className="relative flex size-full flex-col"
      style={{ transform: "translateZ(0)" }}
    >
      <ChatRoomTopBar />
      <div
        ref={chatContainerRef}
        className="absolute inset-x-0 bottom-0 top-[59px] flex w-full grow justify-center overflow-auto px-[15px] phone:top-[98px] tablet:px-[80px] desktop:px-[190px]"
      >
        <div className="flex w-full max-w-[900px] flex-col items-center">
          {chatsList.map((chat) => {
            if (!chat.isSystem) {
              return (
                <ChatBubble
                  content={chat.content}
                  isCharacter={chat.isCharacter}
                />
              );
            } else {
              return <SystemPrompt time={chat.time} text={chat.content} />;
            }
          })}
          <div className="w-full py-[calc((60px+env(safe-area-inset-bottom))*0.5)] phone:py-[36px]" />
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 flex h-[calc(60px+env(safe-area-inset-bottom))] items-center justify-center bg-white/70 px-[15px] pb-[env(safe-area-inset-bottom)] backdrop-blur-3xl phone:h-[72px] phone:pb-0 tablet:px-[80px] desktop:px-[190px]">
        <div className="flex w-full items-center gap-[13px]">
          <div className="relative top-[7px] flex justify-center phone:top-[4px]">
            <span className="absolute top-[-23px] text-12p text-black/50">
              탈옥 토글
            </span>
            <Toggle checked={true} className="-my-1 k-color-green" />
          </div>
          <div className="flex w-full items-center gap-[5px]">
            <input
              placeholder="여기에 메시지 입력..."
              className="w-full rounded-[17px] border border-separator pb-[6px] pl-[12px] pr-[10px] pt-[7px] text-16p leading-[22px] outline-0 placeholder:text-16p placeholder:text-[#3C3C43]/30"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleEnter}
            />
            <div
              className={`flex size-[36px] shrink-0 items-center justify-center rounded-full bg-accentBlue text-20p text-white phone:hidden`}
              onClick={() => {
                setChatsList((prev) => [...prev, { content: value }]);
                setValue("");
              }}
            >
              <PiArrowUpBold />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Component.displayName = "ChatroomPage";

export const ErrorBoundary = DefaultErrorBoundary;
