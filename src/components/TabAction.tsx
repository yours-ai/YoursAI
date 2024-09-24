import { useRef, useState } from "react";
import { List, ListItem, Popover } from "konsta/react";
import { PiImages, PiPenNib } from "react-icons/pi";
import toast, { Toaster } from "react-hot-toast";
import { Trans, useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/features/showModal/slice.ts";

function TabAction({ action }: { action: string }) {
  const [popoverOpened, setPopoverOpened] = useState<boolean>(false);
  const { t } = useTranslation("pages/friends");
  const dispatch = useDispatch();

  const popoverTargetRef = useRef<HTMLElement | null>(null);
  const openPopover = (targetRef: HTMLElement | string | null) => {
    popoverTargetRef.current =
      typeof targetRef === "string"
        ? document.querySelector(targetRef)
        : targetRef;
    if (popoverOpened) {
      setPopoverOpened(false);
    } else {
      setPopoverOpened(true);
    }
  };
  return (
    <>
      <div className="w-full py-[14px] pl-4 phone:py-[19px]">
        <span
          className={`${action === "none" ? "text-transparent" : "cursor-pointer text-accentBlue hover:text-accentBlueHover"} popover-target  select-none text-16p leading-[22px]  duration-150 phone:text-18p`}
          onClick={() => {
            openPopover(".popover-target");
          }}
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
        className="!left-[16px] rounded-xl"
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
              dispatch(openModal("fileAdd"));
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

export default TabAction;
