import MessageItem from "@/routes/main/messages/MessageItem.tsx";
import { Message } from "@/routes/main/messages/page.tsx";

function MessageItemList({ messages }: { messages: Message[] }) {
  return (
    <div className="flex flex-col">
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

export default MessageItemList;
