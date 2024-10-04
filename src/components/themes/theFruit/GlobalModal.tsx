import { Navbar, Page } from "konsta/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store.ts";
import { closeModal } from "@/redux/features/globalModal/slice.ts";
import Popup from "@/contrib/konsta/Popup";

export default function GlobalModal() {
  const dispatch = useDispatch();
  const { isOpen, title, content, left, right } = useSelector(
    (state: RootState) => state.globalModal,
  );

  return (
    <Popup
      opened={isOpen}
      onBackdropClick={() => dispatch(closeModal())}
      size="w-screen h-screen tablet:w-160 tablet:h-[370px]"
    >
      <Page>
        <Navbar
          title={title}
          left={
            <span
              className="text-16p text-accentBlue hover:text-accentBlueHover ml-2 cursor-pointer select-none"
              onClick={() => dispatch(closeModal())}
            >
              {left}
            </span>
          }
          right={
            <span className="text-16p text-accentBlue/30 mr-2 select-none">
              {right}
            </span>
          }
        />
        <div className="phone:px-[46px] mt-[28px] flex flex-col gap-[28px] px-[20px]">
          {content}
        </div>
      </Page>
    </Popup>
  );
}
