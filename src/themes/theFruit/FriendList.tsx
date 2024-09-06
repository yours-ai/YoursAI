import MainNavigation from "@/themes/theFruit/MainNavigation";
import CharacterListItem from "@/themes/theFruit/CharacterListItem";
import { FriendListProps } from "@/themes/models/FriendList";

export default function FriendList({
  friendList,
  selectedCharacter,
  onClick,
}: FriendListProps) {
  return (
    <MainNavigation title="친구" actionButton="새 캐릭터 추가">
      <div>
        {friendList.map((character, index) => (
          <CharacterListItem
            key={index}
            character={character}
            onClick={() => onClick(character)}
            selectedCharacter={selectedCharacter}
          />
        ))}
      </div>
    </MainNavigation>
  );
}
