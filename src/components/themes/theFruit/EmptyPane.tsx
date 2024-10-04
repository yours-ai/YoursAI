import { PiHeartFill } from "react-icons/pi";

export default function EmptyPane() {
  return (
    <div className="bg-emptyBackground flex size-full items-center justify-center text-[120px]">
      <PiHeartFill className="text-black/5" />
    </div>
  );
}
