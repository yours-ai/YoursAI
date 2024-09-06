import { Character } from "@/themes/models";
import Image from "next/image";
import ActionButton from "@/themes/theFruit/ActionButton";
import { PiChatCircleFill, PiGearSixFill } from "react-icons/pi";
import { HiPlusCircle } from "react-icons/hi2";

export default function FriendDetailHeader({
  selectedCharacter,
}: {
  selectedCharacter: Character;
}) {
  return (
    <div className="flex h-[377px] shrink flex-col items-center bg-tabUnselected">
      <div className="mb-[24.5px] mt-[50px] flex flex-col justify-center">
        <div className="avatar">
          <div className="mask mask-circle w-[120px]">
            <Image
              src={selectedCharacter.image}
              alt="selected character profile image"
              width={120}
              height={120}
            />
          </div>
        </div>
        <div className="pt-[18.5px] text-center text-[45px] font-normal text-white">
          {selectedCharacter.firstName}
        </div>
      </div>
      <div className="flex flex-row justify-center gap-2.5">
        {/* TODO: add onClick event*/}
        <ActionButton
          icon={
            <PiChatCircleFill
              className={`${selectedCharacter.hasChatted ? "text-white" : "text-tertiaryDark"}`}
              size={36}
            />
          }
          enabled={selectedCharacter.hasChatted}
          onClick={() => null}
          description="이어서 대화"
        />
        <ActionButton
          icon={<HiPlusCircle className="text-white" size={36} />}
          enabled={true}
          onClick={() => null}
          description="처음부터 대화"
        />
        <ActionButton
          icon={<PiGearSixFill className="text-white" size={36} />}
          enabled={true}
          onClick={() => null}
          description="대화 설정 커스텀"
        />
      </div>
    </div>
  );
}
