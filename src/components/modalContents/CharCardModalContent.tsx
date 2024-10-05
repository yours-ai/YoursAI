import { useSelector } from "react-redux";
import { RootState } from "@/redux/store.ts";

export default function CharCardModalContent() {
  const { name, description, imageLink } = useSelector(
    (state: RootState) => state.characterCard,
  );
  return (
    <div className="flex flex-col items-center px-[44px]">
      <div className="flex w-[360px] items-center gap-4 rounded-[8px] border-[0.5px] border-border px-4 py-[11px]">
        <img
          src={imageLink}
          alt="card-image"
          className="size-[54px] rounded-full"
        />
        <div className="flex flex-col">
          <span className="text-16p font-semibold leading-[22px]">{name}</span>
          <span className="text-14p leading-[20px] text-black/50">
            {description}
          </span>
        </div>
      </div>
      <div className="mt-[20px] text-16p leading-[22px]">
        {name}를 친구로 추가합니다.
      </div>
    </div>
  );
}
