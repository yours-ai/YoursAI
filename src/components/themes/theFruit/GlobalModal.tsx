import { Navbar } from "konsta/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store.ts";
import { closeModal } from "@/redux/features/globalModal/slice.ts";
import Popup from "@/contrib/konsta/Popup";

export default function GlobalModal() {
  const dispatch = useDispatch();
  const {
    isOpen,
    isDone,
    title,
    content,
    left,
    right,
    leftAction,
    rightAction,
  } = useSelector((state: RootState) => state.globalModal);

  return (
    <Popup
      opened={isOpen}
      onBackdropClick={() => dispatch(closeModal())}
      size="w-screen h-screen tablet:w-fit tablet:h-fit pb-[25px]"
    >
      <Navbar
        title={title}
        left={
          <span
            className="ml-2 cursor-pointer select-none text-16p text-accentBlue hover:text-accentBlueHover"
            onClick={leftAction}
          >
            {left}
          </span>
        }
        right={
          <span
            className={`mr-2 select-none ${isDone ? "cursor-pointer text-accentBlue hover:text-accentBlueHover" : "text-accentBlue/30"} text-16p`}
            onClick={rightAction}
          >
            {right}
          </span>
        }
      />
      <div className="mt-[28px] flex flex-col gap-[28px] px-[20px] phone:px-[46px]">
        {content}
      </div>
    </Popup>
  );
}
