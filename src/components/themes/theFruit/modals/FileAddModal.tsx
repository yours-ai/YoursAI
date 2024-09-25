import { useTranslation } from "react-i18next";
import { Navbar, Page, Popup } from "konsta/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store.ts";
import { closeModal } from "@/redux/features/showModal/slice.ts";

export const FileAddModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation("pages/friends");
  const { isOpen, title, content } = useSelector(
    (state: RootState) => state.showModal,
  );
  console.log("모달 open 여부", isOpen);

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
              {t("tabAction.addFileModal.cancel")}
            </span>
          }
          right={
            <span className="mr-2 select-none text-16p text-accentBlue/30">
              {t("tabAction.addFileModal.done")}
            </span>
          }
        />
        <div className="mt-[28px] flex flex-col gap-[28px] px-[20px] phone:px-[46px]">
          {content}
        </div>
      </Page>
    </Popup>
  );
};
