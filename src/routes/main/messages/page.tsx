import { Outlet, useOutletContext } from "react-router-dom";
import SplitViewPage from "@/routes/main/SplitViewPage.tsx";
import { useLeftPrimaryPage } from "@/routes/main/hooks.ts";
import TabTitle from "@/components/TabTitle.tsx";
import MessageItemList from "@/routes/main/messages/MessageItemList.tsx";

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

export function Component() {
  useLeftPrimaryPage("/main/messages");
  const outletContext = useOutletContext();

  return (
    <SplitViewPage
      leftPane={
        <div>
          <TabTitle title="메시지" />
          <div className="mt-[12px] w-full px-4">
            {messages.length > 0 ? (
              <MessageItemList messages={messages} />
            ) : (
              <div className="mt-[50px] w-full text-center text-16p">
                <span className="text-black/50">
                  아직 나눈 대화가 없습니다...
                </span>
                🥲
                <br />
                <span className="text-black/50">
                  친구탭에서 새로운 대화를 시작해보세요!
                </span>
              </div>
            )}
          </div>
        </div>
      }
      rightPane={<Outlet context={outletContext} />}
    />
  );
}

Component.displayName = "MessagesPage";
