import MessageItem from "@/routes/main/messages/MessageItem.tsx";
import { Message } from "@/components/themes/theFruit/messages/ChatList.tsx";

export default function MessageItemList({ messages }: { messages: Message[] }) {
  return (
    <div className="flex flex-col pb-[calc(10px+env(safe-area-inset-bottom))]">
      {messages.map((message) => (
        <MessageItem
          name={message.name}
          image={message.image}
          message={message.message}
          time={message.time}
        />
      ))}
    </div>
  );
}
