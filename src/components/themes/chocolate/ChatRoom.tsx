import { Message } from "@/components/themes/chocolate/ChatList.tsx";
import ChatBubble from "@/components/themes/chocolate/ChatBubble.tsx";
import { IoMenuOutline } from "react-icons/io5";
import TopBar from "@/components/themes/chocolate/TopBar.tsx";
import ChatInput from "@/components/themes/chocolate/ChatInput.tsx";
import { ChatRoomProps } from "@/components/themes/models/ChatRoom.ts";

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
  {
    message:
      "아아아아아아아 안녕 나는 김치를 좋아했었고 나는 잘 모르겠는데, 눈이 조금 따가워서 아이드롭을 넣고있는 중이야. 그럼에도 불구하고는 올도우도우도우",
    name: "유나",
    profileImage: "/mock/yuna.jpg",
    time: "오후 4:00",
    role: "user",
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
    message:
      "아아아아아아아 안녕 나는 김치를 좋아했었고 나는 잘 모르겠는데, 눈이 조금 따가워서 아이드롭을 넣고있는 중이야. 그럼에도 불구하고는 올도우도우도우",
    name: "유나",
    profileImage: "/mock/yuna.jpg",
    time: "오후 4:00",
    role: "user",
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

export default function ChatRoom({ chatRoomId }: ChatRoomProps) {
  console.log(chatRoomId); // TODO <- 삭제
  return (
    <div className={`relative size-full bg-[#ABC1D1]`}>
      <TopBar
        title={"멋쟁이와 대화를 해봐요"}
        backLink={"../"}
        leftProps={4}
        action={<IoMenuOutline className={`size-7 text-opacity-100`} />}
      />
      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col items-stretch gap-2 py-4">
          {messages.map((message) => (
            <ChatBubble key={message.message} message={message} /> //  TODO: 적절한 needProfile, needBubbleTail를 넘겨주는 로직이 필요함
          ))}
        </div>
      </div>
      <ChatInput />
    </div>
  );
}
