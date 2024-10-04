import { useRef, useState } from "react";
import { List, ListItem, Popover } from "konsta/react";
import { PiImages, PiPenNib } from "react-icons/pi";
import toast, { Toaster } from "react-hot-toast";
import { Trans, useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/features/globalModal/slice.ts";
import "./popover.css";
import FileAddModalContent from "@/components/modalContents/fileAddModalContent.tsx";

export default function TabAction({
  action,
  addCharacter = false,
  edit = false,
}: {
  action: string;
  addCharacter?: boolean;
  edit?: boolean;
}) {
  const [popoverOpened, setPopoverOpened] = useState<boolean>(false);
  const { t } = useTranslation("pages/friends");
  const dispatch = useDispatch();

  const popoverTargetRef = useRef<HTMLElement | null>(null);
  const togglePopover = () => {
    setPopoverOpened((prev) => !prev);
  };
  return (
    <>
      <div className="phone:py-[19px] w-full py-[14px] pl-4">
        <span
          className={`${action === "none" ? "text-transparent" : "text-accentBlue hover:text-accentBlueHover cursor-pointer"} text-16p phone:text-18p select-none  leading-[22px] duration-150`}
          onClick={() => {
            if (addCharacter) {
              togglePopover();
            } else if (edit) {
              // TODO: edit 클릭 시 로직 필요
            }
          }}
          ref={popoverTargetRef}
        >
          {action}
        </span>
      </div>
      <Popover
        opened={popoverOpened}
        target={popoverTargetRef.current}
        backdrop={false}
        onBackdropClick={() => setPopoverOpened(false)}
        size={"w-[250px]"}
        className="popover phone:!top-[55px] !left-[16px] !top-[50px] rounded-xl"
        style={{
          boxShadow: "0px 0px 32px 0px rgba(0, 0, 0, 0.20)",
        }}
      >
        <List nested>
          <ListItem
            title={t("tabAction.options.option1")}
            link
            after={<PiImages className="text-20p text-black" />}
            onClick={() => {
              setPopoverOpened(false);
              dispatch(
                openModal({
                  title: t("tabAction.addFileModal.title"),
                  content: <FileAddModalContent />,
                  left: t("tabAction.addFileModal.cancel"),
                  right: t("tabAction.addFileModal.done"),
                }),
              );
            }}
          />
          <ListItem
            title={t("tabAction.options.option2")}
            link
            after={<PiPenNib className="text-20p text-black" />}
            onClick={() => {
              setPopoverOpened(false);
              toast.error(
                <Trans t={t} i18nKey="tabAction.noSupportToast">
                  아직 지원되지 않습니다.
                  <br></br>
                  스튜디오 페이지가 개발 중에 있어요!
                </Trans>,
              );
            }}
          />
        </List>
      </Popover>
      <Toaster />
    </>
  );
}
