import { useRef, useState } from "react";
import { List, ListItem, Popover } from "konsta/react";
import { PiImages, PiPenNib } from "react-icons/pi";

function TabAction({ action }: { action: string }) {
  const [popoverOpened, setPopoverOpened] = useState<boolean>(false);
  const popoverTargetRef = useRef(null);
  const openPopover = (targetRef) => {
    popoverTargetRef.current = targetRef;
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
          />
          <ListItem
            title="직접 만들기"
            link
            after={<PiPenNib className="text-20p text-black" />}
          />
        </List>
      </Popover>
    </>
  );
}

export default TabAction;
