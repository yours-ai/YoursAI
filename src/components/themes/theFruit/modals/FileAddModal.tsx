import { useTranslation } from "react-i18next";
import { Button, Navbar, Page, Popup } from "konsta/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store.ts";
import { closeModal } from "@/redux/features/showModal/slice.ts";

export const FileAddModal = () => {
  const { t } = useTranslation("pages/friends");
  const dispatch = useDispatch();
  const { isOpen, modalName } = useSelector(
    (state: RootState) => state.showModal,
  );

  if (!isOpen || modalName !== "fileAdd") return null;

  return (
    <Popup
      opened={isOpen}
      onBackdropClick={() => dispatch(closeModal())}
      size="w-screen h-screen tablet:w-160 tablet:h-[370px]"
    >
      <Page>
        <Navbar
          title={t("tabAction.addFileModal.title")}
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
          <span className="text-center text-16p leading-[20px]">
            {t("tabAction.addFileModal.content.one")}
          </span>
          <div className="flex justify-center">
            <Button className="h-[50px] w-fit rounded-[12px] px-[20px] duration-150 hover:bg-accentBlueHover">
              <span className="text-18p leading-[22px]">
                {t("tabAction.addFileModal.upload")}
              </span>
            </Button>
          </div>

          <div className="flex flex-col text-14p">
            <span className="font-bold">
              {t("tabAction.addFileModal.content.two")}
            </span>
            <span>{t("tabAction.addFileModal.content.three")}</span>
            <div className="flex flex-col text-accentBlue underline duration-150 ">
              <a className="hover:text-accentBlueHover" href="#">
                아카라이브 AI 채팅 채널
              </a>
              <a className="hover:text-accentBlueHover" href="#">
                https://aicharactercards.com
              </a>
              <a className="hover:text-accentBlueHover" href="#">
                https://character-tavern.com/character/catalog
              </a>
              <a className="hover:text-accentBlueHover" href="#">
                https://realm.risuai.net/
              </a>
            </div>
            <span>{t("tabAction.addFileModal.content.four")}</span>
          </div>
        </div>
      </Page>
    </Popup>
  );
};
