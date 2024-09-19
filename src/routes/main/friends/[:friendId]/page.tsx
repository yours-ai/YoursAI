import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { ReactNode, useState } from "react";
import {
  PiChatCircleFill,
  PiGearSixFill,
  PiPlusCircleFill,
} from "react-icons/pi";
import { Dialog, DialogButton } from "konsta/react";
import { Link, useParams } from "react-router-dom";

const FriendsButton = ({
  icon,
  label,
  disabled,
}: {
  icon: ReactNode;
  label: string;
  disabled?: boolean;
}) => {
  return (
    <div
      className={`flex w-[132px] flex-col items-center justify-center gap-[6px] rounded-[8px] bg-black/40 py-[10px] ${disabled ? "text-white/25" : "cursor-pointer text-white hover:bg-black/50"} text-white duration-150`}
    >
      <div className="text-34p ">{icon}</div>
      <span className="text-14p leading-[18px]">{label}</span>
    </div>
  );
};

const ContactItem = ({
  label,
  content,
}: {
  label: string;
  content: string;
}) => {
  return (
    <div className="w-[417px] border-b border-border p-[10px]">
      <div className="text-14p">{label}</div>
      <div className="text-16p text-accentBlue">{content}</div>
    </div>
  );
};

export function Component() {
  const { friendId } = useParams();
  useRightPrimaryPage();
  const [deleteDialogOpened, setDeleteDialogOpened] = useState<boolean>(false);

  return (
    <div className="size-full">
      <div className="flex items-center justify-center bg-tabUnselected pb-[30px] pt-[50px]">
        <div className="flex flex-col items-center gap-[18px]">
          <img
            src="/sena.png"
            alt="sena-profile-image"
            className="size-[120px] rounded-full object-cover object-center"
          />
          <div className="text-[36px] text-white">{friendId}</div>
          <div className="flex gap-[10px]">
            <FriendsButton
              icon={<PiChatCircleFill />}
              label="이어서 대화"
              disabled
            />
            <FriendsButton icon={<PiPlusCircleFill />} label="처음부터 대화" />
            <Link to="settings">
              <FriendsButton
                icon={<PiGearSixFill />}
                label="대화 설정 커스텀"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-[22px] flex flex-col items-center">
        <ContactItem label="제작자" content="narayo9" />
        <ContactItem
          label="제작자 한 줄 소개"
          content="조용하고 따듯한 마음을 가진, 독서를 즐기는 소녀입니다."
        />
        <div
          className="w-[417px] cursor-pointer p-[10px] text-14p text-red duration-150 hover:text-redHover"
          onClick={() => setDeleteDialogOpened(true)}
        >
          캐릭터 삭제
        </div>
      </div>
      <Dialog
        opened={deleteDialogOpened}
        onBackdropClick={() => setDeleteDialogOpened(false)}
        title={
          <p className="text-16p font-semibold leading-[22px]">
            정말 캐릭터를 삭제하시겠어요?
          </p>
        }
        content={
          <p className="text-13p leading-[18x]">
            대화 기록이 완전히 삭제되며,
            <br />
            복구할 수 없습니다.
          </p>
        }
        buttons={
          <>
            <DialogButton onClick={() => setDeleteDialogOpened(false)}>
              아니요
            </DialogButton>
            <DialogButton
              onClick={() => setDeleteDialogOpened(false)}
              className="font-semibold text-red"
            >
              네, 삭제할게요
            </DialogButton>
          </>
        }
      />
    </div>
  );
}

Component.displayName = "FriendsDetailPage";
