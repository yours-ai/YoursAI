interface Props {
  message: string;
  needBubbleTail: boolean;
  isFromUser: boolean;
}

export default function ChatBubbleText({
  message,
  needBubbleTail,
  isFromUser,
}: Props) {
  return (
    <div
      className={`relative flex flex-row ${isFromUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`${!needBubbleTail ? "hidden" : ""} ${isFromUser ? "right-[4px] rotate-[30deg] rounded-l-[10px] rounded-r-none" : "left-[4px] rotate-[-30deg] rounded-l-none rounded-r-[10px]"} absolute top-0 z-10 h-[18px] w-[8px] bg-white `}
      />
      <div
        className={`${!needBubbleTail ? "hidden" : ""} ${isFromUser ? "right-[-0.5px] rotate-[25deg] rounded-l-[20px] rounded-r-none" : "left-[-0.5px] rotate-[-25deg] rounded-l-none rounded-r-[20px]"} absolute top-[1.2px] z-10 h-[20px] w-[8px] bg-[#ABC1D1] `}
      />
      <div
        className={`${!needBubbleTail ? "hidden" : ""} ${isFromUser ? "right-[8px]" : "left-[8px]"} absolute top-0 z-20 size-[30px] rounded-[17px] bg-white`}
      />
      <div
        className={`top-0 z-40 mx-2 rounded-[17px] bg-white p-3 text-16p text-black`}
      >
        {message}
      </div>
    </div>
  );
}
