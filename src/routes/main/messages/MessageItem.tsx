import { Link } from "react-router-dom";
import { Message } from "@/components/themes/theFruit/ChatList.tsx";

export default function MessageItem({ name, image, message, time }: Message) {
  return (
    <Link to={"/main/messages/123"}>
      <div className="flex w-full rounded-[10px] pl-[26px] pr-[16px] duration-150 hover:bg-[#C6C6C8]/60">
        <div className="flex h-[76px] w-full gap-[10px] border-b-[0.5px] border-[#C6C6C8]/60 py-[7px]">
          <div className="flex h-full w-[62px] shrink-0 items-center justify-center">
            <img
              src={image}
              className="size-[56px] rounded-full object-cover object-center"
              alt="message-image"
            />
          </div>
          <div className="flex w-full flex-col">
            <div className="flex justify-between">
              <span className="text-18p font-semibold leading-[22px]">
                {name}
              </span>
              <span className="text-16p leading-[20px] text-black/50">
                {time}
              </span>
            </div>
            <div className="line-clamp-2 text-ellipsis text-16p leading-[20px] text-black/50">
              {message}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
