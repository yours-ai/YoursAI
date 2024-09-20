import { FriendsDetailProps } from "@/components/themes/models/FriendsDetail.ts";

export default function FriendDetail({ friendId }: FriendsDetailProps) {
  console.log(friendId); // TODO: Remove this line
  return (
    <div className="flex size-full bg-[#798490]">
      <div className={`flex w-full flex-col justify-between`}>
        <div className={`flex w-full flex-row justify-between`}>
          <div>뒤로가기</div>
          <div className={`flex flex-row justify-between gap-2`}>
            <div>선물</div>
            <div>별</div>
            <div>더보기</div>
          </div>
        </div>
        <div className={`flex w-full flex-col items-center`}>
          <div className={`flex flex-col items-center`}>
            <img
              className={`size-[150px] rounded-[60px] border border-[#A3A3A3]/30`}
              src={"/mock/jiah.jpg"}
              alt="chat list item profile image"
            />
            <div>이름</div>
          </div>
          <div className={`flex w-full flex-row`}>
            <div className={`grow`}>이어서 대화</div>
            <div className={`grow`}>처음부터 대화</div>
            <div className={`grow`}>대화 설정 커스텀</div>
          </div>
        </div>
      </div>
    </div>
  );
}
