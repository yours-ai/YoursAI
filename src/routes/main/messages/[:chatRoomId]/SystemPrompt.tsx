import { useCurrentTime } from "@/hooks/useCurrentTime.ts";

export default function SystemPrompt({
  text,
  time = false,
}: {
  text?: string;
  time?: boolean;
}) {
  const { boldPart, regularPart } = useCurrentTime();
  return (
    <div className="w-full px-[40px] py-[30px] text-center text-16p leading-[22px] text-black/50 tablet:px-[80px]">
      {text}
      {time && (
        <span className="text-14p">
          {" "}
          <span className="font-bold">{boldPart}</span> {regularPart}{" "}
        </span>
      )}
    </div>
  );
}
