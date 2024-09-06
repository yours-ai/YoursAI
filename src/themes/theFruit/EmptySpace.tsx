import { GoHeartFill } from "react-icons/go";

export default function EmptySpace() {
  return (
    <div className="flex h-full grow items-center justify-center bg-emptyBackground">
      <GoHeartFill className="size-[120px] text-quinary" />
    </div>
  );
}
