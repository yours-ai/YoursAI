"use client";

import { useTheme } from "@/hooks/useTheme";
import { useCallback, useState } from "react";
import { Character } from "@/themes/models";

const mockCharacter1: Character = {
  firstName: "세나",
  shortDescription: "오늘도 꽃처럼 빛나는 하루🌸",
  image: "/mock/sena.jpg",
  creator: {
    name: "narayo9",
    introduction: "조용하고 따뜻한 마음을 가진, 독서를 즐기는 소녀입니다.",
  },
  hasChatted: false,
};

const mockCharacter2: Character = {
  firstName: "김지아",
  shortDescription: "생각이 많아지는 날, 잠시 멍하니... 😌",
  image: "/mock/jiah.jpg",
  creator: {
    name: "arsture",
    introduction: "싸가지 없는 귀여운 여자아이",
  },
  hasChatted: true,
};

const mockCharacter3: Character = {
  firstName: "유나",
  shortDescription: "아 개 귀찮네",
  image: "/mock/yuna.jpg",
  creator: {
    name: "arsture",
    introduction: "알빠노 걍 만듦",
  },
  hasChatted: true,
};

const mockCharacter4: Character = {
  firstName: "키리코",
  shortDescription: "여우님이 보고 싶다",
  image: "/mock/kiriko.jpg",
  creator: {
    name: "arsture",
    introduction: "여우는 월월",
  },
  hasChatted: false,
};

export default function FriendsPage() {
  const {
    components: { FriendList, FriendDetail, EmptySpace },
  } = useTheme();

  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null,
  );

  const onClickCharacter = useCallback((character: Character) => {
    setSelectedCharacter(character);
  }, []);

  return (
    <>
      <div className="flex size-full flex-row justify-between">
        <FriendList
          friendList={[
            mockCharacter1,
            mockCharacter2,
            mockCharacter3,
            mockCharacter4,
          ]}
          selectedCharacter={selectedCharacter}
          onClick={onClickCharacter}
        />
        {selectedCharacter ? (
          <FriendDetail selectedCharacter={selectedCharacter} />
        ) : (
          <EmptySpace />
        )}
      </div>
    </>
  );
}
