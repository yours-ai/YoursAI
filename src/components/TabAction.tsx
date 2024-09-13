import { Dispatch, SetStateAction, useRef, useState } from "react";
import { List, ListItem, Popover } from "konsta/react";
import { PiImages, PiPenNib } from "react-icons/pi";
import toast, { Toaster } from "react-hot-toast";

function TabAction({
  action,
  setFileModalOpened,
}: {
  action: string;
  setFileModalOpened?: Dispatch<SetStateAction<boolean>>;
}) {
  const [popoverOpened, setPopoverOpened] = useState<boolean>(false);

  const popoverTargetRef = useRef<HTMLElement | null>(null);
  const openPopover = (targetRef: HTMLElement | string | null) => {
    popoverTargetRef.current =
      typeof targetRef === "string"
        ? document.querySelector(targetRef)
        : targetRef;
    setPopoverOpened(true);
  };
  return (
    <>
      <div className="w-full py-[19px] pl-4">
        <span
          className="popover-target cursor-pointer text-18p leading-[22px] text-accentBlue duration-150 hover:text-accentBlueHover"
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
        onBackdropClick={() => setPopoverOpened(false)}
        size={"w-[250px]"}
        className="!left-[16px]"
      >
        <List nested>
          <ListItem
            title="파일로 추가"
            link
            after={<PiImages className="text-20p text-black" />}
            onClick={() => {
              setPopoverOpened(false);
              if (setFileModalOpened) {
                setFileModalOpened(true);
              }
            }}
          />
          <ListItem
            title="직접 만들기"
            link
            after={<PiPenNib className="text-20p text-black" />}
            onClick={() => {
              setPopoverOpened(false);
              toast.error(
                <p>
                  아직 지원되지 않습니다.
                  <br />
                  스튜디오 페이지가 개발 중에 있어요!🤘
                </p>,
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
