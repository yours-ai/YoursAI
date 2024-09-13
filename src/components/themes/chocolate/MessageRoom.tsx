import { MessageRoomProps } from "@/components/themes/models/MessageRoom.ts";
import { Message } from "@/components/themes/chocolate/MessageList.tsx";
import MessageBubble from "@/components/themes/chocolate/MessageBubble.tsx";

const messages: Message[] = [
  {
    message: "안녕하세요",
    name: "지아",
    profileImage: "/mock/jiah.jpg",
    time: "오후 1:00",
    role: "assistant",
  },
  {
    message: "으아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ",
    name: "유나",
    profileImage: "/mock/yuna.jpg",
    time: "오후 2:00",
    role: "user",
  },
  {
    message:
      "안녕하세요 님 기ㅣㅁㄴㅇㅁㄴㅇㅁ누ㅡㅇㅁ나운머ㅜ아ㅓㅁ뉴 ㄴ머우 ㅁ누어ㅏㅁ ㅋㅋ",
    name: "지아",
    profileImage: "/mock/jiah.jpg",
    time: "오후 3:00",
    role: "assistant",
  },
  {
    message:
      "아아아아아아아 안녕 나는 김치를 좋아했었고 나는 잘 모르겠는데, 눈이 조금 따가워서 아이드롭을 넣고있는 중이야. 그럼에도 불구하고는 올도우도우도우",
    name: "유나",
    profileImage: "/mock/yuna.jpg",
    time: "오후 4:00",
    role: "user",
  },
  {
    message: "안녕하세요",
    name: "지아",
    profileImage: "/mock/jiah.jpg",
    time: "오후 1:00",
    role: "assistant",
  },
  {
    message: "으아ㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏㅏ",
    name: "유나",
    profileImage: "/mock/yuna.jpg",
    time: "오후 2:00",
    role: "user",
  },
  {
    message:
      "안녕하세요 님 기ㅣㅁㄴㅇㅁㄴㅇㅁ누ㅡㅇㅁ나운머ㅜ아ㅓㅁ뉴 ㄴ머우 ㅁ누어ㅏㅁ ㅋㅋ",
    name: "지아",
    profileImage: "/mock/jiah.jpg",
    time: "오후 3:00",
    role: "assistant",
  },
  {
    message:
      "아아아아아아아 안녕 나는 김치를 좋아했었고 나는 잘 모르겠는데, 눈이 조금 따가워서 아이드롭을 넣고있는 중이야. 그럼에도 불구하고는 올도우도우도우",
    name: "유나",
    profileImage: "/mock/yuna.jpg",
    time: "오후 4:00",
    role: "user",
  },
];

export default function MessageRoom({ messageRoomId }: MessageRoomProps) {
  console.log(messageRoomId); // TODO <- 삭제
  return (
    <div className="flex size-full flex-col items-stretch gap-2 bg-[#ABC1D1]">
      <div className={`h-10`} />
      {messages.map((message) => (
        <MessageBubble key={message.message} message={message} /> // TODO: 적절한 needProfile, needBubbleTail를 넘겨주는 로직이 필요함
      ))}
      <div className={`h-10`} />
    </div>
  );
}
