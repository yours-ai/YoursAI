import { MessageRoomProps } from "@/components/themes/models/MessageRoom.ts";
import { Message } from "@/components/themes/chocolate/MessageList.tsx";
import MessageBubble from "@/components/themes/chocolate/MessageBubble.tsx";
import { IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { PiCaretLeft } from "react-icons/pi";

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

export default function MessageRoom({ messageRoomId }: MessageRoomProps) {
  console.log(messageRoomId); // TODO <- 삭제
  return (
    <div className={`relative size-full bg-[#ABC1D1]`}>
      <div
        className={`sticky top-0 z-50 flex h-[90px] w-full flex-row items-end justify-between bg-[#ABC1D1]/90 px-4 pb-2`}
      >
        <Link className={`flex flex-row items-center`} to={"../"}>
          <PiCaretLeft className={`size-8 text-opacity-100`} />
          {/* TODO : 아래 동적으로*/}
          <div className={`text-[18px]`}>4</div>
        </Link>
        <div className={`text-20p font-medium text-opacity-100`}>
          멋쟁이와 대화를 해봐요
        </div>
        <Link to={"./setting"}>
          <IoMenuOutline className={`size-6 text-opacity-100`} />
        </Link>
      </div>
      <div className="flex-1 overflow-y-scroll">
        <div className="flex flex-col items-stretch gap-2 py-4">
          {messages.map((message) => (
            <MessageBubble key={message.message} message={message} /> //  TODO: 적절한 needProfile, needBubbleTail를 넘겨주는 로직이 필요함
          ))}
        </div>
      </div>
    </div>
  );
}
