"use client";

interface Character {
  firstName: string;
  shortDescription: string;
  image: string;
  creator: {
    name: string;
    introduction: string;
  };
}

import { useTheme } from "@/hooks/useTheme";
import { useState } from "react";

export default function FriendsPage() {
  const {
    components: { FriendList, FriendDetail, EmptySpace },
  } = useTheme();

  const [clickedFriend, setClickedFriend] = useState<Character | null>(null);

  return (
    <>
      <div className="flex size-full flex-row justify-between">
        <FriendList />
        {clickedFriend ? <FriendDetail /> : <EmptySpace />}
      </div>
    </>
  );
}
