import { useTranslation } from "react-i18next";
import { Button } from "konsta/react";
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
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/50 px-[50px]">
      <div className="absolute inset-0 bg-white phone:static phone:w-[540px] phone:rounded-[13px]">
        <div className="flex items-center justify-between border-b border-border px-[18px] py-[11px]">
          <span
            className="cursor-pointer text-16p text-accentBlue hover:text-accentBlueHover"
            onClick={() => dispatch(closeModal())}
          >
            {t("tabAction.addFileModal.cancel")}
          </span>
          <span className="text-18p font-semibold leading-[22px]">
            {t("tabAction.addFileModal.title")}
          </span>
          <span className="cursor-pointer text-16p text-accentBlue/30 hover:text-accentBlueHover">
            {t("tabAction.addFileModal.done")}
          </span>
        </div>
        <div className="mt-[28px] flex flex-col gap-[28px] px-[46px] pb-[24px]">
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
                https://aicharactercads.com
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
      </div>
    </div>
  );
};
