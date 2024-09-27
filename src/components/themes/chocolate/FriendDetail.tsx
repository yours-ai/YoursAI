import { FriendDetailProps } from "@/components/themes/models/FriendDetail.ts";
import { IoChatbubble } from "react-icons/io5";
import { FaCirclePlus, FaGear } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { PiCaretLeft } from "react-icons/pi";

interface ActionButtonProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}

function ActionButton({ icon, title, onClick }: ActionButtonProps) {
  return (
    <div
      className={`flex grow cursor-pointer flex-col items-center justify-center gap-2`}
      onClick={onClick}
    >
      {icon}
      <div className={`text-[14px] font-light`}>{title}</div>
    </div>
  );
}

export default function FriendDetail({ friendId }: FriendDetailProps) {
  console.log(friendId); // TODO: Remove this line
  const navigate = useNavigate();
  return (
    <div className="flex size-full bg-[#798490] text-white">
      <div className={`flex w-full flex-col justify-between`}>
        <div className={`flex w-full flex-row justify-between p-4`}>
          <Link
            className={`flex flex-row items-center justify-start`}
            to={"../"}
          >
            <PiCaretLeft className={`size-7`} />
          </Link>
          <div
            className={`flex size-[26px] cursor-pointer items-center justify-center rounded-full border-[1.5px]`}
            onClick={() => alert("캐릭터 삭제")}
          >
            <FaRegTrashAlt className={`size-4`} />
          </div>
        </div>
        <div className={`flex w-full flex-col items-center`}>
          <div className={`mb-5 flex flex-col items-center gap-2`}>
            <img
              className={`size-[150px] rounded-[60px] border border-[#A3A3A3]/30`}
              src={"/mock/jiah.jpg"}
              alt="chat list item profile image"
            />
            <div>마키짱</div>
            <div>
              <div className={`text-center`}>
                제작자: narayo
                <br />
                제작자 한줄소개: 안녕하세요 반갑습니다. 저는 사람입니다.
              </div>
            </div>
          </div>
          <div
            className={`flex w-full flex-row border-t border-[#949DA6] p-8 text-center`}
          >
            <ActionButton
              icon={<IoChatbubble className={`size-6 text-white`} />}
              title={"이어서 대화"}
              onClick={() => null}
            />
            <ActionButton
              icon={<FaCirclePlus className={`size-6 text-white`} />}
              title={"처음부터 대화"}
              onClick={() => null}
            />
            <ActionButton
              icon={<FaGear className={`size-6 text-white`} />}
              title={"대화 설정 커스텀"}
              onClick={() => navigate(`./settings`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
