import { PiHeartFill } from "react-icons/pi";

export default function EmptyPane() {
  return (
    <div className="flex size-full items-center justify-center bg-emptyBackground text-[120px]">
      <PiHeartFill className="text-black/5" />
    </div>
  );
}
