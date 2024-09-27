import TopTitle from "@/components/themes/chocolate/TopTitle.tsx";
import CharacterListItem from "@/components/themes/chocolate/CharacterListItem.tsx";
import { PiUserPlusBold } from "react-icons/pi";

export interface Character {
  id: number;
  profileImage: string;
  name: string;
  creator: string;
  creatorInfo: string;
}

const characters: Character[] = [
  {
    id: 1,
    profileImage: "/mock/jiah.jpg",
    name: "지아",
    creator: "키리코",
    creatorInfo: "키리코의 친구",
  },
  {
    id: 2,
    profileImage: "/mock/kiriko.jpg",
    name: "키리코",
    creator: "지아",
    creatorInfo: "지아의 친구",
  },
  {
    id: 3,
    profileImage: "/mock/sena.jpg",
    name: "세나",
    creator: "유나",
    creatorInfo: "유나의 친구",
  },
  {
    id: 4,
    profileImage: "/mock/yuna.jpg",
    name: "유나",
    creator: "세나",
    creatorInfo: "세나의 친구",
  },
];

export default function FriendList() {
  return (
    <div className="w-full">
      <TopTitle
        title="친구"
        action={<PiUserPlusBold className="size-[22px]" />}
      />
      <div className="flex w-full flex-col justify-center">
        {characters.map((character) => (
          <CharacterListItem character={character} />
        ))}
      </div>
    </div>
  );
}
