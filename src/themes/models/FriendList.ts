import { Character } from "@/themes/models/index";

export interface FriendListProps {
  friendList: Character[];
  selectedCharacter: Character | null;
  onClick: (character: Character) => void;
}
