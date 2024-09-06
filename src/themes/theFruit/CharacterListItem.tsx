import { Character } from "@/themes/models";
import Image from "next/image";
import { useMemo } from "react";

interface Props {
  character: Character;
  selectedCharacter: Character | null;
  onClick: () => void;
  hasUnreadChat?: boolean;
}

export default function CharacterListItem({
  character,
  selectedCharacter,
  onClick,
  hasUnreadChat = false,
}: Props) {
  const isSelected = useMemo(
    () => selectedCharacter?.firstName === character.firstName,
    [selectedCharacter, character],
  );
  return (
    <div
      className="flex w-full cursor-pointer items-center justify-center bg-white px-4"
      onClick={onClick}
    >
      <div
        className={`${isSelected ? "bg-selected" : null} flex w-full flex-row justify-between rounded-[10px] transition-colors duration-300 hover:bg-selected`}
      >
        <div className="flex w-[35px] shrink flex-row items-center justify-center">
          <div
            className={`${hasUnreadChat ? "visible" : "invisible"}size-[11px] rounded-full bg-accentBlue `}
          />
        </div>
        <div className="mr-[12px] flex grow flex-row gap-3 border-b py-[15.5px]">
          <div className="avatar">
            <div className="mask mask-circle w-[45px]">
              <Image
                src={character.image}
                alt="selected character profile image"
                width={45}
                height={45}
              />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <div className="text-[17px]/[22px] text-primaryLabel">
              {character.firstName}
            </div>
            <div className="truncate text-[15px]/[20px] text-secondary">
              {character.shortDescription}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
