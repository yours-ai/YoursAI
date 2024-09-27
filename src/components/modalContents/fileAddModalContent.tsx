import { Button } from "konsta/react";
import { useTranslation } from "react-i18next";

export default function FileAddModalContent() {
  const { t } = useTranslation("pages/friends");
  return (
    <>
      <span className="text-16p text-center leading-[20px]">
        {t("tabAction.addFileModal.content.one")}
      </span>
      <div className="flex justify-center">
        <Button className="hover:bg-accentBlueHover h-[50px] w-fit rounded-[12px] px-[20px] duration-150">
          <span className="text-18p leading-[22px]">
            {t("tabAction.addFileModal.upload")}
          </span>
        </Button>
      </div>

      <div className="text-14p flex flex-col">
        <span className="font-bold">
          {t("tabAction.addFileModal.content.two")}
        </span>
        <span>{t("tabAction.addFileModal.content.three")}</span>
        <div className="text-accentBlue flex flex-col underline duration-150 ">
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
    </>
  );
}