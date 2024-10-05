import { useRightPrimaryPage } from "@/routes/main/hooks.ts";
import { ReactNode, useState } from "react";
import {
  PiCaretLeftBold,
  PiChatCircleFill,
  PiGearSixFill,
  PiPlusCircleFill,
} from "react-icons/pi";
import { Dialog, DialogButton } from "konsta/react";
import { Link, useParams } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";
import DefaultErrorBoundary from "@/components/common/DefaultErrorBoundary.tsx";
import { exportFile } from "@/domain/utils/fileImportExport.ts";
import { useLiveQuery } from "dexie-react-hooks";
import { useDb } from "@/contexts/DbContext.ts";
import { characterSchema } from "@/domain/character/models.ts";

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
      className={`flex w-[100px] flex-col items-center justify-center gap-[6px] rounded-[8px] bg-black/40 py-[10px] phone:w-[132px] ${disabled ? "text-white/25" : "cursor-pointer text-white hover:bg-black/50"} text-white backdrop-blur-sm duration-150`}
    >
      <div className="text-[30px] phone:text-34p">{icon}</div>
      <span className="text-12p leading-[18px] phone:text-14p">{label}</span>
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
    <div className="w-full border-b  border-border p-[10px] phone:w-[417px]">
      <div className="text-14p">{label}</div>
      <div className="text-16p text-accentBlue">{content}</div>
    </div>
  );
};

export function Component() {
  useRightPrimaryPage();
  const db = useDb();
  const { friendId } = useParams();
  const { t } = useTranslation("pages/friends");
  const [deleteDialogOpened, setDeleteDialogOpened] = useState<boolean>(false);
  const [exportDialogOpened, setExportDialogOpened] = useState<boolean>(false);

  const characterData = useLiveQuery(() => {
    if (friendId) {
      return db.characters.where("slug").equals(friendId).first();
    }
  }, [friendId]);

  const handleCharacterExport = async () => {
    const blob = await exportFile(characterData, characterSchema);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${characterData?.slug}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="size-full">
      {characterData && (
        <>
          <div className="relative flex items-center justify-center bg-tabUnselected pb-[30px] pt-[50px]">
            <div className="absolute inset-0 z-0 overflow-hidden">
              <img
                src={characterData.bgImage}
                alt="background-image"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <Link to="../">
              <div className="absolute left-[10px] top-[10px] text-24p text-accentBlue">
                <PiCaretLeftBold />
              </div>
            </Link>
            <div className="relative z-10 flex flex-col items-center gap-[18px]">
              <img
                src={characterData.image}
                alt="sena-profile-image"
                className="size-[120px] rounded-full object-cover object-center"
                style={{
                  boxShadow: "4px 4px 13.5px 0px rgba(0, 0, 0, 0.25)",
                }}
              />
              <div
                className="text-[36px] text-white"
                style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
              >
                {characterData?.name}
              </div>
              <div className="mx-[15px] flex gap-[10px]">
                <FriendsButton
                  icon={<PiChatCircleFill />}
                  label={t("friendButton.continue")}
                  disabled
                />
                <FriendsButton
                  icon={<PiPlusCircleFill />}
                  label={t("friendButton.restart")}
                />
                <Link to="settings">
                  <FriendsButton
                    icon={<PiGearSixFill />}
                    label={t("friendButton.custom")}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-[22px] flex flex-col items-center px-[10px] phone:px-0">
            <ContactItem
              label={t("contactItem.creator")}
              content={characterData.creator}
            />
            <ContactItem
              label={t("contactItem.creatorIntro")}
              content={characterData.bio}
            />
            <div className="w-full p-[10px] text-14p text-accentBlue duration-150 hover:text-accentBlueHover phone:w-[417px]">
              <span
                className="cursor-pointer"
                onClick={() => setExportDialogOpened(true)}
              >
                캐릭터 Export
              </span>
            </div>
            <div className="w-full  p-[10px] text-14p text-red duration-150 hover:text-redHover phone:w-[417px]">
              <span
                className="cursor-pointer"
                onClick={() => setDeleteDialogOpened(true)}
              >
                {t("delete.label")}
              </span>
            </div>
          </div>
        </>
      )}

      <Dialog
        opened={deleteDialogOpened}
        onBackdropClick={() => setDeleteDialogOpened(false)}
        title={
          <p className="text-16p font-semibold leading-[22px]">
            {t("delete.dialog.title")}
          </p>
        }
        content={
          <p className="text-13p leading-[18x]">
            <Trans t={t} i18nKey="delete.dialog.content">
              대화 기록이 완전히 삭제되며,
              <br></br>
              복구할 수 없습니다.
            </Trans>
          </p>
        }
        buttons={
          <>
            <DialogButton onClick={() => setDeleteDialogOpened(false)}>
              {t("delete.dialog.no")}
            </DialogButton>
            <DialogButton
              onClick={() => setDeleteDialogOpened(false)}
              className="font-semibold text-red"
            >
              {t("delete.dialog.yes")}
            </DialogButton>
          </>
        }
      />
      <Dialog
        opened={exportDialogOpened}
        onBackdropClick={() => setExportDialogOpened(false)}
        title={
          <p className="text-16p font-semibold leading-[22px]">
            "{characterData?.name}"를(을) Export 하시겠어요?
          </p>
        }
        content={
          <p className="text-13p leading-[18x]">
            JSON 파일 형태로
            <br></br>
            캐릭터 파일을 다운받을 수 있습니다.
          </p>
        }
        buttons={
          <>
            <DialogButton onClick={() => setExportDialogOpened(false)}>
              아니요
            </DialogButton>
            <DialogButton
              onClick={async () => {
                await handleCharacterExport();
                setExportDialogOpened(false);
              }}
              className="text-accentBlue"
            >
              네
            </DialogButton>
          </>
        }
      />
    </div>
  );
}

Component.displayName = "FriendsDetailPage";

export const ErrorBoundary = DefaultErrorBoundary;
