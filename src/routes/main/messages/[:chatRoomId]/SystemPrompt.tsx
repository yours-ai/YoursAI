function formatTime() {
  const currentTime = new Date();
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const month = currentTime.getMonth() + 1;
  const date = currentTime.getDate();
  const day = days[currentTime.getDay()];

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");

  const ampm = hours >= 12 ? "오후" : "오전";
  const hourIn12 = hours % 12 || 12;

  return (
    <span className="text-14p">
      <span className="font-bold">
        {month}월 {date}일 ({day})
      </span>{" "}
      {ampm} {hourIn12}:{minutes}
    </span>
  );
}

export default function SystemPrompt({
  text,
  time = false,
}: {
  text?: string;
  time?: boolean;
}) {
  return (
    <div className="w-full px-[40px] py-[30px] text-center text-16p leading-[22px] text-black/50 tablet:px-[80px]">
      {text}
      {time && formatTime()}
    </div>
  );
}
