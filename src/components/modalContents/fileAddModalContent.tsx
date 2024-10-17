import { Button } from "konsta/react";
import { useTranslation } from "react-i18next";

export default function FileAddModalContent() {
  const { t } = useTranslation("pages/friends");
  return (
    <div className="flex h-full items-center justify-center">
      <Button className="h-[50px] w-fit rounded-[12px] px-[20px] duration-150 hover:bg-accentBlueHover">
        <span className="text-18p leading-[22px]">
          {t("tabAction.addFileModal.upload")}
        </span>
      </Button>
    </div>
  );
}
