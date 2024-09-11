import FriendCard from "@/routes/main/friends/FriendCard.tsx";
import { Character } from "@/routes/main/friends/page.tsx";

function FriendsList({ characters }: { characters: Character[] }) {
  return (
    <div className="grid w-full grid-cols-2 gap-[16px]">
      {characters.map((character, index) => (
        <FriendCard
          key={index}
          name={character.name}
          image={character.image}
          description={character.description}
        />
      ))}
    </div>
  );
}

export default FriendsList;
