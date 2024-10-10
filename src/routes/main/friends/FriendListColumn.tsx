import FriendCard from "@/routes/main/friends/FriendCard.tsx";
import { useEffect, useRef, useState } from "react";
import { Character } from "@/components/themes/theFruit/friends/FriendList.tsx";

export default function FriendListColumn({
  characters,
}: {
  characters: Character[];
}) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [divWidth, setDivWidth] = useState<number | undefined>(
    divRef.current?.offsetWidth,
  );
  const [changeToSingleColumn, setChangeToSingleColumn] =
    useState<boolean>(false);
  const [isWidthInitialized, setIsWidthInitialized] = useState<boolean>(false);

  useEffect(() => {
    const updateDivWidth = () => {
      if (divRef.current) {
        setDivWidth(divRef.current.offsetWidth);
        setIsWidthInitialized(true);
      }
    };
    updateDivWidth();
    window.addEventListener("resize", updateDivWidth);
  }, []);

  useEffect(() => {
    if (divWidth && divWidth < 340) {
      setChangeToSingleColumn(true);
    } else {
      setChangeToSingleColumn(false);
    }
  }, [divWidth, setChangeToSingleColumn]);

  return (
    <div
      ref={divRef}
      className={`grid w-full gap-[10px] pb-[calc(20px+env(safe-area-inset-bottom))] ${changeToSingleColumn ? "grid-cols-1" : "grid-cols-2"}`}
    >
      {isWidthInitialized && (
        <>
          {characters.map((character, index) => (
            <FriendCard
              key={index}
              name={character.name}
              slug={character.slug}
              image={character.image}
              description={character.description}
            />
          ))}
        </>
      )}
    </div>
  );
}
