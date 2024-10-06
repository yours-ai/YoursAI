import { Button } from "konsta/react";
import { useTranslation } from "react-i18next";

export default function FileAddModalContent() {
  const { t } = useTranslation("pages/friends");
  return (
    <>
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
            https://aicharactercards.com
          </a>
          <a className="hover:text-accentBlueHover" href="#">
            https://character-tavern.com/character/catalog
          </a>
        </div>
        <span>{t("tabAction.addFileModal.content.four")}</span>
      </div>
    </>
  );
}
