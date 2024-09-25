import { Navbar, Page, Popup } from "konsta/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store.ts";
import { closeModal } from "@/redux/features/globalModal/slice.ts";

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
      className={`${!isOpen ? "!translate-y-[200%]" : ""}`}
    >
      <Page>
        <Navbar
          title={title}
          left={
            <span
              className="ml-2 cursor-pointer select-none text-16p text-accentBlue hover:text-accentBlueHover"
              onClick={() => dispatch(closeModal())}
            >
              {left}
            </span>
          }
          right={
            <span className="mr-2 select-none text-16p text-accentBlue/30">
              {right}
            </span>
          }
        />
        <div className="mt-[28px] flex flex-col gap-[28px] px-[20px] phone:px-[46px]">
          {content}
        </div>
      </Page>
    </Popup>
  );
}
