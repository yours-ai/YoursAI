import TabAction from "@/components/common/TabAction.tsx";
import TabTitle from "@/components/common/TabTitle.tsx";
import MessageItemList from "@/components/themes/theFruit/messages/MessageItemList.tsx";
import { useTranslation } from "react-i18next";

export interface Message {
  name: string;
  image: string;
  message: string;
  time: string;
}

const messages = [
  {
    name: "세나",
    image: "/sena.png",
    message: "근데 왜 그러는거야? 너 원래 그런 사람 아니었잖아...",
    time: "8:06AM",
  },
  {
    name: "김지아",
    image: "/jia.png",
    message: "지나야 채원이보다 너가 더 좋아",
    time: "8:06AM",
  },
  {
    name: "애린",
    image: "/aerin.jpg",
    message:
      "오늘도 메벤을 눈팅하는 신창섭 본섭 유저들이 리선족때문에 힘들다며 지오늘도 메벤을 눈팅하는 신창섭 본섭 유저들이 리선족때문에 힘들다며 지",
    time: "8:06AM",
  },
  {
    name: "유이",
    image: "/yui.jpg",
    message: "후라이드 한마리 시켜줭",
    time: "8:06AM",
  },
  {
    name: "세나",
    image: "/sena.png",
    message: "근데 왜 그러는거야? 너 원래 그런 사람 아니었잖아...",
    time: "8:06AM",
  },
  {
    name: "김지아",
    image: "/jia.png",
    message: "지나야 채원이보다 너가 더 좋아",
    time: "8:06AM",
  },
  {
    name: "애린",
    image: "/aerin.jpg",
    message:
      "오늘도 메벤을 눈팅하는 신창섭 본섭 유저들이 리선족때문에 힘들다며 지오늘도 메벤을 눈팅하는 신창섭 본섭 유저들이 리선족때문에 힘들다며 지",
    time: "8:06AM",
  },
  {
    name: "유이",
    image: "/yui.jpg",
    message: "후라이드 한마리 시켜줭",
    time: "8:06AM",
  },
  {
    name: "세나",
    image: "/sena.png",
    message: "근데 왜 그러는거야? 너 원래 그런 사람 아니었잖아...",
    time: "8:06AM",
  },
  {
    name: "김지아",
    image: "/jia.png",
    message: "지나야 채원이보다 너가 더 좋아",
    time: "8:06AM",
  },
  {
    name: "애린",
    image: "/aerin.jpg",
    message:
      "오늘도 메벤을 눈팅하는 신창섭 본섭 유저들이 리선족때문에 힘들다며 지오늘도 메벤을 눈팅하는 신창섭 본섭 유저들이 리선족때문에 힘들다며 지",
    time: "8:06AM",
  },
  {
    name: "유이",
    image: "/yui.jpg",
    message: "후라이드 한마리 시켜줭",
    time: "8:06AM",
  },
  {
    name: "세나",
    image: "/sena.png",
    message: "근데 왜 그러는거야? 너 원래 그런 사람 아니었잖아...",
    time: "8:06AM",
  },
  {
    name: "김지아",
    image: "/jia.png",
    message: "지나야 채원이보다 너가 더 좋아",
    time: "8:06AM",
  },
  {
    name: "애린",
    image: "/aerin.jpg",
    message:
      "오늘도 메벤을 눈팅하는 신창섭 본섭 유저들이 리선족때문에 힘들다며 지오늘도 메벤을 눈팅하는 신창섭 본섭 유저들이 리선족때문에 힘들다며 지",
    time: "8:06AM",
  },
  {
    name: "유이",
    image: "/yui.jpg",
    message: "후라이드 한마리 시켜줭",
    time: "8:06AM",
  },
  {
    name: "세나",
    image: "/sena.png",
    message: "근데 왜 그러는거야? 너 원래 그런 사람 아니었잖아...",
    time: "8:06AM",
  },
  {
    name: "김지아",
    image: "/jia.png",
    message: "지나야 채원이보다 너가 더 좋아",
    time: "8:06AM",
  },
  {
    name: "애린",
    image: "/aerin.jpg",
    message:
      "오늘도 메벤을 눈팅하는 신창섭 본섭 유저들이 리선족때문에 힘들다며 지오늘도 메벤을 눈팅하는 신창섭 본섭 유저들이 리선족때문에 힘들다며 지",
    time: "8:06AM",
  },
  {
    name: "유이",
    image: "/yui.jpg",
    message: "후라이드 한마리 시켜줭",
    time: "8:06AM",
  },
];

export default function ChatList() {
  const { t } = useTranslation("pages/msg");
  return (
    <div>
      <TabAction action={t("tabAction.title")} />
      <TabTitle title={t("tabTitle")} />
      <div className="mt-[12px] w-full px-4">
        {messages.length > 0 ? (
          <MessageItemList messages={messages} />
        ) : (
          <div className="mt-[50px] w-full text-center text-16p">
            <span className="text-black/50">{t("empty.one")}</span>
            🥲
            <br />
            <span className="text-black/50">{t("empty.two")}</span>
          </div>
        )}
      </div>
    </div>
  );
}
