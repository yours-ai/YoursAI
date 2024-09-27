import { Character } from "@/components/themes/chocolate/FriendList.tsx";
import { Link } from "react-router-dom";

interface Props {
  character: Character;
}

export default function CharacterListItem({ character }: Props) {
  return <Link to={`./${character.id}`}>이거 석류님껄로</Link>;
}
