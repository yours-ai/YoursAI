import FriendDetailHeader from "@/themes/theFruit/FriendDetailHeader";
import FriendDetailInfo from "@/themes/theFruit/FriendDetailInfo";
import { FriendDetailProps } from "@/themes/models/FriendDetail";

export default function FriendDetail({ selectedCharacter }: FriendDetailProps) {
  return (
    <div className="flex size-full flex-col">
      <FriendDetailHeader selectedCharacter={selectedCharacter} />
      <FriendDetailInfo selectedCharacter={selectedCharacter} />
    </div>
  );
}
