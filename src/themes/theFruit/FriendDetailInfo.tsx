import { Character } from "@/themes/models";

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex min-w-[320px] flex-col justify-start border-b border-border p-2.5">
      <div className="text-14p">{label}</div>
      <div className="text-16p text-accentBlue">{value}</div>
    </div>
  );
}

export default function FriendDetailInfo({
  selectedCharacter,
}: {
  selectedCharacter: Character;
}) {
  const deleteCharacter = () => {
    alert("캐릭터가 삭제되었습니다."); //TODO: 삭제 pop up 띄어야함
  };
  return (
    <div className="flex grow flex-col items-center justify-start bg-white pt-5">
      <div>
        <DetailRow label="제작자" value={selectedCharacter.creator.name} />
        <DetailRow
          label="제작자 한줄소개"
          value={selectedCharacter.creator.introduction}
        />
        <button
          className="cursor-pointer p-2.5 text-14p text-red"
          onClick={deleteCharacter}
        >
          캐릭터 삭제
        </button>
      </div>
    </div>
  );
}
