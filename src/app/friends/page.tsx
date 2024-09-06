"use client";

import { useTheme } from "@/hooks/useTheme";
import { useState } from "react";
import { Character } from "@/themes/models";

const mockCharacter: Character = {
  firstName: "세나",
  shortDescription: "오늘도 꽃처럼 빛나는 하루🌸",
  image: "/mock/sena.jpg",
  creator: {
    name: "narayo9",
    introduction: "조용하고 따뜻한 마음을 가진, 독서를 즐기는 소녀입니다.",
  },
  hasChatted: false,
};

export default function FriendsPage() {
  const {
    components: { FriendList, FriendDetail, EmptySpace },
  } = useTheme();

  const [clickedFriend, setClickedFriend] = useState<Character | null>(null);

  return (
    <>
      <div className="flex size-full flex-row justify-between">
        <FriendList />
        {clickedFriend ? (
          <FriendDetail selectedCharacter={clickedFriend} />
        ) : (
          <EmptySpace />
        )}
      </div>
    </>
  );
}
