import { ChatRoomProps } from "@/components/themes/models/ChatRoom.ts";

export default function ChatRoom({ chatRoomId }: ChatRoomProps) {
  return <div>{chatRoomId}</div>;
}
