import { Button } from "konsta/react";
import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { enableDone } from "@/redux/features/globalModal/slice.ts";
import { setCharacterCard } from "@/redux/features/characterCard/slice.ts";
import toast from "react-hot-toast";
import { z } from "zod";
import { importFile } from "@/domain/utils/fileImportExport.ts";

export const characterFileSchema = z.object({
  name: z.string(),
  age: z.number(),
  description: z.string(),
  imageLink: z.string(),
});

export default function FileAddModalContent() {
  const { t } = useTranslation("pages/friends");
  const dispatch = useDispatch();
  const fileUploader = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleCharacterUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const cardFile = e.target.files ? e.target.files[0] : null;
    if (cardFile) {
      if (cardFile.type !== "application/json") {
        toast.error("JSON 형태의 파일만 업로드할 수 있습니다!");
      } else {
        const result = await importFile(cardFile, characterFileSchema);
        console.log("result:", result);
        setFileName(cardFile.name);
        dispatch(enableDone(true));
        dispatch(
          setCharacterCard({
            name: result.name,
            description: result.description,
            imageLink: result.imageLink,
          }),
        );
      }
    }
  };

  return (
    <>
      <span className="text-center text-16p leading-[20px]">
        {t("tabAction.addFileModal.content.one")}
      </span>
      <div className="flex justify-center">
        <Button
          className="h-[50px] w-fit rounded-[12px] px-[20px] duration-150 hover:bg-accentBlueHover"
          onClick={() => {
            if (fileUploader.current) {
              fileUploader.current.click();
            }
          }}
        >
          <span className="text-18p leading-[22px]">
            {t("tabAction.addFileModal.upload")}
          </span>
        </Button>
        <input
          ref={fileUploader}
          id="characterFileUpload"
          type="file"
          className="hidden"
          onChange={handleCharacterUpload}
        />
      </div>
      {fileName && (
        <div className="flex w-full justify-center font-semibold">
          {fileName}
        </div>
      )}

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
    </>
  );
}
